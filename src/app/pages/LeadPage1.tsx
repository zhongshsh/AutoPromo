import { useState } from "react";
import { Sparkles, CheckCircle, ArrowRight, Clock, Users, Zap } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";

// Lead Page 1: Free Trial for Researchers - 研究人员免费试用
export function LeadPage1() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      // Simulate submission
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Welcome to AutoPromo! 🎉</h2>
          <p className="text-gray-600 mb-6">
            Check your email ({email}) for your free trial access link and setup instructions.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
            <p className="text-sm font-semibold text-blue-900 mb-2">What's Next?</p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✓ Access link sent to your email</li>
              <li>✓ 14 days unlimited access</li>
              <li>✓ Generate content for 5 papers</li>
              <li>✓ Priority support included</li>
            </ul>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Limited Time Offer - First 500 Researchers
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Get Your Research<br />Noticed in 5 Minutes
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your academic paper into engaging content for Twitter, LinkedIn, WeChat, and more.
            <span className="font-semibold"> Free for 14 days. No credit card required.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Benefits */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Why Researchers Love AutoPromo</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Save 10+ Hours Per Paper</h4>
                    <p className="text-sm text-gray-600">
                      Automated content generation across 7 platforms in multiple languages
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">3x More Citations</h4>
                    <p className="text-sm text-gray-600">
                      Papers promoted on social media get 300% more visibility
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AI-Powered Quality</h4>
                    <p className="text-sm text-gray-600">
                      6 specialized agents ensure accuracy and engagement
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Proof */}
            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">1,234+ Researchers</p>
                  <p className="text-sm text-gray-600">Already using AutoPromo</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div>
                  <p className="text-2xl font-bold text-blue-600">4.9/5</p>
                  <p className="text-xs text-gray-600">User Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">15K+</p>
                  <p className="text-xs text-gray-600">Papers Promoted</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-pink-600">98%</p>
                  <p className="text-xs text-gray-600">Satisfaction</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Sign Up Form */}
          <Card className="p-8 bg-white sticky top-4">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Start Your Free Trial</h3>
              <p className="text-gray-600">Sign up with leading researchers from top institutions</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Dr. Jane Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Academic Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane.smith@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="institution" className="block text-sm font-medium mb-2">
                  Institution (Optional)
                </label>
                <Input
                  id="institution"
                  type="text"
                  placeholder="Stanford University"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 h-12 text-lg"
              >
                Get Free Access Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600" />
                14-day full access, no strings attached
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Generate content for 5 papers
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Cancel anytime, keep all your content
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-6 text-center">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
          </Card>
        </div>

        {/* What You'll Get */}
        <Card className="mt-12 p-8 bg-white/95 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">What's Included in Your Free Trial</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📝</span>
              </div>
              <h4 className="font-semibold mb-2">Blog Posts</h4>
              <p className="text-sm text-gray-600">English & Chinese</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎙️</span>
              </div>
              <h4 className="font-semibold mb-2">Podcast Scripts</h4>
              <p className="text-sm text-gray-600">Ready to record</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold mb-2">Social Posts</h4>
              <p className="text-sm text-gray-600">5+ platforms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💬</span>
              </div>
              <h4 className="font-semibold mb-2">Priority Support</h4>
              <p className="text-sm text-gray-600">Expert help</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}