import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Settings() {
  const [name, setName] = useState("Mausam Kar");
  const [email, setEmail] = useState("mausam@example.com");
  const [notif, setNotif] = useState(true);
  const [digest, setDigest] = useState(false);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm">
        <h3 className="mb-4 text-base font-semibold text-slate-800">Profile</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Name
            </label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Email
            </label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-4">
          <Button className="rounded-lg">Save Changes</Button>
        </div>
      </div>

      <div className="rounded-2xl border border-[hsl(var(--border))] bg-white p-5 shadow-sm">
        <h3 className="mb-4 text-base font-semibold text-slate-800">
          Preferences
        </h3>
        <div className="space-y-3">
          <label className="flex items-center justify-between rounded-xl border border-[hsl(var(--border))] bg-slate-50 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-slate-800">
                Notifications
              </p>
              <p className="text-xs text-slate-500">
                Receive product and community updates
              </p>
            </div>
            <input
              type="checkbox"
              className="h-5 w-5"
              checked={notif}
              onChange={(e) => setNotif(e.target.checked)}
            />
          </label>
          <label className="flex items-center justify-between rounded-xl border border-[hsl(var(--border))] bg-slate-50 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-slate-800">
                Weekly Digest
              </p>
              <p className="text-xs text-slate-500">
                Summarized activity sent weekly
              </p>
            </div>
            <input
              type="checkbox"
              className="h-5 w-5"
              checked={digest}
              onChange={(e) => setDigest(e.target.checked)}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
