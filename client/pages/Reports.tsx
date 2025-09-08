import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Report = { id: string; name: string; created: string; size: number };

export default function Reports() {
  const base = useMemo<Report[]>(
    () => [
      {
        id: "RPT-202401",
        name: "January Savings",
        created: "2025-01-31",
        size: 128,
      },
      {
        id: "RPT-202402",
        name: "February Savings",
        created: "2025-02-28",
        size: 140,
      },
      {
        id: "RPT-202403",
        name: "March Savings",
        created: "2025-03-31",
        size: 156,
      },
      {
        id: "RPT-202404",
        name: "April Savings",
        created: "2025-04-30",
        size: 162,
      },
      {
        id: "RPT-202405",
        name: "May Savings",
        created: "2025-05-31",
        size: 184,
      },
      {
        id: "RPT-202406",
        name: "June Savings",
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

  return (
    <div className="space-y-4">
      <div className="flex flex-col justify-between gap-3 rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm md:flex-row md:items-center">
        <div className="flex flex-1 gap-3">
          <Input
            placeholder="Search reports..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <label className="text-sm text-slate-600">Sort</label>
            <select
              className="h-10 rounded-md border border-[hsl(var(--border))] bg-white px-2 text-sm"
              value={sortKey as string}
              onChange={(e) => setSortKey(e.target.value as keyof Report)}
            >
              <option value="created">Created</option>
              <option value="name">Name</option>
              <option value="size">Size</option>
              <option value="id">ID</option>
            </select>
            <Button variant="ghost" onClick={() => setAsc((v) => !v)}>
              {asc ? "Asc" : "Desc"}
            </Button>
          </div>
        </div>
        <Button
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
          Download All
        </Button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-[hsl(var(--border))] bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="text-slate-500">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Created</th>
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((r, i) => (
              <tr key={r.id} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                <td className="px-4 py-3 text-slate-700">{r.id}</td>
                <td className="px-4 py-3 text-slate-700">{r.name}</td>
                <td className="px-4 py-3 text-slate-700">{r.created}</td>
                <td className="px-4 py-3 text-slate-700">{r.size} KB</td>
                <td className="px-4 py-3">
                  <Button
                    size="sm"
                    className="rounded-lg"
                    onClick={() => download(r)}
                  >
                    Download Report
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
