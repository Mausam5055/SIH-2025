import { useState, useMemo } from "react";
import { Camera, Satellite, MapPin, Droplets, Calculator, TrendingUp, Download, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const [detectionMethod, setDetectionMethod] = useState<'camera' | 'satellite'>('camera');
  
  const kpis = [
    { 
      title: "Roofs Analyzed", 
      value: "2,847", 
      delta: "+12.3%", 
      icon: MapPin,
      color: "bg-blue-500" 
    },
    { 
      title: "Water Harvest Potential", 
      value: "45,230 L", 
      delta: "+8.7%", 
      icon: Droplets,
      color: "bg-cyan-500" 
    },
    { 
      title: "Cost Savings", 
      value: "₹2.8L", 
      delta: "+15.2%", 
      icon: TrendingUp,
      color: "bg-green-500" 
    },
    { 
      title: "Active Communities", 
      value: "156", 
      delta: "+23.1%", 
      icon: Users,
      color: "bg-purple-500" 
    },
  ];

  const recentAnalyses = [
    {
      id: 1,
      location: "Rajouri Garden, Delhi",
      roofArea: "245 m²",
      harvestPotential: "18,400 L/year",
      recommendedStructure: "Percolation Pit",
      status: "completed",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      location: "Koramangala, Bangalore",
      roofArea: "180 m²",
      harvestPotential: "14,200 L/year",
      recommendedStructure: "Recharge Trench",
      status: "processing",
      timestamp: "4 hours ago"
    },
    {
      id: 3,
      location: "Banjara Hills, Hyderabad",
      roofArea: "320 m²",
      harvestPotential: "24,800 L/year",
      recommendedStructure: "Recharge Shaft",
      status: "completed",
      timestamp: "1 day ago"
    }
  ];

  const languages = [
    "English", "हिंदी", "বাংলা", "తెలుగు", "मराठी", "தமிழ்", "ગુજરાતી", "ಕನ್ನಡ", 
    "മലയാളം", "ଓଡ଼ିଆ", "ਪੰਜਾਬੀ", "اردو", "অসমীয়া", "नेपाली", "संस्कृत", "भोजपुरी"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* KPI Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi) => (
            <Card key={kpi.title} className="border-0 shadow-lg transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                    <p className="text-2xl font-bold text-gray-900 font-serif">{kpi.value}</p>
                    <p className="text-sm text-green-600">{kpi.delta}</p>
                  </div>
                  <div className={`rounded-full p-3 ${kpi.color}`}>
                    <kpi.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Roof Detection Section */}
        <Card id="roof-detection" className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl font-serif">
              <Camera className="mr-2 h-6 w-6 text-blue-600" />
              AI Roof Detection & Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Detection Method Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold font-serif">Choose Detection Method</h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    onClick={() => setDetectionMethod('camera')}
                    className={`flex items-center justify-center rounded-lg border-2 p-4 transition-all ${
                      detectionMethod === 'camera'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Camera className="mr-2 h-5 w-5" />
                    Camera Capture
                  </button>
                  <button
                    onClick={() => setDetectionMethod('satellite')}
                    className={`flex items-center justify-center rounded-lg border-2 p-4 transition-all ${
                      detectionMethod === 'satellite'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Satellite className="mr-2 h-5 w-5" />
                    Satellite Imagery
                  </button>
                </div>
                
                {detectionMethod === 'camera' ? (
                  <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
                    <Camera className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">
                      Click to capture or upload roof image
                    </p>
                    <Button className="mt-4">
                      Open Camera
                    </Button>
                  </div>
                ) : (
                  <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
                    <Satellite className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">
                      Enter address for satellite analysis
                    </p>
                    <div className="mt-4 flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter your address..."
                        className="flex-1 rounded-md border border-gray-300 px-3 py-2"
                      />
                      <Button>Analyze</Button>
                    </div>
                  </div>
                )}
              </div>

              {/* GIS Integration Panel */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold font-serif">Real-time GIS Data</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-blue-50 p-3">
                    <p className="text-sm font-medium text-blue-800">Rainfall</p>
                    <p className="text-lg font-bold text-blue-900">850mm/year</p>
                  </div>
                  <div className="rounded-lg bg-cyan-50 p-3">
                    <p className="text-sm font-medium text-cyan-800">Groundwater</p>
                    <p className="text-lg font-bold text-cyan-900">12.5m depth</p>
                  </div>
                  <div className="rounded-lg bg-green-50 p-3">
                    <p className="text-sm font-medium text-green-800">Soil Type</p>
                    <p className="text-lg font-bold text-green-900">Clay Loam</p>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-3">
                    <p className="text-sm font-medium text-purple-800">Aquifer</p>
                    <p className="text-lg font-bold text-purple-900">Confined</p>
                  </div>
                </div>
                
                <div className="rounded-lg bg-gray-50 p-4">
                  <h4 className="font-medium text-gray-900">AI Recommendation</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Based on your roof area and local conditions, we recommend a 
                    <span className="font-semibold text-blue-600"> Percolation Pit</span> system.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <Badge variant="secondary">Optimal for clay soil</Badge>
                    <Badge variant="secondary">High efficiency</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Insights */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Calculator className="mr-2 h-6 w-6 text-green-600" />
              Financial Analysis & ROI
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 p-6">
                <h3 className="text-lg font-semibold text-green-800">Implementation Cost</h3>
                <p className="text-3xl font-bold text-green-900">₹45,000</p>
                <p className="text-sm text-green-700">Including materials & labor</p>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
                <h3 className="text-lg font-semibold text-blue-800">Annual Savings</h3>
                <p className="text-3xl font-bold text-blue-900">₹18,500</p>
                <p className="text-sm text-blue-700">Water bill reduction</p>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 p-6">
                <h3 className="text-lg font-semibold text-purple-800">ROI Period</h3>
                <p className="text-3xl font-bold text-purple-900">2.4 years</p>
                <p className="text-sm text-purple-700">Break-even timeline</p>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="bg-green-600 hover:bg-green-700">
                <Download className="mr-2 h-4 w-4" />
                Download Cost Report
              </Button>
              <Button variant="outline">
                Apply for Government Subsidy
              </Button>
              <Button variant="outline">
                Get Detailed Quote
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Analyses */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Recent Roof Analyses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAnalyses.map((analysis) => (
                <div key={analysis.id} className="rounded-lg border border-gray-200 p-4 transition-all hover:shadow-md">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-gray-900">{analysis.location}</h4>
                        <Badge 
                          variant={analysis.status === 'completed' ? 'default' : 'secondary'}
                          className={analysis.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                        >
                          {analysis.status}
                        </Badge>
                      </div>
                      <div className="mt-1 grid grid-cols-1 gap-2 text-sm text-gray-600 sm:grid-cols-3">
                        <span>Area: {analysis.roofArea}</span>
                        <span>Potential: {analysis.harvestPotential}</span>
                        <span>Structure: {analysis.recommendedStructure}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{analysis.timestamp}</span>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Language Support & Accessibility */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Globe className="mr-2 h-6 w-6 text-indigo-600" />
              Accessibility & Community
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div>
                <h3 className="mb-3 text-lg font-semibold">Supported Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.slice(0, 8).map((lang) => (
                    <Badge key={lang} variant="outline" className="text-xs">
                      {lang}
                    </Badge>
                  ))}
                  <Badge variant="outline" className="text-xs">
                    +{languages.length - 8} more
                  </Badge>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    <Globe className="mr-2 h-4 w-4" />
                    Change Language
                  </Button>
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    Offline Mode
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="mb-3 text-lg font-semibold">Community Impact</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-blue-50 p-3">
                    <span className="text-sm font-medium text-blue-800">Total Water Saved</span>
                    <span className="text-lg font-bold text-blue-900">2.8M Liters</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-green-50 p-3">
                    <span className="text-sm font-medium text-green-800">Communities Served</span>
                    <span className="text-lg font-bold text-green-900">156 Areas</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-purple-50 p-3">
                    <span className="text-sm font-medium text-purple-800">Government Subsidies</span>
                    <span className="text-lg font-bold text-purple-900">₹12.5L Approved</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}