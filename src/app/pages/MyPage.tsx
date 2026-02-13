import { useState } from "react";
import { Upload, FileText, Sparkles, ArrowRight, CheckCircle2, Share2, History, User, Gift, Rocket, TrendingUp, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";

export function MyPage() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [activeTab, setActiveTab] = useState("upload");

  // Share to community state
  const [shareTitle, setShareTitle] = useState("");
  const [shareDescription, setShareDescription] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setIsComplete(false);
    }
  };

  const handleGenerate = () => {
    if (!file) return;

    setIsProcessing(true);
    setProgress(0);

    // Simulate processing
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setIsComplete(true);
          // Navigate to results after a short delay
          setTimeout(() => {
            navigate("/results");
          }, 1500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform) ? prev.filter((p) => p !== platform) : [...prev, platform]
    );
  };

  const handleShareToCommunity = () => {
    // Handle share logic
    alert("Shared to community!");
    setShareTitle("");
    setShareDescription("");
    setSelectedPlatforms([]);
  };

  const platforms = [
    { name: "Twitter", icon: "🐦" },
    { name: "LinkedIn", icon: "💼" },
    { name: "Reddit", icon: "🤖" },
    { name: "WeChat", icon: "💬" },
    { name: "Xiaohongshu", icon: "📕" },
  ];

  const historyItems = [
    {
      id: 1,
      title: "Multi-Agent Systems for Academic Promotion",
      date: "2 days ago",
      platforms: ["Twitter", "LinkedIn"],
      status: "Published",
    },
    {
      id: 2,
      title: "Vision-Language Models in Document Understanding",
      date: "1 week ago",
      platforms: ["Twitter", "Reddit", "WeChat"],
      status: "Published",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-lg">My Workspace</h1>
              <p className="text-xs text-gray-500">Create & share your content</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full grid grid-cols-3 mb-6">
            <TabsTrigger value="upload" className="flex items-center gap-1 text-xs">
              <Upload className="w-4 h-4" />
              Upload
            </TabsTrigger>
            <TabsTrigger value="share" className="flex items-center gap-1 text-xs">
              <Share2 className="w-4 h-4" />
              Share
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-1 text-xs">
              <History className="w-4 h-4" />
              History
            </TabsTrigger>
          </TabsList>

          {/* Upload Tab */}
          <TabsContent value="upload" className="space-y-6">
            <Card className="p-6">
              <h2 className="font-semibold text-lg mb-4">Upload Your Paper</h2>

              <div className="space-y-4">
                <label
                  htmlFor="file-upload"
                  className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-8 cursor-pointer transition-all ${
                    file
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
                  }`}
                >
                  <Upload
                    className={`w-12 h-12 mb-3 ${
                      file ? "text-blue-600" : "text-gray-400"
                    }`}
                  />
                  {file ? (
                    <div className="text-center">
                      <p className="font-medium text-sm text-blue-600 mb-1">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <p className="font-medium text-sm text-gray-700 mb-1">
                        Click to upload PDF
                      </p>
                      <p className="text-xs text-gray-500">or drag and drop</p>
                    </div>
                  )}
                  <input
                    id="file-upload"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>

                {file && !isProcessing && !isComplete && (
                  <Button
                    onClick={handleGenerate}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    size="lg"
                  >
                    <Sparkles className="mr-2 w-5 h-5" />
                    Generate Content
                  </Button>
                )}

                {isProcessing && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Processing your paper...</span>
                      <span className="font-medium text-blue-600">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <p className="text-xs text-gray-500 text-center">
                      Our AI agents are analyzing your research
                    </p>
                  </div>
                )}

                {isComplete && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm text-green-900">
                        Content Generated!
                      </p>
                      <p className="text-xs text-green-700">
                        Redirecting to results...
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Feature Info */}
            <Card className="p-5 bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                What Happens Next?
              </h3>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>AI analyzes your paper's key findings and impact</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>Generates content for 7+ platforms in EN & CN</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>Fact-checks and polishes all content</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span>You review, download, and share!</span>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Share Tab */}
          <TabsContent value="share" className="space-y-6">
            <Card className="p-6">
              <h2 className="font-semibold text-lg mb-4">Share to Community</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Title
                  </label>
                  <Input
                    type="text"
                    placeholder="Give your paper a catchy title..."
                    value={shareTitle}
                    onChange={(e) => setShareTitle(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Description
                  </label>
                  <Textarea
                    placeholder="Share what makes your research special..."
                    value={shareDescription}
                    onChange={(e) => setShareDescription(e.target.value)}
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">
                    Platforms Promoted On
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {platforms.map((platform) => (
                      <Badge
                        key={platform.name}
                        variant={
                          selectedPlatforms.includes(platform.name)
                            ? "default"
                            : "outline"
                        }
                        className="cursor-pointer"
                        onClick={() => handlePlatformToggle(platform.name)}
                      >
                        <span className="mr-1">{platform.icon}</span>
                        {platform.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleShareToCommunity}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
                  disabled={!shareTitle || !shareDescription}
                  size="lg"
                >
                  <Share2 className="mr-2 w-5 h-5" />
                  Share to Community
                </Button>
              </div>
            </Card>

            <Card className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">Why Share?</h3>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Inspire other researchers with your success</li>
                    <li>• Get feedback from the community</li>
                    <li>• Build your academic network</li>
                    <li>• Increase your paper's visibility</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-4">
            {historyItems.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.status}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {item.platforms.map((platform) => (
                    <Badge key={platform} variant="secondary" className="text-xs">
                      {platforms.find((p) => p.name === platform)?.icon}{" "}
                      {platform}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                    onClick={() => navigate("/results")}
                  >
                    View Results
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                  >
                    <Share2 className="w-3 h-3 mr-1" />
                    Reshare
                  </Button>
                </div>
              </Card>
            ))}

            {historyItems.length === 0 && (
              <Card className="p-8 text-center">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500">No history yet</p>
                <p className="text-xs text-gray-400 mt-1">
                  Upload your first paper to get started
                </p>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        {/* Lead Pages Section */}
        <div className="mt-8 space-y-4">
          <div className="text-center mb-4">
            <h3 className="font-bold text-lg mb-1">Special Offers & Programs</h3>
            <p className="text-xs text-gray-500">Unlock exclusive benefits and discounts</p>
          </div>

          {/* Lead Page Cards */}
          <Card 
            className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate("/lead/free-trial")}
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-sm">Free Trial Available</h4>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-xs text-gray-600 mb-2">
                  Try AutoPromo free for 14 days with 50 paper uploads
                </p>
                <Badge className="bg-green-600 text-xs">Individual Researchers</Badge>
              </div>
            </div>
          </Card>

          <Card 
            className="p-4 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate("/lead/early-access")}
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-sm">Early Access Program</h4>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-xs text-gray-600 mb-2">
                  Join 100 founding members with lifetime 50% discount
                </p>
                <Badge className="bg-orange-600 text-xs">Limited Spots</Badge>
              </div>
            </div>
          </Card>

          <Card 
            className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate("/lead/growth")}
          >
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-sm">Social Media Growth Plan</h4>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-xs text-gray-600 mb-2">
                  First month 80% off for content creators
                </p>
                <Badge className="bg-purple-600 text-xs">Content Creators</Badge>
              </div>
            </div>
          </Card>

          <Button
            onClick={() => navigate("/lead")}
            variant="outline"
            className="w-full"
            size="sm"
          >
            View All Offers
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}