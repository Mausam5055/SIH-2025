import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import { Button } from "@/components/ui/button";

export default function Index() {
  const kpis = [
    { title: "Water Saved", value: "1,250 KL", delta: "+8.4%", tone: "primary" },
    { title: "Roof Area Detected", value: "12,450 m²", delta: "+2.1%", tone: "slate" },
    { title: "ROI Estimate", value: "₹ 36.8L", delta: "+5.2%", tone: "green" },
  ] as const;

  const trendData = useMemo(
    () => [
      { month: "Jan", savings: 120, usage: 300 },
      { month: "Feb", savings: 180, usage: 280 },
      { month: "Mar", savings: 220, usage: 260 },
      { month: "Apr", savings: 260, usage: 250 },
      { month: "May", savings: 320, usage: 260 },
      { month: "Jun", savings: 400, usage: 270 },
    ],
    [],
  );

  const distribution = useMemo(
    () => [
      { name: "Irrigation", value: 45 },
      { name: "Cleaning", value: 20 },
      { name: "Sanitation", value: 25 },
      { name: "Other", value: 10 },
    ],
    [],
  );

  const distColors = [
    "hsl(221 83% 53%)",
    "hsl(160 92% 35%)",
    "hsl(215 17% 45%)",
    "hsl(210 24% 80%)",
  ];

  const activities = [
    { id: 1, type: "Analysis", title: "Roof segmentation completed", time: "2h ago" },
    { id: 2, type: "Report", title: "Monthly water savings published", time: "1d ago" },
    { id: 3, type: "Community", title: "New comment on ROI model", time: "2d ago" },
    { id: 4, type: "Analysis", title: "Updated runoff coefficients", time: "3d ago" },
  ];

  const reports = [
    { id: "RPT-202401", name: "January Savings", created: "2025-01-31", size: "128 KB" },
    { id: "RPT-202402", name: "February Savings", created: "2025-02-28", size: "140 KB" },
    { id: "RPT-202403", name: "March Savings", created: "2025-03-31", size: "156 KB" },
  ];

  const downloadCSV = () => {
    const headers = ["ID", "Name", "Created", "Size"];
    const rows = reports.map((r) => [r.id, r.name, r.created, r.size].join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sih-reports.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {kpis.map((k) => (
          <div
            key={k.title}
            className="rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-slate-500">{k.title}</h3>
              <span
                className={
                  k.tone === "primary"
                    ? "rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                    : k.tone === "green"
                    ? "rounded-full bg-secondary/10 px-2 py-0.5 text-xs font-medium text-secondary"
                    : "rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700"
                }
              >
                {k.delta}
              </span>
            </div>
            <p className="mt-3 text-2xl font-semibold text-slate-800">{k.value}</p>
          </div>
        ))}
      </section>

      {/* Charts */}
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-800">Trends</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ left: 10, right: 10, top: 10 }}>
                <CartesianGrid stroke="#E5E7EB" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={{ stroke: "#E5E7EB" }} />
                <YAxis tickLine={false} axisLine={{ stroke: "#E5E7EB" }} />
                <RechartsTooltip cursor={{ stroke: "#E5E7EB" }} />
                <Line type="monotone" dataKey="usage" stroke="hsl(215 17% 45%)" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="savings" stroke="hsl(221 83% 53%)" strokeWidth={2} dot={false} />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-800">Distribution</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={distribution} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={3}>
                  {distribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={distColors[index % distColors.length]} />
                  ))}
                </Pie>
                <Legend />
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Activity + Reports */}
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm xl:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-800">Recent Activity</h3>
          </div>
          <div className="divide-y divide-[hsl(var(--border))] overflow-hidden rounded-xl border border-[hsl(var(--border))]">
            {activities.map((a, idx) => (
              <div key={a.id} className={"flex items-center justify-between bg-white px-4 py-3 " + (idx % 2 === 1 ? "bg-slate-50" : "") }>
                <div>
                  <p className="text-sm font-medium text-slate-800">{a.title}</p>
                  <p className="text-xs text-slate-500">{a.type}</p>
                </div>
                <span className="text-xs text-slate-500">{a.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-base font-semibold text-slate-800">Reports</h3>
            <Button onClick={downloadCSV} className="rounded-lg bg-primary px-3 py-2 text-white hover:bg-primary/90">Download</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-slate-500">
                  <th className="px-3 py-2 font-medium">ID</th>
                  <th className="px-3 py-2 font-medium">Name</th>
                  <th className="px-3 py-2 font-medium">Created</th>
                  <th className="px-3 py-2 font-medium">Size</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((r, i) => (
                  <tr key={r.id} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                    <td className="px-3 py-2 text-slate-700">{r.id}</td>
                    <td className="px-3 py-2 text-slate-700">{r.name}</td>
                    <td className="px-3 py-2 text-slate-700">{r.created}</td>
                    <td className="px-3 py-2 text-slate-700">{r.size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
