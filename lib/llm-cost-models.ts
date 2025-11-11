/**
 * LLM Cost Models and Calculation Engine
 * Implements formulas from: "A Cost-Benefit Analysis of On-Premise Large Language Model Deployment"
 */

import type { OpenSourceModel, CommercialAPI } from "./llm-pricing-data"
import { DEFAULT_PARAMS } from "./llm-pricing-data"

export interface CostCalculationParams {
  operatingHoursPerMonth: number
  electricityRatePerKWh: number
  monthlyTokenVolume?: number // Optional: for API cost calculation
}

export interface LocalDeploymentCost {
  hardwareCost: number
  monthlyElectricityCost: number
  totalCostAtMonth: (months: number) => number
}

export interface APICost {
  monthlyTokenCost: number
  totalCostAtMonth: (months: number) => number
}

export interface BreakEvenAnalysis {
  modelId: string
  modelName: string
  apiId: string
  apiName: string
  breakEvenMonths: number
  localCost: LocalDeploymentCost
  apiCost: APICost
  performanceGap: number // Percentage difference in average benchmark scores
  monthlyCapacity: number
}

export interface ComparisonResult {
  model: OpenSourceModel
  api: CommercialAPI
  breakEvenMonths: number
  localDeployment: {
    hardwareCost: number
    monthlyElectricityCost: number
    costAt12Months: number
    costAt24Months: number
    costAt36Months: number
  }
  apiUsage: {
    monthlyCost: number
    costAt12Months: number
    costAt24Months: number
    costAt36Months: number
  }
  performanceGap: number
  recommendation: "local" | "api" | "hybrid"
}

/**
 * Equation (1): Calculate initial hardware setup cost
 * C_hardware = N_GPU × C_GPU
 */
export function calculateHardwareCost(model: OpenSourceModel): number {
  return model.hardwareCost
}

/**
 * Equation (2): Calculate monthly electricity cost for LLM inference
 * C_electricity = N_GPU × P_GPU × H_operation × R_electricity
 *
 * Note: P_GPU in Watts, convert to kW by dividing by 1000
 */
export function calculateMonthlyElectricityCost(
  model: OpenSourceModel,
  params: CostCalculationParams = {
    operatingHoursPerMonth: DEFAULT_PARAMS.operatingHoursPerMonth,
    electricityRatePerKWh: DEFAULT_PARAMS.electricityRatePerKWh,
  }
): number {
  const powerKW = model.powerConsumption / 1000 // Convert Watts to kW
  const monthlyCost =
    powerKW * params.operatingHoursPerMonth * params.electricityRatePerKWh

  return monthlyCost
}

/**
 * Equation (3): Calculate total local deployment cost at time t
 * C_local(t) = C_hardware + C_electricity × t
 */
export function calculateLocalDeploymentCost(
  model: OpenSourceModel,
  params: CostCalculationParams = {
    operatingHoursPerMonth: DEFAULT_PARAMS.operatingHoursPerMonth,
    electricityRatePerKWh: DEFAULT_PARAMS.electricityRatePerKWh,
  }
): LocalDeploymentCost {
  const hardwareCost = calculateHardwareCost(model)
  const monthlyElectricityCost = calculateMonthlyElectricityCost(model, params)

  return {
    hardwareCost,
    monthlyElectricityCost,
    totalCostAtMonth: (months: number) =>
      hardwareCost + monthlyElectricityCost * months,
  }
}

/**
 * Equation (6): Calculate monthly token generation capacity
 * Q_capacity = T_throughput × H_operation × 3600
 */
export function calculateMonthlyCapacity(
  model: OpenSourceModel,
  params: CostCalculationParams = {
    operatingHoursPerMonth: DEFAULT_PARAMS.operatingHoursPerMonth,
    electricityRatePerKWh: DEFAULT_PARAMS.electricityRatePerKWh,
  }
): number {
  return model.tokensPerSecond * params.operatingHoursPerMonth * 3600
}

/**
 * Equation (4): Calculate equivalent API cost for generating tokens
 * C_API(Q_capacity) = (Q_capacity / 3) × (C_input / 1M) + (2 × Q_capacity / 3) × (C_output / 1M)
 *
 * Simplified with 1:2 input:output ratio
 */
export function calculateAPIMonthlyCapacityCost(
  api: CommercialAPI,
  monthlyCapacity: number
): number {
  // 1/3 of tokens are input, 2/3 are output (1:2 ratio)
  const inputTokens = monthlyCapacity / 3
  const outputTokens = (2 * monthlyCapacity) / 3

  const inputCost = (inputTokens / 1_000_000) * api.inputPricePerM
  const outputCost = (outputTokens / 1_000_000) * api.outputPricePerM

  return inputCost + outputCost
}

/**
 * Calculate API cost based on actual monthly token volume
 */
export function calculateAPITokenCost(
  api: CommercialAPI,
  monthlyTokenVolume: number
): number {
  // Assume 1:2 input:output ratio
  const inputTokens = monthlyTokenVolume / 3
  const outputTokens = (2 * monthlyTokenVolume) / 3

  const inputCost = (inputTokens / 1_000_000) * api.inputPricePerM
  const outputCost = (outputTokens / 1_000_000) * api.outputPricePerM

  return inputCost + outputCost
}

/**
 * Equation (5): Calculate API usage cost over time
 * C_API(t) = C_API(Q_capacity) × t
 */
export function calculateAPICost(
  api: CommercialAPI,
  monthlyCapacity: number
): APICost {
  const monthlyTokenCost = calculateAPIMonthlyCapacityCost(api, monthlyCapacity)

  return {
    monthlyTokenCost,
    totalCostAtMonth: (months: number) => monthlyTokenCost * months,
  }
}

/**
 * Equation (7): Calculate break-even point
 * C_local(t) = C_API(t)
 * Solve for t*: t* = C_hardware / (C_API_monthly - C_electricity_monthly)
 */
export function calculateBreakEvenPoint(
  model: OpenSourceModel,
  api: CommercialAPI,
  params: CostCalculationParams = {
    operatingHoursPerMonth: DEFAULT_PARAMS.operatingHoursPerMonth,
    electricityRatePerKWh: DEFAULT_PARAMS.electricityRatePerKWh,
  }
): number {
  const localCost = calculateLocalDeploymentCost(model, params)
  const monthlyCapacity = calculateMonthlyCapacity(model, params)
  const apiCost = calculateAPICost(api, monthlyCapacity)

  // If API is cheaper monthly than just electricity, local never breaks even
  if (apiCost.monthlyTokenCost <= localCost.monthlyElectricityCost) {
    return Infinity
  }

  const breakEvenMonths =
    localCost.hardwareCost /
    (apiCost.monthlyTokenCost - localCost.monthlyElectricityCost)

  return breakEvenMonths
}

/**
 * Calculate performance gap between open-source and commercial models
 * Uses average of available benchmarks
 */
export function calculatePerformanceGap(
  modelBenchmarks: { gpqa: number; math500: number; mmluPro: number; liveCodeBench: number },
  apiBenchmarks: { gpqa: number; math500: number; mmluPro: number; liveCodeBench: number }
): number {
  const modelAvg =
    (modelBenchmarks.gpqa +
      modelBenchmarks.math500 +
      modelBenchmarks.mmluPro +
      modelBenchmarks.liveCodeBench) /
    4

  const apiAvg =
    (apiBenchmarks.gpqa +
      apiBenchmarks.math500 +
      apiBenchmarks.mmluPro +
      apiBenchmarks.liveCodeBench) /
    4

  // Return percentage difference: negative means model is behind, positive means ahead
  return ((modelAvg - apiAvg) / apiAvg) * 100
}

/**
 * Comprehensive comparison between a model and API
 */
export function compareModelToAPI(
  model: OpenSourceModel,
  api: CommercialAPI,
  apiBenchmarks: { gpqa: number; math500: number; mmluPro: number; liveCodeBench: number },
  params: CostCalculationParams = {
    operatingHoursPerMonth: DEFAULT_PARAMS.operatingHoursPerMonth,
    electricityRatePerKWh: DEFAULT_PARAMS.electricityRatePerKWh,
  }
): ComparisonResult {
  const localCost = calculateLocalDeploymentCost(model, params)
  const monthlyCapacity = calculateMonthlyCapacity(model, params)
  const apiCost = calculateAPICost(api, monthlyCapacity)
  const breakEvenMonths = calculateBreakEvenPoint(model, api, params)
  const performanceGap = calculatePerformanceGap(model.benchmarks, apiBenchmarks)

  // Determine recommendation
  let recommendation: "local" | "api" | "hybrid"
  if (breakEvenMonths <= 12 && performanceGap > -10) {
    recommendation = "local"
  } else if (breakEvenMonths > 36 || performanceGap < -20) {
    recommendation = "api"
  } else {
    recommendation = "hybrid"
  }

  return {
    model,
    api,
    breakEvenMonths,
    localDeployment: {
      hardwareCost: localCost.hardwareCost,
      monthlyElectricityCost: localCost.monthlyElectricityCost,
      costAt12Months: localCost.totalCostAtMonth(12),
      costAt24Months: localCost.totalCostAtMonth(24),
      costAt36Months: localCost.totalCostAtMonth(36),
    },
    apiUsage: {
      monthlyCost: apiCost.monthlyTokenCost,
      costAt12Months: apiCost.totalCostAtMonth(12),
      costAt24Months: apiCost.totalCostAtMonth(24),
      costAt36Months: apiCost.totalCostAtMonth(36),
    },
    performanceGap,
    recommendation,
  }
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  if (amount === Infinity) return "N/A"
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Format large numbers (tokens) for display
 */
export function formatTokenCount(count: number): string {
  if (count >= 1e9) {
    return `${(count / 1e9).toFixed(1)}B`
  } else if (count >= 1e6) {
    return `${(count / 1e6).toFixed(1)}M`
  } else if (count >= 1e3) {
    return `${(count / 1e3).toFixed(1)}K`
  }
  return count.toString()
}

/**
 * Format break-even time for display
 */
export function formatBreakEven(months: number): string {
  if (months === Infinity) return "Never"
  if (months < 1) return `${Math.round(months * 30)} days`
  if (months < 12) return `${months.toFixed(1)} months`
  const years = (months / 12).toFixed(1)
  return `${years} years`
}
