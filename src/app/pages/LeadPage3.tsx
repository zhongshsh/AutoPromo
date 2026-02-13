import { useState } from "react";
import { Rocket, CheckCircle, ArrowRight, Star, Lock, Gift, Zap, Users, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

// Lead Page 3: Early Access / Beta Program - 抢先体验页
export function LeadPage3() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [reason, setReason] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Countdown timer state (static for demo)
  const spotsLeft = 47;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setIsSubmitting(true);
      try {
        await fetch("https://script.google.com/macros/s/AKfycbwtrUkPkBDsEUXZueYLN4NhwrWiGIhHLtO92EXWJMiX2W5uVKw9IaeJ7XpSDbnnWppFcg/exec", {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            name,
            email,
            source: "lead-page-3-early-access",
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

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-10 h-10 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-bold mb-2">You're on the List! 🎉</h2>
          <p className="text-gray-600 mb-6">
            Welcome to the AutoPromo Early Access program. We'll send your exclusive invite to <strong>{email}</strong> within 48 hours.
          </p>
          <div className="bg-gradient-to-r from-orange-50 to-pink-50 border-2 border-orange-300 rounded-lg p-5 text-left mb-4">
            <p className="text-sm font-bold text-orange-900 mb-3">🎁 Your Early Access Benefits:</p>
            <ul className="text-sm text-orange-800 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span><strong>Lifetime 50% discount</strong> when you upgrade</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Unlimited paper processing during beta</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Private community & Discord access</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Direct line to founding team</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Beta tester badge in community</span>
              </li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">
            Sign up for our <a href="#" className="text-blue-600 font-semibold hover:underline">Discord community</a> to connect with other beta testers!
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
            <Rocket className="w-4 h-4" />
            Beta Program Now Open
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Be Among the First<br />to Shape the Future
          </h1>
          <p className="text-xl text-white/95 mb-6 max-w-2xl mx-auto">
            Sign up for our exclusive early access program. Get lifetime benefits, free beta access, and help us build the ultimate paper promotion tool.
          </p>
          <div className="flex items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span className="font-semibold">Limited to 100 Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">{spotsLeft} Spots Left</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Benefits - 3 columns */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main Benefits Card */}
            <Card className="p-8 bg-white/95 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Why Join Early Access?</h3>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Gift className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Lifetime 50% Discount</h4>
                    <p className="text-sm text-gray-600">
                      Lock in half-price forever when you upgrade from beta. Save $174/year compared to regular pricing.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Unlimited Beta Access</h4>
                    <p className="text-sm text-gray-600">
                      Process unlimited papers, generate unlimited content. No restrictions during beta period (3-6 months).
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Shape the Product</h4>
                    <p className="text-sm text-gray-600">
                      Direct access to founders. Your feedback influences features. Get recognized as a founding member.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Private Community</h4>
                    <p className="text-sm text-gray-600">
                      Join our Discord with other leading researchers. Share tips, network, and get exclusive updates.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* What Beta Testers Say */}
            <Card className="p-8 bg-white/95 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">What Our Beta Testers Say</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs">Early Adopter</Badge>
                  </div>
                  <p className="text-sm text-gray-700 italic mb-2">
                    "Being part of early access means I get features before anyone else. The 50% lifetime discount alone pays for itself in 6 months!"
                  </p>
                  <p className="text-xs font-semibold">Dr. Alex Kim - MIT</p>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-red-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs">Beta Tester</Badge>
                  </div>
                  <p className="text-sm text-gray-700 italic mb-2">
                    "Love that my feedback actually shapes the product. The team listens and implements suggestions quickly."
                  </p>
                  <p className="text-xs font-semibold">Prof. Sarah Zhang - Oxford</p>
                </div>
              </div>
            </Card>

            {/* Urgency indicator */}
            <Card className="p-6 bg-gradient-to-r from-red-600 to-orange-600 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">⚡ Only {spotsLeft} Spots Remaining</h4>
                  <p className="text-sm opacity-90">
                    We're limiting early access to ensure quality support. Once full, the next opportunity won't be until public launch (6+ months away).
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Sign Up Form - 2 columns */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white sticky top-4">
              <div className="mb-6">
                <Badge className="mb-3 bg-gradient-to-r from-orange-600 to-red-600">Limited Availability</Badge>
                <h3 className="text-2xl font-bold mb-2">Join Early Access</h3>
                <p className="text-gray-600 text-sm">Secure your spot + lifetime benefits</p>
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
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="twitter" className="block text-sm font-medium mb-2">
                    Twitter/X Handle (Optional)
                  </label>
                  <Input
                    id="twitter"
                    type="text"
                    placeholder="@yourhandle"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-1">We'll give you a shoutout when you join!</p>
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-medium mb-2">
                    Why do you want early access?
                  </label>
                  <textarea
                    id="reason"
                    placeholder="Tell us what you're most excited about..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm min-h-[80px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 h-12 text-lg font-semibold"
                >
                  {isSubmitting ? "Submitting..." : "Claim Your Spot Now"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                </Button>
              </form>

              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-lg">
                <p className="text-xs font-bold text-yellow-900 mb-2">🎁 EARLY ACCESS INCLUDES:</p>
                <ul className="text-xs text-yellow-900 space-y-1.5">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 flex-shrink-0" />
                    <span><strong>Lifetime 50% discount</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 flex-shrink-0" />
                    <span>Unlimited usage during beta</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 flex-shrink-0" />
                    <span>Private Discord community</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 flex-shrink-0" />
                    <span>Direct feature requests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 flex-shrink-0" />
                    <span>Founding member badge</span>
                  </li>
                </ul>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                No credit card required. Invites sent within 48 hours.
              </p>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <Card className="mt-12 p-8 bg-white/95 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">Your Early Access Journey</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-orange-600 text-xl">
                1
              </div>
              <h4 className="font-semibold mb-2">Sign Up Today</h4>
              <p className="text-sm text-gray-600">Secure your spot in beta</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-red-600 text-xl">
                2
              </div>
              <h4 className="font-semibold mb-2">Get Access (48h)</h4>
              <p className="text-sm text-gray-600">Receive invite + onboarding</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-pink-600 text-xl">
                3
              </div>
              <h4 className="font-semibold mb-2">Use Unlimited</h4>
              <p className="text-sm text-gray-600">3-6 months free beta</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-purple-600 text-xl">
                4
              </div>
              <h4 className="font-semibold mb-2">Keep Discount</h4>
              <p className="text-sm text-gray-600">Lifetime 50% off forever</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}