import { useState } from "react";
import { Building2, CheckCircle, ArrowRight, Shield, Users, BarChart3, HeadphonesIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";

// Lead Page 2: Institution/Team Plan - 高校机构版
export function LeadPage2() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    role: "",
    teamSize: "",
    needs: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.name && formData.institution) {
      setIsSubmitting(true);
      try {
        await fetch("https://script.google.com/macros/s/AKfycbwtrUkPkBDsEUXZueYLN4NhwrWiGIhHLtO92EXWJMiX2W5uVKw9IaeJ7XpSDbnnWppFcg/exec", {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            source: "lead-page-2-enterprise",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center p-4">
        <Card className="max-w-lg w-full p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-3">Thank You for Your Interest!</h2>
          <p className="text-gray-600 mb-6">
            Our institutional team will contact you within 24 hours to discuss your needs and provide a custom demo.
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 text-left space-y-3">
            <p className="text-sm font-semibold text-indigo-900">What Happens Next:</p>
            <div className="space-y-2 text-sm text-indigo-800">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Personal demo scheduled with your team</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Custom pricing proposal for {formData.institution}</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>30-day pilot program with full support</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Dedicated account manager assigned</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            Questions? Email us at institutions@autopromo.ai
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            For Universities & Research Institutions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Amplify Your Institution's<br />Research Impact
          </h1>
          <p className="text-xl text-white/90 mb-4 max-w-3xl mx-auto">
            Enterprise solution for universities and research centers. Empower your entire faculty with AI-powered paper promotion.
          </p>
          <p className="text-2xl font-bold text-yellow-300">
            🎁 30-Day Free Pilot + Custom Pricing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          {/* Left: Enterprise Benefits */}
          <div className="space-y-6">
            <Card className="p-8 bg-white/95 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Enterprise Features</h3>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Unlimited Team Members</h4>
                    <p className="text-sm text-gray-600">
                      One account for your entire department or institution
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Institutional Dashboard</h4>
                    <p className="text-sm text-gray-600">
                      Track research impact and engagement metrics across departments
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Priority Support & Training</h4>
                    <p className="text-sm text-gray-600">
                      Dedicated account manager, onboarding, and ongoing training
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <HeadphonesIcon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Custom Integration</h4>
                    <p className="text-sm text-gray-600">
                      Connect with your institutional repository and publication systems
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Success Stories */}
            <Card className="p-8 bg-white/95 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Trusted by Leading Institutions</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-indigo-600 pl-4">
                  <p className="text-sm text-gray-700 italic mb-2">
                    "AutoPromo has transformed how our faculty shares research. We've seen a 400% increase in social media engagement and significantly more citations."
                  </p>
                  <p className="text-xs font-semibold text-gray-900">Dr. Emily Chen</p>
                  <p className="text-xs text-gray-500">Dean of Research, Stanford CS Department</p>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <p className="text-sm text-gray-700 italic mb-2">
                    "The ROI is incredible. Our researchers save 15+ hours per paper on promotion, allowing them to focus on what matters - the research itself."
                  </p>
                  <p className="text-xs font-semibold text-gray-900">Prof. Michael Zhang</p>
                  <p className="text-xs text-gray-500">Research Director, Tsinghua University</p>
                </div>
              </div>
            </Card>

            {/* Stats */}
            <Card className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <h3 className="font-bold mb-4">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl font-bold">250+</p>
                  <p className="text-sm opacity-90">Institutions</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">50K+</p>
                  <p className="text-sm opacity-90">Researchers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">4.5x</p>
                  <p className="text-sm opacity-90">Citation Increase</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">99.8%</p>
                  <p className="text-sm opacity-90">Uptime</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Contact Form */}
          <Card className="p-8 bg-white sticky top-4">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Get Custom Pricing</h3>
              <p className="text-gray-600">Tell us about your institution's needs</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
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
                  <label htmlFor="role" className="block text-sm font-medium mb-2">
                    Your Role *
                  </label>
                  <Input
                    id="role"
                    name="role"
                    type="text"
                    placeholder="Department Head"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Work Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane.smith@university.edu"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="institution" className="block text-sm font-medium mb-2">
                  Institution Name *
                </label>
                <Input
                  id="institution"
                  name="institution"
                  type="text"
                  placeholder="Stanford University"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium mb-2">
                  Expected Number of Users
                </label>
                <select
                  id="teamSize"
                  name="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  <option value="">Select team size</option>
                  <option value="10-50">10-50 researchers</option>
                  <option value="50-100">50-100 researchers</option>
                  <option value="100-500">100-500 researchers</option>
                  <option value="500+">500+ researchers</option>
                </select>
              </div>

              <div>
                <label htmlFor="needs" className="block text-sm font-medium mb-2">
                  Tell Us About Your Needs
                </label>
                <Textarea
                  id="needs"
                  name="needs"
                  placeholder="e.g., Main research areas, current challenges, specific requirements..."
                  value={formData.needs}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 h-12 text-lg"
              >
                {isSubmitting ? "Submitting..." : "Request Demo & Pricing"}
                {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm font-semibold text-yellow-900 mb-2">🎁 Special Offer:</p>
              <ul className="text-xs text-yellow-800 space-y-1">
                <li>✓ 30-day free pilot program</li>
                <li>✓ Free migration from existing tools</li>
                <li>✓ Complimentary training sessions</li>
                <li>✓ Volume discounts available</li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Feature Comparison */}
        <Card className="p-8 bg-white/95 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Enterprise?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 border rounded-lg">
              <h4 className="font-semibold mb-4 text-lg">Individual</h4>
              <p className="text-3xl font-bold mb-4">$29<span className="text-base font-normal">/mo</span></p>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>✓ 5 papers/month</li>
                <li>✓ All platforms</li>
                <li>✓ Email support</li>
                <li className="text-gray-400">✗ Team features</li>
                <li className="text-gray-400">✗ Analytics</li>
              </ul>
            </div>
            <div className="text-center p-6 border-2 border-purple-600 rounded-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-semibold">
                Most Popular
              </div>
              <h4 className="font-semibold mb-4 text-lg">Team</h4>
              <p className="text-3xl font-bold mb-4">$199<span className="text-base font-normal">/mo</span></p>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li>✓ 50 papers/month</li>
                <li>✓ Up to 10 users</li>
                <li>✓ Priority support</li>
                <li>✓ Team dashboard</li>
                <li className="text-gray-400">✗ Custom integration</li>
              </ul>
            </div>
            <div className="text-center p-6 border-2 border-indigo-600 rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50">
              <h4 className="font-semibold mb-4 text-lg">Enterprise</h4>
              <p className="text-3xl font-bold mb-4">Custom</p>
              <ul className="text-sm text-gray-700 space-y-2 text-left">
                <li>✓ Unlimited papers</li>
                <li>✓ Unlimited users</li>
                <li>✓ Dedicated support</li>
                <li>✓ Advanced analytics</li>
                <li>✓ Custom integration</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
