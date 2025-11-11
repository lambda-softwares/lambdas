/**
 * LLM Pricing Data and Model Specifications
 * Based on: "A Cost-Benefit Analysis of On-Premise Large Language Model Deployment"
 * Source: Tables I-V from the research paper
 */

export interface CommercialAPI {
  id: string
  name: string
  provider: string
  inputPricePerM: number // USD per 1M tokens
  outputPricePerM: number // USD per 1M tokens
  avgPricePerM: number // Weighted average (1:2 input:output ratio)
}

export interface OpenSourceModel {
  id: string
  name: string
  category: "small" | "medium" | "large"
  totalParams: string
  activeParams: string
  vramRequired: string
  gpuConfig: string
  gpuCount: number
  tokensPerSecond: number
  hardwareCost: number // USD
  powerConsumption: number // Watts
  monthlyCapacity: number // tokens/month at 8h/day, 20 days/month
  benchmarks: {
    gpqa: number
    math500: number
    mmluPro: number
    liveCodeBench: number
  }
}

export interface GPUSpec {
  id: string
  name: string
  memory: string
  powerWatts: number
  priceUSD: number
  category: "datacenter" | "prosumer"
}

// Commercial API Pricing (Table II from paper)
export const COMMERCIAL_APIS: CommercialAPI[] = [
  {
    id: "gpt-5",
    name: "GPT-5",
    provider: "OpenAI",
    inputPricePerM: 1.25,
    outputPricePerM: 10.0,
    avgPricePerM: 7.08, // (1.25 + 2*10.0) / 3
  },
  {
    id: "claude-4-opus",
    name: "Claude-4 Opus",
    provider: "Anthropic",
    inputPricePerM: 15.0,
    outputPricePerM: 75.0,
    avgPricePerM: 55.0, // (15.0 + 2*75.0) / 3
  },
  {
    id: "claude-4-sonnet",
    name: "Claude-4 Sonnet",
    provider: "Anthropic",
    inputPricePerM: 3.0,
    outputPricePerM: 15.0,
    avgPricePerM: 11.0, // (3.0 + 2*15.0) / 3
  },
  {
    id: "grok-4",
    name: "Grok-4",
    provider: "xAI",
    inputPricePerM: 3.0,
    outputPricePerM: 15.0,
    avgPricePerM: 11.0,
  },
  {
    id: "gemini-2.5-pro",
    name: "Gemini 2.5 Pro",
    provider: "Google",
    inputPricePerM: 1.25,
    outputPricePerM: 10.0,
    avgPricePerM: 7.08,
  },
]

// GPU Specifications (Table III from paper)
export const GPU_SPECS: GPUSpec[] = [
  {
    id: "a100-80gb",
    name: "NVIDIA A100-80GB",
    memory: "80 GB",
    powerWatts: 400,
    priceUSD: 15000,
    category: "datacenter",
  },
  {
    id: "rtx-5090-32gb",
    name: "NVIDIA RTX 5090-32GB",
    memory: "32 GB",
    powerWatts: 575,
    priceUSD: 2000,
    category: "prosumer",
  },
]

// Open Source Models (Tables I, IV, V from paper)
export const OPEN_SOURCE_MODELS: OpenSourceModel[] = [
  // Large Open Models
  {
    id: "kimi-k2",
    name: "Kimi-K2",
    category: "large",
    totalParams: "1T",
    activeParams: "32B",
    vramRequired: "1000 GB",
    gpuConfig: "16× A100-80GB",
    gpuCount: 16,
    tokensPerSecond: 800,
    hardwareCost: 240000,
    powerConsumption: 6400, // 16 * 400W
    monthlyCapacity: 506.9e6, // 800 tok/s * 8h * 20d * 3600s
    benchmarks: {
      gpqa: 76.6,
      math500: 97.1,
      mmluPro: 81.9,
      liveCodeBench: 55.6,
    },
  },
  {
    id: "glm-4.5",
    name: "GLM-4.5",
    category: "large",
    totalParams: "355B",
    activeParams: "32B",
    vramRequired: "355 GB",
    gpuConfig: "6× A100-80GB",
    gpuCount: 6,
    tokensPerSecond: 400,
    hardwareCost: 90000,
    powerConsumption: 2400,
    monthlyCapacity: 253.4e6,
    benchmarks: {
      gpqa: 78.2,
      math500: 97.9,
      mmluPro: 80.1,
      liveCodeBench: 73.8,
    },
  },
  {
    id: "qwen3-235b",
    name: "Qwen3-235B",
    category: "large",
    totalParams: "235B",
    activeParams: "22B",
    vramRequired: "235 GB",
    gpuConfig: "4× A100-80GB",
    gpuCount: 4,
    tokensPerSecond: 400,
    hardwareCost: 60000,
    powerConsumption: 1600,
    monthlyCapacity: 253.4e6,
    benchmarks: {
      gpqa: 79.0,
      math500: 98.4,
      mmluPro: 87.1,
      liveCodeBench: 78.8,
    },
  },

  // Medium Open Models
  {
    id: "gpt-oss-120b",
    name: "gpt-oss-120B",
    category: "medium",
    totalParams: "120B",
    activeParams: "5.1B",
    vramRequired: "120 GB (80 GB with MXFP4)",
    gpuConfig: "2× A100-80GB",
    gpuCount: 2,
    tokensPerSecond: 200,
    hardwareCost: 30000,
    powerConsumption: 800,
    monthlyCapacity: 126.7e6,
    benchmarks: {
      gpqa: 78.2,
      math500: 0, // Not available in paper
      mmluPro: 83.7,
      liveCodeBench: 82.4,
    },
  },
  {
    id: "glm-4.5-air",
    name: "GLM-4.5-Air",
    category: "medium",
    totalParams: "106B",
    activeParams: "12B",
    vramRequired: "106 GB",
    gpuConfig: "2× A100-80GB",
    gpuCount: 2,
    tokensPerSecond: 220,
    hardwareCost: 30000,
    powerConsumption: 800,
    monthlyCapacity: 139.4e6,
    benchmarks: {
      gpqa: 73.3,
      math500: 96.5,
      mmluPro: 86.0,
      liveCodeBench: 83.5,
    },
  },
  {
    id: "llama-3.3-70b",
    name: "Llama-3.3-70B",
    category: "medium",
    totalParams: "70B",
    activeParams: "70B",
    vramRequired: "70 GB",
    gpuConfig: "1× A100-80GB",
    gpuCount: 1,
    tokensPerSecond: 190,
    hardwareCost: 15000,
    powerConsumption: 400,
    monthlyCapacity: 120.4e6,
    benchmarks: {
      gpqa: 49.8,
      math500: 77.3,
      mmluPro: 86.6,
      liveCodeBench: 84.3,
    },
  },

  // Small Open Models
  {
    id: "exaone-4.0-32b",
    name: "EXAONE 4.0 32B",
    category: "small",
    totalParams: "32B",
    activeParams: "32B",
    vramRequired: "32 GB",
    gpuConfig: "1× RTX 5090",
    gpuCount: 1,
    tokensPerSecond: 200,
    hardwareCost: 2000,
    powerConsumption: 575,
    monthlyCapacity: 126.7e6,
    benchmarks: {
      gpqa: 73.9,
      math500: 97.7,
      mmluPro: 86.2,
      liveCodeBench: 63.9,
    },
  },
  {
    id: "qwen3-30b",
    name: "Qwen3-30B",
    category: "small",
    totalParams: "30B",
    activeParams: "30B",
    vramRequired: "30 GB",
    gpuConfig: "1× RTX 5090",
    gpuCount: 1,
    tokensPerSecond: 180,
    hardwareCost: 2000,
    powerConsumption: 575,
    monthlyCapacity: 114.0e6,
    benchmarks: {
      gpqa: 70.7,
      math500: 97.6,
      mmluPro: 80.5,
      liveCodeBench: 68.4,
    },
  },
  {
    id: "magistral-small",
    name: "Magistral Small",
    category: "small",
    totalParams: "24B",
    activeParams: "24B",
    vramRequired: "24 GB",
    gpuConfig: "1× RTX 5090",
    gpuCount: 1,
    tokensPerSecond: 150,
    hardwareCost: 2000,
    powerConsumption: 575,
    monthlyCapacity: 95.0e6,
    benchmarks: {
      gpqa: 64.1,
      math500: 96.3,
      mmluPro: 74.6,
      liveCodeBench: 28.8,
    },
  },
]

// Commercial Model Benchmarks for comparison (Table I)
export const COMMERCIAL_BENCHMARKS = {
  "gpt-5": {
    gpqa: 85.4,
    math500: 99.4,
    mmluPro: 81.8,
    liveCodeBench: 66.8,
  },
  "claude-4-sonnet": {
    gpqa: 68.3,
    math500: 93.4,
    mmluPro: 70.7,
    liveCodeBench: 44.9,
  },
  "claude-4-opus": {
    gpqa: 70.1,
    math500: 94.1,
    mmluPro: 51.4,
    liveCodeBench: 54.2,
  },
  "grok-4": {
    gpqa: 87.7,
    math500: 99.0,
    mmluPro: 71.3,
    liveCodeBench: 80.8,
  },
  "gemini-2.5-pro": {
    gpqa: 84.4,
    math500: 96.7,
    mmluPro: 74.7,
    liveCodeBench: 81.5,
  },
}

// Default calculation parameters
export const DEFAULT_PARAMS = {
  operatingHoursPerMonth: 160, // 8 hours/day * 20 days/month
  electricityRatePerKWh: 0.15, // USD per kWh (business rate)
  inputOutputRatio: 0.5, // 1:2 ratio (1 input, 2 output)
}
