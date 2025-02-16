"use client"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { calculateEmailCost } from "@/utils/pricing";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis
} from "recharts";

// Modify the sample data to show cost per 1k emails
const sampleData = [
  { emails: 25000, cost: calculateEmailCost(25000) * 1000 },
  { emails: 50000, cost: calculateEmailCost(50000) * 1000 },
  { emails: 250000, cost: calculateEmailCost(250000) * 1000 },
  { emails: 500000, cost: calculateEmailCost(500000) * 1000 },
  { emails: 750000, cost: calculateEmailCost(750000) * 1000 },
  { emails: 1000000, cost: calculateEmailCost(1000000) * 1000 },
  { emails: 1250000, cost: calculateEmailCost(1250000) * 1000 },
  { emails: 1500000, cost: calculateEmailCost(1500000) * 1000 },
  { emails: 1750000, cost: calculateEmailCost(1750000) * 1000 },
  { emails: 2000000, cost: calculateEmailCost(2000000) * 1000 },
];

const chartConfig = {
  cost: {
    label: "USD",
    color: "hsl(20.5 90.2% 48.2%)",
  },
} satisfies ChartConfig;

export function PricingChart() {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        data={sampleData}
      >
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <XAxis
          dataKey="emails"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => {
            if (value >= 1000000) {
              return `${(value / 1000000).toFixed(1)}M`;
            }
            return `${(value / 1000).toFixed(0)}k`;
          }}
          label={{ value: "Number of emails per month", position: "insideBottom", offset: -5 }}
        />
        <ChartTooltip
          cursor={{ stroke: "#666", strokeWidth: 1 }}
          content={
            <ChartTooltipContent
              indicator="dot"
              formatter={(value, id) => {
                if (id === "cost") {
                  return [`$${Number(value.valueOf()).toFixed(2)}`, " per 1k emails"];
                }
                return [`${value.toLocaleString()}`, "Emails per month"];
              }}
            />
          }
        />
        <Area
          dataKey="cost"
          type="monotone"
          fill={chartConfig.cost.color}
          fillOpacity={0.4}
          stroke={chartConfig.cost.color}
          strokeWidth={2}
        />
      </AreaChart>
    </ChartContainer>
  );
} 