"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import type { OpenSourceModel } from "@/lib/llm-pricing-data"
import { formatTokenCount } from "@/lib/llm-cost-models"

interface ModelSelectorProps {
  models: OpenSourceModel[]
  selectedModelId: string | null
  onSelectModel: (modelId: string) => void
}

export function ModelSelector({ models, selectedModelId, onSelectModel }: ModelSelectorProps) {
  const categorizeModels = (category: "small" | "medium" | "large") => {
    return models.filter((m) => m.category === category)
  }

  const ModelCard = ({ model }: { model: OpenSourceModel }) => {
    const isSelected = selectedModelId === model.id

    return (
      <Card
        className={`cursor-pointer transition-all hover:shadow-md ${
          isSelected ? "ring-2 ring-indigo-600" : ""
        }`}
        onClick={() => onSelectModel(model.id)}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg flex items-center gap-2">
                {model.name}
                {isSelected && <Check className="h-5 w-5 text-indigo-600" />}
              </CardTitle>
              <CardDescription className="mt-1">
                {model.totalParams} parameters • {model.gpuConfig}
              </CardDescription>
            </div>
            <Badge variant={isSelected ? "default" : "secondary"} className="capitalize">
              {model.category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-muted-foreground">Hardware Cost</p>
              <p className="font-semibold">${model.hardwareCost.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Throughput</p>
              <p className="font-semibold">{model.tokensPerSecond} tok/s</p>
            </div>
            <div>
              <p className="text-muted-foreground">Monthly Capacity</p>
              <p className="font-semibold">{formatTokenCount(model.monthlyCapacity)}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Power</p>
              <p className="font-semibold">{model.powerConsumption}W</p>
            </div>
          </div>

          <div className="pt-2 border-t">
            <p className="text-xs text-muted-foreground mb-2">Performance Benchmarks</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-muted-foreground">GPQA:</span>{" "}
                <span className="font-medium">{model.benchmarks.gpqa}%</span>
              </div>
              <div>
                <span className="text-muted-foreground">MATH:</span>{" "}
                <span className="font-medium">{model.benchmarks.math500}%</span>
              </div>
              <div>
                <span className="text-muted-foreground">MMLU-Pro:</span>{" "}
                <span className="font-medium">{model.benchmarks.mmluPro}%</span>
              </div>
              <div>
                <span className="text-muted-foreground">LiveCode:</span>{" "}
                <span className="font-medium">{model.benchmarks.liveCodeBench}%</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          Small Models
          <Badge variant="outline">Entry-Level</Badge>
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Perfect for SMEs and small-scale deployments. Consumer-grade GPU (RTX 5090), break-even in 0.3-3 months.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categorizeModels("small").map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          Medium Models
          <Badge variant="outline">Balanced</Badge>
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Ideal for medium enterprises. 1-2× datacenter GPUs (A100), break-even in 3.8-34 months.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categorizeModels("medium").map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          Large Models
          <Badge variant="outline">Enterprise-Scale</Badge>
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          For large enterprises with extreme workloads (&gt;50M tokens/month). Multi-node GPU clusters, break-even in
          3.5-69 months.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categorizeModels("large").map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>

      {selectedModelId && (
        <div className="flex justify-center pt-4">
          <Button size="lg" onClick={() => onSelectModel(selectedModelId)}>
            Continue with {models.find((m) => m.id === selectedModelId)?.name}
          </Button>
        </div>
      )}
    </div>
  )
}
