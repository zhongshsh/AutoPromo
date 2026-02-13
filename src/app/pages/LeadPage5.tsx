import { useState } from "react";
import { TrendingUp, CheckCircle, ArrowRight, BarChart3, Users, Heart, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

// Lead Page 5: Social Media Growth Focus - 社交媒体增长页
export function LeadPage5() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    currentFollowers: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.name) {
      setIsSubmitting(true);
      try {
        await fetch("https://script.google.com/macros/s/AKfycbwtrUkPkBDsEUXZueYLN4NhwrWiGIhHLtO92EXWJMiX2W5uVKw9IaeJ7XpSDbnnWppFcg/exec", {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            source: "lead-page-5-growth",
          }),
        });
        setIsSubmitted(true);
      } catch {
        setIsSubmitted(true);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-3">Let's Grow Your Influence! 📈</h2>
          <p className="text-gray-600 mb-6">
            Welcome aboard! Check <strong>{formData.email}</strong> for your Growth Accelerator access and exclusive growth playbook.
          </p>
          <div className="bg-gradient-to-r from-pink-50 to-orange-50 border-2 border-pink-300 rounded-lg p-6 text-left">
            <p className="text-sm font-bold text-pink-900 mb-3">🎁 Your Growth Package:</p>
            <ul className="text-sm text-pink-800 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>10 free premium posts</strong> optimized for maximum engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Access to viral content templates & best practices</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Analytics dashboard to track your growth</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>1-on-1 growth strategy session ($200 value)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Sign up for our creator community & networking events</span>
              </li>
            </ul>
          </div>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm font-semibold text-blue-900 mb-2">📊 Set Your Growth Goals:</p>
            <p className="text-sm text-blue-800">
              We'll help you track progress toward your follower, engagement, and citation goals. Let's aim for 2x growth in 90 days!
            </p>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-rose-500 to-orange-500">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            For Researchers Ready to Grow Their Influence
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Turn Your Research Into<br />Social Media Success
          </h1>
          <p className="text-xl text-white/95 mb-6 max-w-3xl mx-auto">
            Build your academic brand, grow your following, and become a thought leader in your field. Generate engaging content that researchers actually want to read and share.
          </p>
          <p className="text-2xl font-bold text-yellow-300">
            🚀 Start Free: 10 Premium Posts + Growth Strategy Session
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Benefits & Social Proof */}
          <div className="space-y-6">
            <Card className="p-8 bg-white/95 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Why Social Media Matters for Researchers</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Build Your Personal Brand</h4>
                    <p className="text-sm text-gray-600">
                      Stand out in your field. Get invited to conferences, collaborations, and media opportunities
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">3x More Citations</h4>
                    <p className="text-sm text-gray-600">
                      Papers promoted on social media receive 300% more citations within the first year
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Engage Beyond Academia</h4>
                    <p className="text-sm text-gray-600">
                      Reach industry professionals, policymakers, and the public who can apply your research
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Before/After Comparison */}
            <Card className="p-8 bg-white/95 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Before vs. After AutoPromo</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">😕</span>
                    <h4 className="font-bold text-sm">Before</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      <span>50 views per post</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      <span>2-3% engagement rate</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      <span>Hours spent writing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-red-500">✗</span>
                      <span>Generic content</span>
                    </li>
                  </ul>
                </div>
                <div className="border-2 border-green-500 rounded-lg p-4 bg-green-50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🎉</span>
                    <h4 className="font-bold text-sm">After</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span className="font-medium">2,500+ views per post</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span className="font-medium">15-20% engagement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span className="font-medium">5 minutes per post</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span className="font-medium">Viral-ready content</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Success Story */}
            <Card className="p-6 bg-gradient-to-br from-pink-600 to-orange-600 text-white">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <Badge className="mb-2 bg-white/20">Success Story</Badge>
                  <h4 className="font-bold text-lg mb-2">0 → 50K Followers in 6 Months</h4>
                </div>
              </div>
              <p className="text-sm opacity-95 mb-3 italic">
                "I was stuck at 200 followers on Twitter for years. After using AutoPromo's content consistently, I hit 50,000 followers in 6 months. Now I get invited to keynotes, consulting gigs, and my papers get 10x more attention. Game changer!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="font-bold text-sm">DK</span>
                </div>
                <div>
                  <p className="text-sm font-semibold">Dr. Kevin Zhao</p>
                  <p className="text-xs opacity-90">AI Researcher, UC Berkeley</p>
                </div>
              </div>
            </Card>

            {/* Real Growth Metrics */}
            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <h3 className="font-bold mb-4">Average Growth Metrics (First 90 Days)</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Follower Growth</span>
                    <span className="text-pink-600 font-bold">+287%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-rose-500" style={{ width: "87%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Post Engagement</span>
                    <span className="text-rose-600 font-bold">+412%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-rose-500 to-orange-500" style={{ width: "95%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Paper Citations</span>
                    <span className="text-orange-600 font-bold">+324%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-yellow-500" style={{ width: "82%" }} />
                  </div>
                </div>
              </div>
            </Card>

            {/* What You Get */}
            <Card className="p-6 bg-gradient-to-br from-pink-50 to-orange-50 border-2 border-pink-300">
              <h3 className="font-bold mb-4">What Makes Our Content Go Viral</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 mt-0.5 text-pink-600 flex-shrink-0" />
                  <span><strong>Hook-first writing:</strong> Start with tension, curiosity, or surprise</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 mt-0.5 text-rose-600 flex-shrink-0" />
                  <span><strong>Platform optimization:</strong> Threads for Twitter, articles for LinkedIn</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 mt-0.5 text-orange-600 flex-shrink-0" />
                  <span><strong>Timing intelligence:</strong> Post when your audience is most active</span>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 mt-0.5 text-yellow-600 flex-shrink-0" />
                  <span><strong>Engagement drivers:</strong> Questions, polls, and conversation starters</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Right: Sign Up Form */}
          <Card className="p-8 bg-white sticky top-4">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Start Growing Today</h3>
              <p className="text-gray-600">Get 10 free premium posts + growth strategy session</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                <label htmlFor="platform" className="block text-sm font-medium mb-2">
                  Primary Platform
                </label>
                <select
                  id="platform"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="">Select platform</option>
                  <option value="twitter">Twitter/X</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="reddit">Reddit</option>
                  <option value="wechat">WeChat</option>
                  <option value="xiaohongshu">Xiaohongshu</option>
                  <option value="multiple">Multiple platforms</option>
                </select>
              </div>

              <div>
                <label htmlFor="currentFollowers" className="block text-sm font-medium mb-2">
                  Current Follower Count (Optional)
                </label>
                <select
                  id="currentFollowers"
                  name="currentFollowers"
                  value={formData.currentFollowers}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="">Select range</option>
                  <option value="0-100">0-100 (Just starting)</option>
                  <option value="100-1000">100-1,000</option>
                  <option value="1000-10000">1,000-10,000</option>
                  <option value="10000+">10,000+ (Established)</option>
                </select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 h-12 text-lg"
              >
                {isSubmitting ? "Submitting..." : "Get Free Growth Package"}
                {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-lg">
              <p className="text-xs font-bold text-yellow-900 mb-2">🎁 YOUR FREE PACKAGE:</p>
              <ul className="text-xs text-yellow-900 space-y-1">
                <li>✓ 10 premium posts ($50 value)</li>
                <li>✓ 1-on-1 growth strategy call ($200 value)</li>
                <li>✓ Viral content playbook ($30 value)</li>
                <li>✓ Analytics & tracking dashboard</li>
                <li>✓ Community access & networking</li>
              </ul>
              <div className="mt-3 pt-3 border-t border-yellow-300">
                <p className="text-sm font-bold text-yellow-900">Total Value: $280 - Yours FREE!</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center">
              No credit card required. Start growing in the next 5 minutes.
            </p>
          </Card>
        </div>

        {/* Platform-Specific Tips */}
        <Card className="mt-12 p-8 bg-white/95 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">Platform-Specific Growth Strategies</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🐦</span>
                <h4 className="font-bold">Twitter/X</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Thread format, viral hooks, strategic hashtags, optimal posting times
              </p>
              <Badge variant="secondary" className="text-xs">Avg. Growth: +350%</Badge>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💼</span>
                <h4 className="font-bold">LinkedIn</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Professional storytelling, thought leadership, engagement strategies
              </p>
              <Badge variant="secondary" className="text-xs">Avg. Growth: +280%</Badge>
            </div>
            <div className="border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">📕</span>
                <h4 className="font-bold">Xiaohongshu</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Visual storytelling, emoji usage, community building tactics
              </p>
              <Badge variant="secondary" className="text-xs">Avg. Growth: +420%</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}