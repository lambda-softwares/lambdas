"use client"

import { useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts"
import type { ComparisonResult } from "@/lib/llm-cost-models"
import { formatCurrency } from "@/lib/llm-cost-models"

interface CostComparisonChartProps {
  comparison: ComparisonResult
  maxMonths?: number
}

export function CostComparisonChart({ comparison, maxMonths = 60 }: CostComparisonChartProps) {
  const chartData = useMemo(() => {
    const data = []
    const step = Math.max(1, Math.floor(maxMonths / 60)) // Ensure reasonable number of points

    for (let month = 0; month <= maxMonths; month += step) {
      data.push({
        month,
        local: comparison.localDeployment.hardwareCost + comparison.localDeployment.monthlyElectricityCost * month,
        api: comparison.apiUsage.monthlyCost * month,
      })
    }

    // Always include the break-even point if it's within range
    if (comparison.breakEvenMonths > 0 && comparison.breakEvenMonths <= maxMonths) {
      const breakEvenExists = data.some((d) => Math.abs(d.month - comparison.breakEvenMonths) < step / 2)
      if (!breakEvenExists) {
        data.push({
          month: comparison.breakEvenMonths,
          local:
            comparison.localDeployment.hardwareCost +
            comparison.localDeployment.monthlyElectricityCost * comparison.breakEvenMonths,
          api: comparison.apiUsage.monthlyCost * comparison.breakEvenMonths,
        })
        data.sort((a, b) => a.month - b.month)
      }
    }

    return data
  }, [comparison, maxMonths])

  const breakEvenInRange =
    comparison.breakEvenMonths > 0 && comparison.breakEvenMonths < Infinity && comparison.breakEvenMonths <= maxMonths

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cost Over Time</CardTitle>
        <CardDescription>
          Comparing {comparison.model.name} (local) vs {comparison.api.name} (API) over {maxMonths} months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="month"
                label={{ value: "Months", position: "insideBottom", offset: -5 }}
                className="text-[0.75rem] leading-[1.33]"
              />
              <YAxis
                label={{ value: "Total Cost (USD)", angle: -90, position: "insideLeft" }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                className="text-[0.75rem] leading-[1.33]"
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (!active || !payload || payload.length === 0) return null
                  return (
                    <div className="bg-background border rounded-lg p-3 shadow-lg">
                      <p className="font-semibold mb-2">Month {payload[0]?.payload.month}</p>
                      {payload.map((entry, index) => (
                        <p key={index} className="text-[0.9375rem] leading-[1.33]" style={{ color: entry.color }}>
                          {entry.name === "local" ? "Local Deployment" : "API Usage"}:{" "}
                          {formatCurrency(entry.value as number)}
                        </p>
                      ))}
                      {breakEvenInRange &&
                        Math.abs((payload[0]?.payload.month ?? 0) - comparison.breakEvenMonths) < 1 && (
                          <p className="text-[0.9375rem] leading-[1.33] font-semibold text-indigo-600 mt-1">Break-even Point</p>
                        )}
                    </div>
                  )
                }}
              />
              <Legend
                wrapperStyle={{ paddingTop: "20px" }}
                formatter={(value) => (value === "local" ? "Local Deployment" : "API Usage")}
              />
              <Line
                type="monotone"
                dataKey="local"
                stroke="#6366f1"
                strokeWidth={2}
                dot={false}
                name="local"
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="api"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={false}
                name="api"
                activeDot={{ r: 6 }}
              />
              {breakEvenInRange && (
                <ReferenceLine
                  x={comparison.breakEvenMonths}
                  stroke="#22c55e"
                  strokeDasharray="5 5"
                  label={{
                    value: `Break-even: ${comparison.breakEvenMonths.toFixed(1)}mo`,
                    position: "top",
                    fill: "#22c55e",
                    fontSize: 12,
                  }}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 rounded-lg bg-muted/50">
            <p className="text-[0.9375rem] leading-[1.33] text-muted-foreground mb-1">Break-even Point</p>
            <p className="text-[1.75rem] leading-[1.21] font-semibold">
              {comparison.breakEvenMonths === Infinity
                ? "Never"
                : comparison.breakEvenMonths < 1
                  ? `${Math.round(comparison.breakEvenMonths * 30)}d`
                  : `${comparison.breakEvenMonths.toFixed(1)}mo`}
            </p>
          </div>
          <div className="p-4 rounded-lg bg-muted/50">
            <p className="text-[0.9375rem] leading-[1.33] text-muted-foreground mb-1">Hardware Investment</p>
            <p className="text-[1.75rem] leading-[1.21] font-semibold">{formatCurrency(comparison.localDeployment.hardwareCost)}</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/50">
            <p className="text-[0.9375rem] leading-[1.33] text-muted-foreground mb-1">API Monthly Cost</p>
            <p className="text-[1.75rem] leading-[1.21] font-semibold">{formatCurrency(comparison.apiUsage.monthlyCost)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
