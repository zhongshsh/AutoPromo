import { useState } from "react";
import { Globe, CheckCircle, ArrowRight, Languages, TrendingUp, Target } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

// Lead Page 4: Multilingual/Global Expansion - 多语言国际推广页
export function LeadPage4() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    primaryLanguage: "",
    targetRegions: [] as string[],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.name) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleRegion = (region: string) => {
    setFormData({
      ...formData,
      targetRegions: formData.targetRegions.includes(region)
        ? formData.targetRegions.filter((r) => r !== region)
        : [...formData.targetRegions, region],
    });
  };

  const regions = [
    { id: "north-america", name: "North America", flag: "🇺🇸" },
    { id: "europe", name: "Europe", flag: "🇪🇺" },
    { id: "china", name: "China", flag: "🇨🇳" },
    { id: "japan", name: "Japan", flag: "🇯🇵" },
    { id: "korea", name: "South Korea", flag: "🇰🇷" },
    { id: "india", name: "India", flag: "🇮🇳" },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-500 via-blue-600 to-indigo-600 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-3">Ready to Go Global! 🌍</h2>
          <p className="text-gray-600 mb-6">
            Thank you for signing up! Check your inbox at <strong>{formData.email}</strong> for your multilingual trial access.
          </p>
          <div className="bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-300 rounded-lg p-6 text-left">
            <p className="text-sm font-bold text-teal-900 mb-3">🎁 Your Global Package Includes:</p>
            <ul className="text-sm text-teal-800 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>English & Chinese content generation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Platform-specific optimization for {formData.targetRegions.length} regions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Cultural adaptation & localization tips</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>21-day money-back guarantee</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 via-blue-600 to-indigo-600">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Break Language Barriers
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Reach Researchers<br />Around the World
          </h1>
          <p className="text-xl text-white/95 mb-6 max-w-3xl mx-auto">
            Your research deserves a global audience. Generate bilingual promotional content and reach researchers in China, US, Europe, and beyond.
          </p>
          <p className="text-2xl font-bold text-yellow-300">
            🎁 Try Free for 21 Days - All Languages Included
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Value Props */}
          <div className="space-y-6">
            <Card className="p-8 bg-white/95 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Why Multilingual Matters</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">5x More Impact</h4>
                    <p className="text-sm text-gray-600">
                      Papers promoted in multiple languages receive 5x more citations from international researchers
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Languages className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Native-Quality Translation</h4>
                    <p className="text-sm text-gray-600">
                      Not just translation - cultural adaptation for each region's academic style and social norms
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Platform Localization</h4>
                    <p className="text-sm text-gray-600">
                      Optimized for WeChat, Xiaohongshu, Twitter, LinkedIn - each region's preferred platforms
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Supported Platforms by Region */}
            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Global Platform Coverage</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-semibold text-sm">North America & Europe</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Twitter/X</Badge>
                    <Badge variant="outline" className="text-xs">LinkedIn</Badge>
                    <Badge variant="outline" className="text-xs">Reddit</Badge>
                    <Badge variant="outline" className="text-xs">Medium</Badge>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🇨🇳</span>
                    <span className="font-semibold text-sm">China</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">WeChat</Badge>
                    <Badge variant="outline" className="text-xs">Xiaohongshu</Badge>
                    <Badge variant="outline" className="text-xs">Weibo</Badge>
                    <Badge variant="outline" className="text-xs">Zhihu</Badge>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">🇯🇵</span>
                    <span className="font-semibold text-sm">Japan</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Twitter/X</Badge>
                    <Badge variant="outline" className="text-xs">Note</Badge>
                    <Badge variant="outline" className="text-xs">Hatena</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Case Study */}
            <Card className="p-6 bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-300">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  ✓
                </div>
                <div>
                  <Badge className="mb-2 bg-teal-600">Success Story</Badge>
                  <h4 className="font-bold mb-2">From 200 to 12,000 views in 2 weeks</h4>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-3 italic">
                "I published my NLP paper in English only and got moderate attention. After using AutoPromo to create Chinese content for WeChat and Xiaohongshu, my paper was viewed 12,000+ times by Chinese researchers in two weeks. Three collaborations emerged from it!"
              </p>
              <p className="text-xs font-semibold text-gray-900">Dr. Maria Rodriguez</p>
              <p className="text-xs text-gray-600">Assistant Professor, Barcelona Tech</p>
            </Card>

            {/* Stats */}
            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <h3 className="font-bold mb-4">Global Reach Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg">
                  <p className="text-3xl font-bold text-teal-600">120+</p>
                  <p className="text-xs text-gray-600">Countries Reached</p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
                  <p className="text-3xl font-bold text-blue-600">15</p>
                  <p className="text-xs text-gray-600">Languages Supported</p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
                  <p className="text-3xl font-bold text-indigo-600">8.5M+</p>
                  <p className="text-xs text-gray-600">International Views</p>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                  <p className="text-3xl font-bold text-purple-600">94%</p>
                  <p className="text-xs text-gray-600">Localization Score</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Sign Up Form */}
          <Card className="p-8 bg-white sticky top-4">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Start Your Global Trial</h3>
              <p className="text-gray-600">21 days free - All languages & platforms included</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Dr. Jane Smith"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="primaryLanguage" className="block text-sm font-medium mb-2">
                  Primary Language
                </label>
                <select
                  id="primaryLanguage"
                  name="primaryLanguage"
                  value={formData.primaryLanguage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="">Select your primary language</option>
                  <option value="en">English</option>
                  <option value="zh">中文 (Chinese)</option>
                  <option value="ja">日本語 (Japanese)</option>
                  <option value="ko">한국어 (Korean)</option>
                  <option value="es">Español (Spanish)</option>
                  <option value="de">Deutsch (German)</option>
                  <option value="fr">Français (French)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Target Regions (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      type="button"
                      onClick={() => toggleRegion(region.id)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        formData.targetRegions.includes(region.id)
                          ? "border-teal-600 bg-teal-50 text-teal-900"
                          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-lg block mb-1">{region.flag}</span>
                      {region.name}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 h-12 text-lg"
              >
                Start Free 21-Day Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>

            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg">
              <p className="text-xs font-bold text-yellow-900 mb-2">🎁 TRIAL INCLUDES:</p>
              <ul className="text-xs text-yellow-900 space-y-1">
                <li>✓ Unlimited papers & content generation</li>
                <li>✓ All 15 languages unlocked</li>
                <li>✓ Global platform optimization</li>
                <li>✓ Cultural adaptation & tips</li>
                <li>✓ Cancel anytime, no questions asked</li>
              </ul>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              No credit card required for trial. Money-back guarantee if not satisfied.
            </p>
          </Card>
        </div>

        {/* Language Examples */}
        <Card className="mt-12 p-8 bg-white/95 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">See the Difference: Same Paper, Multiple Languages</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-blue-200 rounded-lg p-4 bg-blue-50">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🇺🇸</span>
                <h4 className="font-bold">English (Twitter)</h4>
              </div>
              <p className="text-sm text-gray-700 italic">
                "🚀 Excited to share our new paper on multi-agent systems for content generation! We organized 6 specialized AI agents like a newsroom to automate academic promotion. Results: 3x more engagement across platforms. #AI #Research"
              </p>
            </div>
            <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🇨🇳</span>
                <h4 className="font-bold">中文 (WeChat)</h4>
              </div>
              <p className="text-sm text-gray-700 italic">
                "🎉 分享我们的最新研究：多智能体学术推广框架！我们设计了6个专业AI智能体，像新闻编辑室一样协同工作，自动生成多平台推广内容。结果显示：论文互动量提升3倍！#人工智能 #学术传播"
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-600 text-center mt-4">
            Notice how the Chinese version uses culturally appropriate emoji, hashtags, and phrasing styles for WeChat's audience.
          </p>
        </Card>
      </div>
    </div>
  );
}
