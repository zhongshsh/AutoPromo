import { useState } from "react";
import { Upload, FileText, Sparkles, ArrowRight, CheckCircle2, ExternalLink, Zap, Globe, Users, Target, TrendingUp } from "lucide-react";
import { useNavigate, Link } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-white pb-20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-lg">AutoPromo</h1>
                <p className="text-xs text-gray-500">AI-Powered Paper Promotion</p>
              </div>
            </div>
            <Button 
              onClick={() => navigate("/lead")}
              variant="outline" 
              size="sm"
              className="text-xs"
            >
              Lead Pages
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Hero Section */}
        <div className="text-center pt-4 pb-2">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600">
            Powered by 6 AI Agents
          </Badge>
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Transform Your Research<br />Into Viral Content
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
            AutoPromo uses advanced multi-agent AI to turn academic papers into engaging promotional content for 7+ platforms in minutes.
          </p>
        </div>

        {/* CTA Button */}
        <Card className="p-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0 shadow-xl">
          <h3 className="font-bold text-xl mb-2 text-center">Ready to Get Started?</h3>
          <p className="text-sm text-white/90 text-center mb-4">
            Upload your paper and generate content now
          </p>
          <Button 
            onClick={() => navigate("/my")}
            className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            size="lg"
          >
            Start Creating
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-4 text-center">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-2xl font-bold mb-1">5min</p>
            <p className="text-xs text-gray-500">Generation Time</p>
          </Card>
          <Card className="p-4 text-center">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Globe className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-2xl font-bold mb-1">7+</p>
            <p className="text-xs text-gray-500">Platforms</p>
          </Card>
          <Card className="p-4 text-center">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Users className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-2xl font-bold mb-1">50K+</p>
            <p className="text-xs text-gray-500">Researchers</p>
          </Card>
        </div>

        {/* Features Section */}
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            What You Get
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Multi-Platform Content</p>
                <p className="text-xs text-gray-500">Blogs, podcasts, Twitter, LinkedIn, Reddit, WeChat, Xiaohongshu</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Bilingual Support</p>
                <p className="text-xs text-gray-500">English and Chinese content generation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">AI Fact-Checking</p>
                <p className="text-xs text-gray-500">Automated verification and polishing</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-sm">6-Stage AI Pipeline</p>
                <p className="text-xs text-gray-500">Parse, analyze, verify, select, generate, polish</p>
              </div>
            </div>
          </div>
        </Card>

        {/* How It Works */}
        <Card className="p-6 bg-gradient-to-br from-gray-50 to-blue-50">
          <h3 className="font-bold text-lg mb-4">How It Works</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <p className="font-medium text-sm">Upload Your Paper</p>
                <p className="text-xs text-gray-600">Simply upload your PDF research paper</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <p className="font-medium text-sm">AI Processing</p>
                <p className="text-xs text-gray-600">Our 6 AI agents analyze and extract key insights</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <p className="font-medium text-sm">Get Your Content</p>
                <p className="text-xs text-gray-600">Download platform-ready promotional materials</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Platforms */}
        <Card className="p-6">
          <h3 className="font-bold text-lg mb-4">Supported Platforms</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Twitter", icon: "🐦", color: "from-blue-400 to-blue-500" },
              { name: "LinkedIn", icon: "💼", color: "from-blue-600 to-blue-700" },
              { name: "Reddit", icon: "🤖", color: "from-orange-500 to-red-500" },
              { name: "WeChat", icon: "💬", color: "from-green-500 to-green-600" },
              { name: "Xiaohongshu", icon: "📕", color: "from-red-400 to-pink-500" },
              { name: "Blog Posts", icon: "📝", color: "from-purple-500 to-purple-600" },
            ].map((platform) => (
              <div
                key={platform.name}
                className={`bg-gradient-to-br ${platform.color} text-white rounded-lg p-3 flex items-center gap-2`}
              >
                <span className="text-2xl">{platform.icon}</span>
                <span className="font-medium text-sm">{platform.name}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Testimonial */}
        <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              SC
            </div>
            <div>
              <p className="font-semibold text-sm">Dr. Sarah Chen</p>
              <p className="text-xs text-gray-600">Carnegie Mellon University</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 italic leading-relaxed">
            "AutoPromo saved me hours of work. I got professional content for all platforms in just 5 minutes. My paper reached 10x more people!"
          </p>
        </Card>

        {/* Final CTA */}
        <div className="text-center pt-4">
          <Button 
            onClick={() => navigate("/my")}
            size="lg"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-xs text-gray-500 mt-3">
            No credit card required • Free trial available
          </p>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}