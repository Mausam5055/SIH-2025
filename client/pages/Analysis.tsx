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

export default function Analysis() {
  const [query, setQuery] = useState("");
  const [range, setRange] = useState({ from: "2025-01-01", to: "2025-06-30" });
  const [metric, setMetric] = useState("savings");

  const data = useMemo(
    () => [
      { month: "Jan", savings: 120, usage: 300, rainfall: 20 },
      { month: "Feb", savings: 180, usage: 280, rainfall: 30 },
      { month: "Mar", savings: 220, usage: 260, rainfall: 45 },
      { month: "Apr", savings: 260, usage: 250, rainfall: 55 },
      { month: "May", savings: 320, usage: 260, rainfall: 20 },
      { month: "Jun", savings: 400, usage: 270, rainfall: 10 },
    ],
    [],
  );

  const filtered = data.filter(() => true);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm">
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
              className="h-10 w-full rounded-md border border-[hsl(var(--border))] bg-white px-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary"
              value={metric}
              onChange={(e) => setMetric(e.target.value)}
            >
              <option value="savings">Water Savings</option>
              <option value="usage">Usage</option>
              <option value="rainfall">Rainfall</option>
            </select>
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button className="rounded-lg">Run Analysis</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-base font-semibold text-slate-800">
            {metric === "savings"
              ? "Savings"
              : metric === "usage"
                ? "Usage"
                : "Rainfall"}{" "}
            Trend
          </h3>
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
                  stroke="hsl(221 83% 53%)"
                  strokeWidth={2}
                  dot={false}
                />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-base font-semibold text-slate-800">
            Usage vs Savings
          </h3>
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
                  fill="hsl(215 17% 45%)"
                  radius={[6, 6, 0, 0]}
                />
                <Bar
                  dataKey="savings"
                  fill="hsl(221 83% 53%)"
                  radius={[6, 6, 0, 0]}
                />
                <Legend />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
