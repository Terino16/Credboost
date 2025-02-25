"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface TestimonialChartProps {
  groupedData: { range: string; pending: number; approved: number; rejected: number }[];
}

export default function TestimonialChart({ groupedData }: TestimonialChartProps) {
  console.log("Chart Data:", groupedData); // Debugging Output

  const chartConfig = {
    pending: { label: "Pending", color: "hsl(var(--chart-1))" },
    approved: { label: "Approved", color: "hsl(var(--chart-2))" },
    rejected: { label: "Rejected", color: "hsl(var(--chart-3))" },
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig}>
      <AreaChart data={groupedData} margin={{ left: 12, right: 12 }} height={300}>
        <CartesianGrid vertical={false} stroke="hsl(var(--muted))" />
        <XAxis 
          dataKey="range" 
          tickLine={false} 
          axisLine={false} 
          tickMargin={8} 
          tick={{ fill: "hsl(var(--muted-foreground))" }} 
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />

        {/* Render only available datasets */}
        {groupedData.some((d) => d.pending > 0) && (
          <Area
            dataKey="pending"
            type="natural"
            fill="hsl(var(--chart-1))"
            fillOpacity={0.4}
            stroke="hsl(var(--chart-1))"
            stackId="a"
          />
        )}
        {groupedData.some((d) => d.approved > 0) && (
          <Area
            dataKey="approved"
            type="natural"
            fill="hsl(var(--chart-2))"
            fillOpacity={0.4}
            stroke="hsl(var(--chart-2))"
            stackId="a"
          />
        )}
        {groupedData.some((d) => d.rejected > 0) && (
          <Area
            dataKey="rejected"
            type="natural"
            fill="hsl(var(--chart-3))"
            fillOpacity={0.4}
            stroke="hsl(var(--chart-3))"
            stackId="a"
          />
        )}
      </AreaChart>
    </ChartContainer>
  );
}
