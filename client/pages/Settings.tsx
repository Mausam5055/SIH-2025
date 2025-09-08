import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Bell, Globe, Shield, Smartphone, Wifi } from "lucide-react";

export default function Settings() {
  const [name, setName] = useState("Mausam Kar");
  const [email, setEmail] = useState("mausam@example.com");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [language, setLanguage] = useState("English");
  const [notif, setNotif] = useState(true);
  const [digest, setDigest] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);
  const [locationAccess, setLocationAccess] = useState(true);

  const languages = [
    "English", "हिंदी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்", "ગુજરાતી", "ಕನ್ನಡ", 
    "മലയാളം", "ଓଡ଼ିଆ", "ਪੰਜਾਬੀ", "اردو"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="mt-2 text-gray-600 hide-description-mobile">
            Customize your experience and manage your preferences
          </p>
        </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="mr-2 h-6 w-6 text-blue-600" />
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent>
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
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Phone Number
            </label>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Preferred Language
            </label>
            <select
              className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4">
          <Button className="rounded-lg bg-blue-600 hover:bg-blue-700">
            Save Changes
          </Button>
        </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="mr-2 h-6 w-6 text-green-600" />
            Notification Preferences
          </CardTitle>
        </CardHeader>
        <CardContent>
        <div className="space-y-3">
          <label className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 hover:bg-gray-100 transition-colors">
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
              className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={notif}
              onChange={(e) => setNotif(e.target.checked)}
            />
          </label>
          <label className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 hover:bg-gray-100 transition-colors">
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
              className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={digest}
              onChange={(e) => setDigest(e.target.checked)}
            />
          </label>
        </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Smartphone className="mr-2 h-6 w-6 text-purple-600" />
            App Preferences
          </CardTitle>
        </CardHeader>
        <CardContent>
        <div className="space-y-3">
          <label className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 hover:bg-gray-100 transition-colors">
            <div>
              <p className="text-sm font-medium text-slate-800">
                Offline Mode
              </p>
              <p className="text-xs text-slate-500">
                Enable offline functionality for rural areas
              </p>
            </div>
            <div className="flex items-center gap-2">
              {offlineMode && <Badge className="bg-green-100 text-green-800">Active</Badge>}
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                checked={offlineMode}
                onChange={(e) => setOfflineMode(e.target.checked)}
              />
            </div>
          </label>
          <label className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 hover:bg-gray-100 transition-colors">
            <div>
              <p className="text-sm font-medium text-slate-800">
                Location Access
              </p>
              <p className="text-xs text-slate-500">
                Allow location access for better GIS analysis
              </p>
            </div>
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={locationAccess}
              onChange={(e) => setLocationAccess(e.target.checked)}
            />
          </label>
        </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="mr-2 h-6 w-6 text-red-600" />
            Privacy & Security
          </CardTitle>
        </CardHeader>
        <CardContent>
        <div className="space-y-4">
          <div className="rounded-lg bg-blue-50 p-4">
            <h4 className="font-medium text-blue-900">Data Usage</h4>
            <p className="mt-1 text-sm text-blue-700">
              Your data is used only for analysis and recommendations. We never share personal information with third parties.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex-1">
              Export My Data
            </Button>
            <Button variant="outline" className="flex-1">
              Delete Account
            </Button>
          </div>
        </div>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
