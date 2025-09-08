import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Share2, Heart, Eye } from "lucide-react";

interface Post {
  id: number;
  title: string;
  tag: string;
  time: string;
  author: string;
  likes: number;
  comments: number;
  views: number;
}

export default function Community() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Best practices for roof segmentation",
      tag: "Discussion",
      time: "2h",
      author: "Rajesh Kumar",
      likes: 24,
      comments: 8,
      views: 156
    },
    { 
      id: 2, 
      title: "Share your ROI models", 
      tag: "Guide", 
      time: "1d",
      author: "Priya Sharma",
      likes: 42,
      comments: 15,
      views: 289
    },
    { 
      id: 3, 
      title: "City-wise rainfall datasets", 
      tag: "Data", 
      time: "3d",
      author: "Dr. Amit Singh",
      likes: 67,
      comments: 23,
      views: 445
    },
  ]);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("Discussion");

  const add = () => {
    if (!title.trim()) return;
    setPosts((p) => [{ 
      id: Date.now(), 
      title, 
      tag, 
      time: "now",
      author: "You",
      likes: 0,
      comments: 0,
      views: 1
    }, ...p]);
    setTitle("");
  };

  const communityStats = [
    { title: "Active Members", value: "2,847", icon: Users, color: "bg-blue-500" },
    { title: "Total Posts", value: "1,234", icon: MessageCircle, color: "bg-green-500" },
    { title: "Knowledge Shared", value: "5,678", icon: Share2, color: "bg-purple-500" },
    { title: "Success Stories", value: "156", icon: Heart, color: "bg-red-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Community Hub</h1>
          <p className="mt-2 text-gray-600 hide-description-mobile">
            Connect, share knowledge, and learn from fellow rainwater harvesting enthusiasts
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {communityStats.map((stat) => (
            <Card key={stat.title} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
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
          <CardTitle className="flex items-center">
            <MessageCircle className="mr-2 h-6 w-6 text-blue-600" />
          Create Post
          </CardTitle>
        </CardHeader>
        <CardContent>
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
              className="h-10 flex-1 rounded-md border border-gray-300 bg-white px-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            >
              <option>Discussion</option>
              <option>Guide</option>
              <option>Data</option>
              <option>Success Story</option>
              <option>Question</option>
            </select>
            <Button className="rounded-lg bg-blue-600 hover:bg-blue-700" onClick={add}>
              Post
            </Button>
          </div>
        </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {posts.map((p) => (
          <Card
            key={p.id}
            className="border-0 shadow-lg transition-all hover:shadow-xl"
          >
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge 
                      variant="secondary" 
                      className={
                        p.tag === "Discussion" ? "bg-blue-100 text-blue-800" :
                        p.tag === "Guide" ? "bg-green-100 text-green-800" :
                        p.tag === "Data" ? "bg-purple-100 text-purple-800" :
                        p.tag === "Success Story" ? "bg-red-100 text-red-800" :
                        "bg-gray-100 text-gray-800"
                      }
                    >
                  {p.tag}
                    </Badge>
                    <span className="text-sm text-gray-500">by {p.author}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {p.title}
                  </h4>
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{p.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{p.comments}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{p.views}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:text-right">
                  <span className="text-sm text-gray-500 block mb-2 sm:mb-0">{p.time} ago</span>
                  <div className="flex sm:flex-col gap-2 sm:gap-1">
                    <Button size="sm" variant="outline" className="sm:hidden">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="sm:hidden">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="hidden sm:flex">
                      Reply
                    </Button>
                    <Button size="sm" variant="outline" className="hidden sm:flex">
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    </div>
  );
}