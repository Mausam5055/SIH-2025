import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  Legend,
  LineChart,
  Line,
  BarChart,
  Bar,
} from "recharts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Droplets, TrendingUp, Cloud } from "lucide-react";

export default function Analysis() {
  const [query, setQuery] = useState("");
  const [range, setRange] = useState({ from: "2025-01-01", to: "2025-06-30" });
  const [metric, setMetric] = useState("savings");

  const data = useMemo(
    () => [
      { month: "Jan", savings: 120, usage: 300, rainfall: 20, harvestPotential: 1800 },
      { month: "Feb", savings: 180, usage: 280, rainfall: 30, harvestPotential: 2200 },
      { month: "Mar", savings: 220, usage: 260, rainfall: 45, harvestPotential: 2800 },
      { month: "Apr", savings: 260, usage: 250, rainfall: 55, harvestPotential: 3200 },
      { month: "May", savings: 320, usage: 260, rainfall: 20, harvestPotential: 1600 },
      { month: "Jun", savings: 400, usage: 270, rainfall: 10, harvestPotential: 1200 },
    ],
    [],
  );

  const filtered = data.filter(() => true);

  const gisData = [
    { title: "Average Rainfall", value: "850mm/year", icon: Cloud, color: "bg-blue-500" },
    { title: "Groundwater Level", value: "12.5m depth", icon: Droplets, color: "bg-cyan-500" },
    { title: "Soil Permeability", value: "Moderate", icon: MapPin, color: "bg-green-500" },
    { title: "Harvest Efficiency", value: "78%", icon: TrendingUp, color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">GIS Analysis & Insights</h1>
          <p className="mt-2 text-gray-600">
            Real-time analysis of rainfall, groundwater, and soil conditions for optimal rainwater harvesting
          </p>
        </div>

        {/* GIS Data Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gisData.map((item) => (
            <Card key={item.title} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{item.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                  </div>
                  <div className={`rounded-full p-3 ${item.color}`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Analysis Filters</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Search
            </label>
            <Input
              placeholder="Query datasets, tags..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              From
            </label>
            <Input
              type="date"
              value={range.from}
              onChange={(e) =>
                setRange((r) => ({ ...r, from: e.target.value }))
              }
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              To
            </label>
            <Input
              type="date"
              value={range.to}
              onChange={(e) => setRange((r) => ({ ...r, to: e.target.value }))}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Metric
            </label>
            <select
              className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={metric}
              onChange={(e) => setMetric(e.target.value)}
            >
              <option value="savings">Water Savings</option>
              <option value="usage">Usage</option>
              <option value="rainfall">Rainfall</option>
              <option value="harvestPotential">Harvest Potential</option>
            </select>
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button className="rounded-lg bg-blue-600 hover:bg-blue-700">Run Analysis</Button>
        </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>
            {metric === "savings"
              ? "Savings"
              : metric === "usage"
                ? "Usage"
                : metric === "rainfall"
                ? "Rainfall"
                : "Harvest Potential"}{" "}
            Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={filtered}
                margin={{ left: 10, right: 10, top: 10 }}
              >
                <CartesianGrid stroke="#E5E7EB" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={{ stroke: "#E5E7EB" }}
                />
                <YAxis tickLine={false} axisLine={{ stroke: "#E5E7EB" }} />
                <RechartsTooltip />
                <Line
                  type="monotone"
                  dataKey={metric}
                  stroke="#2563EB"
                  strokeWidth={2}
                  dot={false}
                />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>
            Usage vs Savings
            </CardTitle>
          </CardHeader>
          <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={filtered}
                margin={{ left: 10, right: 10, top: 10 }}
              >
                <CartesianGrid stroke="#E5E7EB" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={{ stroke: "#E5E7EB" }}
                />
                <YAxis tickLine={false} axisLine={{ stroke: "#E5E7EB" }} />
                <RechartsTooltip />
                <Bar
                  dataKey="usage"
                  fill="#64748B"
                  radius={[6, 6, 0, 0]}
                />
                <Bar
                  dataKey="savings"
                  fill="#2563EB"
                  radius={[6, 6, 0, 0]}
                />
                <Legend />
              </BarChart>
            </ResponsiveContainer>
          </div>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  );
}
