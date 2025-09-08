import { useState, useRef } from "react";
import { Camera, Upload, MapPin, Zap, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function RoofDetection() {
  const [detectionStep, setDetectionStep] = useState<'select' | 'capture' | 'processing' | 'results'>('select');
  const [detectionMethod, setDetectionMethod] = useState<'camera' | 'satellite' | 'upload'>('camera');
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const mockResults = {
    roofArea: "245.8 m²",
    harvestPotential: "18,435 L/year",
    recommendedStructure: "Percolation Pit",
    estimatedCost: "₹42,500",
    roi: "2.3 years",
    confidence: 94
  };

  const handleStartAnalysis = () => {
    setDetectionStep('processing');
    setAnalysisProgress(0);
    
    // Simulate analysis progress
    const interval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setDetectionStep('results');
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">AI Roof Detection</h1>
          <p className="mt-2 text-gray-600">
            Analyze your roof using advanced AI and get personalized rainwater harvesting recommendations
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center space-x-4">
            {['Select Method', 'Capture/Upload', 'AI Analysis', 'Results'].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                  index <= ['select', 'capture', 'processing', 'results'].indexOf(detectionStep)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {index + 1}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-600">{step}</span>
                {index < 3 && <div className="ml-4 h-0.5 w-8 bg-gray-200"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Method Selection */}
        {detectionStep === 'select' && (
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Choose Detection Method</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <button
                  onClick={() => setDetectionMethod('camera')}
                  className={`rounded-lg border-2 p-6 text-center transition-all ${
                    detectionMethod === 'camera'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Camera className="mx-auto h-12 w-12 text-blue-600" />
                  <h3 className="mt-3 font-semibold">Live Camera</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Capture roof image using your device camera
                  </p>
                </button>

                <button
                  onClick={() => setDetectionMethod('satellite')}
                  className={`rounded-lg border-2 p-6 text-center transition-all ${
                    detectionMethod === 'satellite'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <MapPin className="mx-auto h-12 w-12 text-green-600" />
                  <h3 className="mt-3 font-semibold">Satellite Imagery</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Analyze using Google Earth Engine API
                  </p>
                </button>

                <button
                  onClick={() => setDetectionMethod('upload')}
                  className={`rounded-lg border-2 p-6 text-center transition-all ${
                    detectionMethod === 'upload'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Upload className="mx-auto h-12 w-12 text-purple-600" />
                  <h3 className="mt-3 font-semibold">Upload Image</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Upload existing roof image from gallery
                  </p>
                </button>
              </div>

              <div className="mt-6 text-center">
                <Button 
                  onClick={() => setDetectionStep('capture')}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Continue with {detectionMethod === 'camera' ? 'Camera' : detectionMethod === 'satellite' ? 'Satellite' : 'Upload'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Capture/Upload */}
        {detectionStep === 'capture' && (
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>
                {detectionMethod === 'camera' && 'Camera Capture'}
                {detectionMethod === 'satellite' && 'Satellite Analysis'}
                {detectionMethod === 'upload' && 'Upload Image'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {detectionMethod === 'camera' && (
                <div className="text-center">
                  <div className="mx-auto h-64 w-full max-w-md rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
                    <div>
                      <Camera className="mx-auto h-16 w-16 text-gray-400" />
                      <p className="mt-2 text-gray-600">Camera preview will appear here</p>
                    </div>
                  </div>
                  <div className="mt-6 space-x-4">
                    <Button onClick={handleStartAnalysis} className="bg-blue-600 hover:bg-blue-700">
                      <Camera className="mr-2 h-4 w-4" />
                      Capture Roof
                    </Button>
                    <Button variant="outline" onClick={() => setDetectionStep('select')}>
                      Back
                    </Button>
                  </div>
                </div>
              )}

              {detectionMethod === 'satellite' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Enter Address</label>
                    <input
                      type="text"
                      placeholder="Enter your complete address..."
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                  </div>
                  <div className="text-center">
                    <Button onClick={handleStartAnalysis} className="bg-green-600 hover:bg-green-700">
                      <MapPin className="mr-2 h-4 w-4" />
                      Analyze from Satellite
                    </Button>
                    <Button variant="outline" className="ml-4" onClick={() => setDetectionStep('select')}>
                      Back
                    </Button>
                  </div>
                </div>
              )}

              {detectionMethod === 'upload' && (
                <div className="text-center">
                  <div 
                    onClick={handleFileUpload}
                    className="mx-auto h-64 w-full max-w-md rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center cursor-pointer hover:border-gray-400"
                  >
                    <div>
                      <Upload className="mx-auto h-16 w-16 text-gray-400" />
                      <p className="mt-2 text-gray-600">Click to upload roof image</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleStartAnalysis}
                  />
                  <div className="mt-6">
                    <Button variant="outline" onClick={() => setDetectionStep('select')}>
                      Back
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Step 3: Processing */}
        {detectionStep === 'processing' && (
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-6 w-6 text-yellow-500" />
                AI Analysis in Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="mx-auto h-32 w-32 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
                <h3 className="mt-6 text-lg font-semibold">Analyzing Your Roof</h3>
                <p className="mt-2 text-gray-600">
                  Our AI is processing the image and analyzing roof dimensions...
                </p>
                
                <div className="mt-6">
                  <Progress value={analysisProgress} className="w-full max-w-md mx-auto" />
                  <p className="mt-2 text-sm text-gray-500">{analysisProgress}% Complete</p>
                </div>

                <div className="mt-6 space-y-2 text-left max-w-md mx-auto">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Roof detection completed
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                    Area calculation in progress
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <div className="mr-2 h-4 w-4 rounded-full border-2 border-gray-300"></div>
                    GIS data integration
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <div className="mr-2 h-4 w-4 rounded-full border-2 border-gray-300"></div>
                    Generating recommendations
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Results */}
        {detectionStep === 'results' && (
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <CheckCircle className="mr-2 h-6 w-6" />
                  Analysis Complete
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg bg-blue-50 p-4">
                    <h3 className="font-semibold text-blue-800">Roof Area</h3>
                    <p className="text-2xl font-bold text-blue-900">{mockResults.roofArea}</p>
                    <Badge className="mt-1 bg-blue-100 text-blue-800">
                      {mockResults.confidence}% Confidence
                    </Badge>
                  </div>
                  
                  <div className="rounded-lg bg-cyan-50 p-4">
                    <h3 className="font-semibold text-cyan-800">Harvest Potential</h3>
                    <p className="text-2xl font-bold text-cyan-900">{mockResults.harvestPotential}</p>
                    <p className="text-sm text-cyan-700">Based on local rainfall</p>
                  </div>
                  
                  <div className="rounded-lg bg-green-50 p-4">
                    <h3 className="font-semibold text-green-800">Recommended Structure</h3>
                    <p className="text-lg font-bold text-green-900">{mockResults.recommendedStructure}</p>
                    <p className="text-sm text-green-700">Optimal for your soil type</p>
                  </div>
                  
                  <div className="rounded-lg bg-purple-50 p-4">
                    <h3 className="font-semibold text-purple-800">Implementation Cost</h3>
                    <p className="text-2xl font-bold text-purple-900">{mockResults.estimatedCost}</p>
                    <p className="text-sm text-purple-700">Including materials & labor</p>
                  </div>
                  
                  <div className="rounded-lg bg-orange-50 p-4">
                    <h3 className="font-semibold text-orange-800">ROI Period</h3>
                    <p className="text-2xl font-bold text-orange-900">{mockResults.roi}</p>
                    <p className="text-sm text-orange-700">Break-even timeline</p>
                  </div>
                  
                  <div className="rounded-lg bg-indigo-50 p-4">
                    <h3 className="font-semibold text-indigo-800">Annual Savings</h3>
                    <p className="text-2xl font-bold text-indigo-900">₹18,500</p>
                    <p className="text-sm text-indigo-700">Water bill reduction</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                  <Button variant="outline">
                    Apply for Subsidy
                  </Button>
                  <Button variant="outline">
                    Find Contractors
                  </Button>
                  <Button variant="outline">
                    Share Results
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setDetectionStep('select');
                      setAnalysisProgress(0);
                    }}
                  >
                    Analyze Another Roof
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}