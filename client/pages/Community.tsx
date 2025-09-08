import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Post {
  id: number;
  title: string;
  tag: string;
  time: string;
}

export default function Community() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Best practices for roof segmentation",
      tag: "Discussion",
      time: "2h",
    },
    { id: 2, title: "Share your ROI models", tag: "Guide", time: "1d" },
    { id: 3, title: "City-wise rainfall datasets", tag: "Data", time: "3d" },
  ]);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("Discussion");

  const add = () => {
    if (!title.trim()) return;
    setPosts((p) => [{ id: Date.now(), title, tag, time: "now" }, ...p]);
    setTitle("");
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm">
        <h3 className="mb-3 text-base font-semibold text-slate-800">
          Create Post
        </h3>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
          <div className="md:col-span-3">
            <Input
              placeholder="Share an idea or ask a question"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <select
              className="h-10 flex-1 rounded-md border border-[hsl(var(--border))] bg-white px-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            >
              <option>Discussion</option>
              <option>Guide</option>
              <option>Data</option>
            </select>
            <Button className="rounded-lg" onClick={add}>
              Post
            </Button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {posts.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {p.tag}
                </span>
                <h4 className="text-base font-medium text-slate-800">
                  {p.title}
                </h4>
              </div>
              <span className="text-xs text-slate-500">{p.time} ago</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
