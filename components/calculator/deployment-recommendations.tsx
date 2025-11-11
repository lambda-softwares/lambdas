"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, AlertCircle, TrendingUp, TrendingDown, Minus } from "lucide-react"
import type { ComparisonResult } from "@/lib/llm-cost-models"
import { formatCurrency, formatBreakEven } from "@/lib/llm-cost-models"

interface DeploymentRecommendationsProps {
  comparison: ComparisonResult
}

export function DeploymentRecommendations({ comparison }: DeploymentRecommendationsProps) {
  const getRecommendationConfig = () => {
    if (comparison.recommendation === "local") {
      return {
        title: "On-Premise Deployment Recommended",
        variant: "default" as const,
        icon: CheckCircle2,
        color: "text-green-600",
        bgColor: "bg-green-50 dark:bg-green-950",
        borderColor: "border-green-200 dark:border-green-800",
      }
    } else if (comparison.recommendation === "api") {
      return {
        title: "Cloud API Recommended",
        variant: "secondary" as const,
        icon: AlertCircle,
        color: "text-blue-600",
        bgColor: "bg-blue-50 dark:bg-blue-950",
        borderColor: "border-blue-200 dark:border-blue-800",
      }
    } else {
      return {
        title: "Hybrid Deployment Recommended",
        variant: "outline" as const,
        icon: Minus,
        color: "text-indigo-600",
        bgColor: "bg-indigo-50 dark:bg-indigo-950",
        borderColor: "border-indigo-200 dark:border-indigo-800",
      }
    }
  }

  const config = getRecommendationConfig()
  const Icon = config.icon

  const getDetailedRecommendation = () => {
    const breakEven = comparison.breakEvenMonths
    const perfGap = comparison.performanceGap

    if (comparison.recommendation === "local") {
      return {
        primary: `With a break-even period of ${formatBreakEven(breakEven)}, on-premise deployment offers strong ROI for your workload. ${
          perfGap > 0 ? `The ${comparison.model.name} even outperforms ${comparison.api.name} by ${perfGap.toFixed(1)}%.` : ""
        }`,
        benefits: [
          `Save ${formatCurrency(comparison.apiUsage.costAt12Months - comparison.localDeployment.costAt12Months)} in the first year`,
          "Complete data sovereignty and privacy control",
          "Predictable operational costs after hardware amortization",
          "No vendor lock-in or rate increases",
        ],
        considerations: [
          `Initial capital expenditure: ${formatCurrency(comparison.localDeployment.hardwareCost)}`,
          "Requires in-house GPU expertise and maintenance",
          `Monthly electricity: ${formatCurrency(comparison.localDeployment.monthlyElectricityCost)}`,
        ],
      }
    } else if (comparison.recommendation === "api") {
      return {
        primary: `With a break-even period of ${formatBreakEven(breakEven)}, cloud API deployment is more economical${
          perfGap < -10 ? ` and offers ${Math.abs(perfGap).toFixed(1)}% better performance` : ""
        }. The upfront investment may not justify the long-term savings.`,
        benefits: [
          "Zero upfront hardware investment",
          "Instant scalability for variable workloads",
          "Access to latest model updates without infrastructure changes",
          `Lower total cost over 3 years: ${formatCurrency(comparison.apiUsage.costAt36Months)} vs ${formatCurrency(comparison.localDeployment.costAt36Months)}`,
        ],
        considerations: [
          `Monthly costs: ${formatCurrency(comparison.apiUsage.monthlyCost)}`,
          "Data sent to external provider (compliance considerations)",
          "Potential for pricing changes or rate increases",
          "Limited control over model behavior and updates",
        ],
      }
    } else {
      return {
        primary: `A hybrid approach balances cost and capability. Use ${comparison.model.name} on-premise for sensitive/high-volume workloads, and ${comparison.api.name} for burst capacity or specialized tasks.`,
        benefits: [
          "Optimize cost by routing based on sensitivity and volume",
          "Data sovereignty for critical workloads",
          "Access to cutting-edge API models when needed",
          `Estimated 30-50% cost reduction vs. full API at scale`,
        ],
        considerations: [
          "Requires orchestration layer to route requests",
          "Mixed operational complexity (both local and cloud)",
          `Initial investment: ${formatCurrency(comparison.localDeployment.hardwareCost)}`,
          "Team needs expertise in both deployment models",
        ],
      }
    }
  }

  const recommendation = getDetailedRecommendation()

  const PerformanceIndicator = () => {
    if (comparison.performanceGap > 5) {
      return (
        <div className="flex items-center gap-2 text-green-600">
          <TrendingUp className="h-5 w-5" />
          <span className="font-semibold">+{comparison.performanceGap.toFixed(1)}% vs {comparison.api.name}</span>
        </div>
      )
    } else if (comparison.performanceGap < -5) {
      return (
        <div className="flex items-center gap-2 text-orange-600">
          <TrendingDown className="h-5 w-5" />
          <span className="font-semibold">{comparison.performanceGap.toFixed(1)}% vs {comparison.api.name}</span>
        </div>
      )
    } else {
      return (
        <div className="flex items-center gap-2 text-muted-foreground">
          <Minus className="h-5 w-5" />
          <span className="font-semibold">≈ Comparable to {comparison.api.name}</span>
        </div>
      )
    }
  }

  return (
    <div className="space-y-6">
      <Alert className={`${config.bgColor} ${config.borderColor}`}>
        <Icon className={`h-5 w-5 ${config.color}`} />
        <AlertTitle className="text-lg font-semibold">{config.title}</AlertTitle>
        <AlertDescription className="mt-2 text-base leading-relaxed">{recommendation.primary}</AlertDescription>
      </Alert>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Cost Analysis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">3-Year Cost Comparison</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950">
                  <span className="font-medium">On-Premise ({comparison.model.name})</span>
                  <span className="font-bold">{formatCurrency(comparison.localDeployment.costAt36Months)}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-amber-50 dark:bg-amber-950">
                  <span className="font-medium">Cloud API ({comparison.api.name})</span>
                  <span className="font-bold">{formatCurrency(comparison.apiUsage.costAt36Months)}</span>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-muted">
                  <span className="font-semibold">Potential Savings</span>
                  <span className="font-bold text-green-600">
                    {formatCurrency(Math.abs(comparison.apiUsage.costAt36Months - comparison.localDeployment.costAt36Months))}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Performance Comparison</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Average Benchmark Performance</p>
              <PerformanceIndicator />
            </div>
            <div className="pt-3 border-t space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Monthly Capacity</span>
                <span className="font-medium">
                  {(comparison.model.monthlyCapacity / 1e6).toFixed(1)}M tokens
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Throughput</span>
                <span className="font-medium">{comparison.model.tokensPerSecond} tok/s</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recommendation.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-green-600 mt-0.5">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-amber-600" />
              Considerations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recommendation.considerations.map((consideration, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-amber-600 mt-0.5">•</span>
                  <span>{consideration}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
        <CardHeader>
          <CardTitle>Enterprise Decision Framework</CardTitle>
          <CardDescription>Recommended next steps for your organization</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {comparison.recommendation === "local" && (
            <>
              <p className="text-sm leading-relaxed">
                <strong>Small Enterprises (SMEs):</strong> If you&apos;re processing &lt;10M tokens/month, start with a
                small model deployment. The ROI is immediate.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>Medium Enterprises:</strong> For 10-50M tokens/month, medium models offer the best balance.
                Consider starting with on-prem for steady workloads and API for bursts.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>Large Enterprises:</strong> At &gt;50M tokens/month, large models become economically viable.
                Factor in data sovereignty and compliance requirements.
              </p>
            </>
          )}
          {comparison.recommendation === "api" && (
            <>
              <p className="text-sm leading-relaxed">
                For your workload profile and budget constraints, cloud API services provide better value. Focus on
                optimizing API usage through prompt engineering, caching, and model cascading.
              </p>
              <p className="text-sm leading-relaxed">
                Consider revisiting on-premise deployment when: (1) token volume exceeds 50M/month, (2) data residency
                becomes mandatory, or (3) API pricing increases significantly.
              </p>
            </>
          )}
          {comparison.recommendation === "hybrid" && (
            <>
              <p className="text-sm leading-relaxed">
                <strong>Routing Strategy:</strong> Deploy {comparison.model.name} locally for high-volume, sensitive
                workloads (document analysis, internal tools). Use {comparison.api.name} for customer-facing features
                requiring cutting-edge capabilities.
              </p>
              <p className="text-sm leading-relaxed">
                <strong>Implementation:</strong> Build a simple routing layer that directs requests based on sensitivity
                classification and performance requirements. This maximizes ROI while maintaining flexibility.
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
