import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Filter, Calendar, BarChart3 } from "lucide-react";

type Report = { id: string; name: string; created: string; size: number };

export default function Reports() {
  const base = useMemo<Report[]>(
    () => [
      {
        id: "RPT-202401",
        name: "January Water Savings Report",
        created: "2025-01-31",
        size: 128,
      },
      {
        id: "RPT-202402",
        name: "February Harvest Analysis",
        created: "2025-02-28",
        size: 140,
      },
      {
        id: "RPT-202403",
        name: "March ROI Assessment",
        created: "2025-03-31",
        size: 156,
      },
      {
        id: "RPT-202404",
        name: "April Community Impact",
        created: "2025-04-30",
        size: 162,
      },
      {
        id: "RPT-202405",
        name: "May GIS Analysis Report",
        created: "2025-05-31",
        size: 184,
      },
      {
        id: "RPT-202406",
        name: "June Subsidy Applications",
        created: "2025-06-30",
        size: 176,
      },
    ],
    [],
  );
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<keyof Report>("created");
  const [asc, setAsc] = useState(false);

  const filtered = base
    .filter((r) =>
      [r.id, r.name].join(" ").toLowerCase().includes(query.toLowerCase()),
    )
    .sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      if (va < vb) return asc ? -1 : 1;
      if (va > vb) return asc ? 1 : -1;
      return 0;
    });

  const download = (r: Report) => {
    const csv = `ID,Name,Created,Size(KB)\n${r.id},${r.name},${r.created},${r.size}`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${r.id}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const reportStats = [
    { title: "Total Reports", value: "156", icon: FileText, color: "bg-blue-500" },
    { title: "This Month", value: "12", icon: Calendar, color: "bg-green-500" },
    { title: "Downloads", value: "2,847", icon: Download, color: "bg-purple-500" },
    { title: "Avg Size", value: "164 KB", icon: BarChart3, color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 font-serif">Reports & Analytics</h1>
          <p className="mt-2 text-gray-600 hide-description-mobile">
            Download detailed reports and track your rainwater harvesting progress
          </p>
        </div>

        {/* Report Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reportStats.map((stat) => (
            <Card key={stat.title} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 font-serif">{stat.value}</p>
                  </div>
                  <div className={`rounded-full p-3 ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center font-serif">
            <Filter className="mr-2 h-6 w-6 text-blue-600" />
            Filter & Search Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
        <div className="flex flex-1 gap-3">
          <Input
            placeholder="Search reports..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600">Sort</label>
            <select
              className="h-10 rounded-md border border-gray-300 bg-white px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortKey as string}
              onChange={(e) => setSortKey(e.target.value as keyof Report)}
            >
              <option value="created">Created</option>
              <option value="name">Name</option>
              <option value="size">Size</option>
              <option value="id">ID</option>
            </select>
            <Button variant="outline" size="sm" onClick={() => setAsc((v) => !v)}>
              {asc ? "Asc" : "Desc"}
            </Button>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button
            className="bg-green-600 hover:bg-green-700"
          onClick={() => {
            const headers = ["ID", "Name", "Created", "Size(KB)"];
            const csv = [
              headers.join(","),
              ...filtered.map((r) =>
                [r.id, r.name, r.created, r.size].join(","),
              ),
            ].join("\n");
            const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "all-reports.csv";
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
          }}
        >
            <Download className="mr-2 h-4 w-4" />
          Download All
          </Button>
        </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="font-serif">Available Reports</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
        <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-slate-600">
              <th className="px-6 py-4 font-medium">ID</th>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Created</th>
              <th className="px-6 py-4 font-medium">Size</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => (
              <tr key={r.id} className={`border-b border-gray-100 ${i % 2 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition-colors`}>
                <td className="px-6 py-4">
                  <Badge variant="outline" className="font-mono text-xs">
                    {r.id}
                  </Badge>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">{r.name}</td>
                <td className="px-6 py-4 text-gray-600">{r.created}</td>
                <td className="px-6 py-4 text-gray-600">{r.size} KB</td>
                <td className="px-6 py-4">
                  <Badge className="bg-green-100 text-green-800">
                    Ready
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <Button
                    size="sm"
                    className="rounded-lg bg-blue-600 hover:bg-blue-700"
                    onClick={() => download(r)}
                  >
                    <Download className="mr-1 h-3 w-3" />
                    Download Report
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}