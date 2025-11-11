"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Info } from "lucide-react"
import {
  OPEN_SOURCE_MODELS,
  COMMERCIAL_APIS,
  COMMERCIAL_BENCHMARKS,
  DEFAULT_PARAMS,
  type OpenSourceModel,
  type CommercialAPI,
} from "@/lib/llm-pricing-data"
import { compareModelToAPI, type ComparisonResult } from "@/lib/llm-cost-models"
import { ModelSelector } from "./model-selector"
import { CostComparisonChart } from "./cost-comparison-chart"
import { DeploymentRecommendations } from "./deployment-recommendations"

type CalculatorStep = "select-model" | "select-api" | "configure" | "results"

export function LLMCostCalculator() {
  const [step, setStep] = useState<CalculatorStep>("select-model")
  const [selectedModel, setSelectedModel] = useState<OpenSourceModel | null>(null)
  const [selectedAPI, setSelectedAPI] = useState<CommercialAPI | null>(null)
  const [operatingHours, setOperatingHours] = useState(DEFAULT_PARAMS.operatingHoursPerMonth)
  const [electricityRate, setElectricityRate] = useState(DEFAULT_PARAMS.electricityRatePerKWh)
  const [comparison, setComparison] = useState<ComparisonResult | null>(null)

  const handleModelSelect = (modelId: string) => {
    const model = OPEN_SOURCE_MODELS.find((m) => m.id === modelId)
    if (model) {
      setSelectedModel(model)
      setStep("select-api")
    }
  }

  const handleAPISelect = (apiId: string) => {
    const api = COMMERCIAL_APIS.find((a) => a.id === apiId)
    if (api) {
      setSelectedAPI(api)
      setStep("configure")
    }
  }

  const handleCalculate = () => {
    if (!selectedModel || !selectedAPI) return

    const apiBenchmarks = COMMERCIAL_BENCHMARKS[selectedAPI.id as keyof typeof COMMERCIAL_BENCHMARKS]
    const result = compareModelToAPI(selectedModel, selectedAPI, apiBenchmarks, {
      operatingHoursPerMonth: operatingHours,
      electricityRatePerKWh: electricityRate,
    })

    setComparison(result)
    setStep("results")
  }

  const handleReset = () => {
    setStep("select-model")
    setSelectedModel(null)
    setSelectedAPI(null)
    setComparison(null)
    setOperatingHours(DEFAULT_PARAMS.operatingHoursPerMonth)
    setElectricityRate(DEFAULT_PARAMS.electricityRatePerKWh)
  }

  return (
    <div className="space-y-8">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center gap-2">
        {["select-model", "select-api", "configure", "results"].map((s, index) => {
          const stepLabels = ["Select Model", "Select API", "Configure", "Results"]
          const currentIndex = ["select-model", "select-api", "configure", "results"].indexOf(step)
          const isActive = index === currentIndex
          const isCompleted = index < currentIndex

          return (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`flex items-center gap-2 ${
                  isActive ? "text-foreground" : isCompleted ? "text-indigo-600" : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : isCompleted
                        ? "bg-indigo-100 dark:bg-indigo-950 text-indigo-600"
                        : "bg-muted"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="hidden md:inline text-sm font-medium">{stepLabels[index]}</span>
              </div>
              {index < 3 && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
            </div>
          )
        })}
      </div>

      {/* Step: Select Model */}
      {step === "select-model" && (
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Choose Your Open-Source Model</h2>
            <p className="text-muted-foreground">
              Select an open-source LLM based on your scale, budget, and performance requirements
            </p>
          </div>
          <ModelSelector
            models={OPEN_SOURCE_MODELS}
            selectedModelId={selectedModel?.id ?? null}
            onSelectModel={handleModelSelect}
          />
        </div>
      )}

      {/* Step: Select API */}
      {step === "select-api" && (
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Choose Commercial API to Compare</h2>
            <p className="text-muted-foreground">
              Select the commercial LLM service you&apos;re considering as an alternative
            </p>
            {selectedModel && (
              <Badge variant="outline" className="mt-4">
                Comparing against: {selectedModel.name}
              </Badge>
            )}
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {COMMERCIAL_APIS.map((api) => (
              <Card
                key={api.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedAPI?.id === api.id ? "ring-2 ring-indigo-600" : ""
                }`}
                onClick={() => handleAPISelect(api.id)}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{api.name}</CardTitle>
                  <CardDescription>{api.provider}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Input:</span>
                      <span className="font-semibold">${api.inputPricePerM}/1M tokens</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Output:</span>
                      <span className="font-semibold">${api.outputPricePerM}/1M tokens</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span className="text-muted-foreground">Avg (1:2):</span>
                      <span className="font-bold text-indigo-600">${api.avgPricePerM.toFixed(2)}/1M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" onClick={() => setStep("select-model")}>
              Back
            </Button>
            {selectedAPI && (
              <Button onClick={() => setStep("configure")}>
                Continue with {selectedAPI.name}
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Step: Configure Parameters */}
      {step === "configure" && (
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Configure Your Deployment</h2>
            <p className="text-muted-foreground">Fine-tune operational parameters for accurate cost analysis</p>
            <div className="flex gap-2 justify-center mt-4">
              <Badge variant="outline">{selectedModel?.name}</Badge>
              <span className="text-muted-foreground">vs</span>
              <Badge variant="outline">{selectedAPI?.name}</Badge>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Operational Parameters</CardTitle>
              <CardDescription>Adjust these based on your expected usage patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="operating-hours" className="flex items-center gap-2">
                  Operating Hours per Month
                  <Info className="h-4 w-4 text-muted-foreground" />
                </Label>
                <Input
                  id="operating-hours"
                  type="number"
                  value={operatingHours}
                  onChange={(e) => setOperatingHours(Number(e.target.value))}
                  min={1}
                  max={730}
                />
                <p className="text-xs text-muted-foreground">
                  Default: 160 hours (8 hours/day × 20 days/month). Adjust for 24/7 or custom schedules.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="electricity-rate" className="flex items-center gap-2">
                  Electricity Rate (USD per kWh)
                  <Info className="h-4 w-4 text-muted-foreground" />
                </Label>
                <Input
                  id="electricity-rate"
                  type="number"
                  step="0.01"
                  value={electricityRate}
                  onChange={(e) => setElectricityRate(Number(e.target.value))}
                  min={0.01}
                  max={1}
                />
                <p className="text-xs text-muted-foreground">
                  Default: $0.15/kWh (typical business rate). Check your local commercial electricity rates.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-muted/50 space-y-2">
                <p className="font-semibold">Estimated Monthly Capacity</p>
                <p className="text-2xl font-bold text-indigo-600">
                  {selectedModel && ((selectedModel.tokensPerSecond * operatingHours * 3600) / 1e6).toFixed(1)}M tokens
                </p>
                <p className="text-xs text-muted-foreground">
                  Based on {selectedModel?.tokensPerSecond} tok/s × {operatingHours} hours
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" onClick={() => setStep("select-api")}>
              Back
            </Button>
            <Button onClick={handleCalculate}>Calculate Break-Even Analysis</Button>
          </div>
        </div>
      )}

      {/* Step: Results */}
      {step === "results" && comparison && (
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Cost-Benefit Analysis Results</h2>
            <p className="text-muted-foreground">
              Comparing {comparison.model.name} (on-premise) vs {comparison.api.name} (cloud API)
            </p>
          </div>

          <Tabs defaultValue="chart" className="space-y-6">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="chart">Cost Analysis</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>

            <TabsContent value="chart" className="space-y-6">
              <CostComparisonChart comparison={comparison} maxMonths={60} />

              <Card>
                <CardHeader>
                  <CardTitle>Detailed Cost Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">On-Premise ({comparison.model.name})</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between p-2 rounded bg-muted/50">
                          <span>Hardware (one-time)</span>
                          <span className="font-semibold">
                            ${comparison.localDeployment.hardwareCost.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between p-2 rounded bg-muted/50">
                          <span>Electricity (monthly)</span>
                          <span className="font-semibold">
                            ${comparison.localDeployment.monthlyElectricityCost.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between p-2 rounded bg-muted/50">
                          <span>Year 1 Total</span>
                          <span className="font-semibold">
                            ${comparison.localDeployment.costAt12Months.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between p-2 rounded bg-muted/50">
                          <span>Year 2 Total</span>
                          <span className="font-semibold">
                            ${comparison.localDeployment.costAt24Months.toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between p-2 rounded bg-indigo-100 dark:bg-indigo-950">
                          <span className="font-semibold">Year 3 Total</span>
                          <span className="font-bold">
                            ${comparison.localDeployment.costAt36Months.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Cloud API ({comparison.api.name})</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between p-2 rounded bg-muted/50">
                          <span>Hardware (one-time)</span>
                          <span className="font-semibold">$0</span>
                        </div>
                        <div className="flex justify-between p-2 rounded bg-muted/50">
                          <span>API Usage (monthly)</span>
                          <span className="font-semibold">${comparison.apiUsage.monthlyCost.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between p-2 rounded bg-muted/50">
                          <span>Year 1 Total</span>
                          <span className="font-semibold">${comparison.apiUsage.costAt12Months.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between p-2 rounded bg-muted/50">
                          <span>Year 2 Total</span>
                          <span className="font-semibold">${comparison.apiUsage.costAt24Months.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between p-2 rounded bg-amber-100 dark:bg-amber-950">
                          <span className="font-semibold">Year 3 Total</span>
                          <span className="font-bold">${comparison.apiUsage.costAt36Months.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations">
              <DeploymentRecommendations comparison={comparison} />
            </TabsContent>
          </Tabs>

          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" onClick={handleReset}>
              Start New Analysis
            </Button>
            <Button variant="outline" onClick={() => setStep("configure")}>
              Adjust Parameters
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
