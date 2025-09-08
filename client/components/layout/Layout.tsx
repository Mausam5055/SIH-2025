import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, Bell, Settings as SettingsIcon, LayoutDashboard, Camera, LineChart, FileText, Users, ChevronLeft, Droplets } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/" },
  { label: "Roof Detection", icon: Camera, to: "/roof-detection" },
  { label: "Analysis", icon: LineChart, to: "/analysis" },
  { label: "Reports", icon: FileText, to: "/reports" },
  { label: "Community", icon: Users, to: "/community" },
  { label: "Settings", icon: SettingsIcon, to: "/settings" },
];

export default function Layout() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-slate-700">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-white/20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              className="-ml-2 inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 sm:hidden"
              aria-label="Open sidebar"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white">
                <Droplets className="h-5 w-5" />
              </div>
              <span className="text-base font-semibold tracking-tight">RainHarvest AI</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-800">
              <Bell />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-600 hover:text-slate-800">
              <SettingsIcon />
            </Button>
            <Avatar>
              <AvatarFallback className="text-sm font-medium">MK</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Sidebar for desktop */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 rounded-2xl border border-white/20 bg-white/80 backdrop-blur p-2 shadow-lg">
            {navItems.map((item) => {
              const active = location.pathname === item.to || (item.to !== "/" && location.pathname.startsWith(item.to));
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50",
                    active && "bg-blue-100 text-blue-900"
                  )}
                >
                  <Icon className={cn("h-4 w-4 text-slate-500 group-hover:text-blue-600", active && "text-blue-600")} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Content */}
        <main className="pb-10">
          <Outlet />
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-slate-900/20" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 flex w-80 max-w-[80%] flex-col border-r border-white/20 bg-white/95 backdrop-blur shadow-xl transition-transform">
            <div className="flex h-16 items-center justify-between px-4">
              <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white">
                  <Droplets className="h-5 w-5" />
                </div>
                <span className="text-base font-semibold tracking-tight">RainHarvest AI</span>
              </Link>
              <button
                className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100"
                aria-label="Close sidebar"
                onClick={() => setOpen(false)}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <nav className="space-y-1 p-3">
              {navItems.map((item) => {
                const active = location.pathname === item.to || (item.to !== "/" && location.pathname.startsWith(item.to));
                const Icon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-blue-50",
                      active && "bg-blue-100 text-blue-900"
                    )}
                  >
                    <Icon className={cn("h-4 w-4 text-slate-500 group-hover:text-blue-600", active && "text-blue-600")} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
