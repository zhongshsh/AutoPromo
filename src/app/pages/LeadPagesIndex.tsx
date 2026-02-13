import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  Sparkles, 
  Building2, 
  Rocket, 
  Globe, 
  TrendingUp,
  ArrowRight,
  Users,
  Clock,
  Star,
  Languages,
  BarChart3
} from "lucide-react";

export function LeadPagesIndex() {
  const leadPages = [
    {
      id: 1,
      path: "/lead/free-trial",
      title: "Free Trial for Researchers",
      description: "14-day full access with unlimited paper processing. Perfect for individual researchers looking to boost their paper visibility.",
      icon: Sparkles,
      gradient: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      features: [
        "14 days free trial",
        "Generate content for 5 papers",
        "All platforms included",
        "No credit card required"
      ],
      target: "Individual Researchers",
      offer: "Free 14-Day Trial",
      badge: "Most Popular",
      badgeColor: "bg-blue-600"
    },
    {
      id: 2,
      path: "/lead/enterprise",
      title: "Enterprise & Institutions",
      description: "Comprehensive solution for universities and research centers. Unlimited users, custom integration, and dedicated support.",
      icon: Building2,
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50",
      features: [
        "30-day free pilot",
        "Unlimited team members",
        "Custom pricing",
        "Dedicated account manager"
      ],
      target: "Universities & Research Centers",
      offer: "30-Day Pilot + Custom Demo",
      badge: "For Teams",
      badgeColor: "bg-indigo-600"
    },
    {
      id: 3,
      path: "/lead/early-access",
      title: "Early Access Beta Program",
      description: "Sign up as one of 100 founding members with lifetime 50% discount. Shape the product and get unlimited beta access.",
      icon: Rocket,
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50",
      features: [
        "Lifetime 50% discount",
        "Unlimited beta access",
        "Private community",
        "Direct feature requests"
      ],
      target: "Early Adopters",
      offer: "Limited to 100 Spots",
      badge: "Exclusive",
      badgeColor: "bg-orange-600"
    },
    {
      id: 4,
      path: "/lead/global",
      title: "Multilingual Global Reach",
      description: "Expand your research impact worldwide with native-quality translation and cultural adaptation across 15 languages.",
      icon: Globe,
      gradient: "from-teal-600 to-blue-600",
      bgGradient: "from-teal-50 to-blue-50",
      features: [
        "21 days free trial",
        "15 languages supported",
        "Cultural adaptation",
        "Global platform optimization"
      ],
      target: "International Researchers",
      offer: "21-Day Global Trial",
      badge: "Go International",
      badgeColor: "bg-teal-600"
    },
    {
      id: 5,
      path: "/lead/growth",
      title: "Social Media Growth",
      description: "Build your academic brand and grow your following. Turn research into viral-ready content for maximum engagement.",
      icon: TrendingUp,
      gradient: "from-pink-600 to-orange-600",
      bgGradient: "from-pink-50 to-orange-50",
      features: [
        "10 free premium posts",
        "1-on-1 growth strategy",
        "Viral content templates",
        "Analytics dashboard"
      ],
      target: "Influencer Researchers",
      offer: "$280 Value Package Free",
      badge: "For Growth",
      badgeColor: "bg-pink-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">AutoPromo</h1>
                <p className="text-sm text-gray-600">Choose Your Path to Success</p>
              </div>
            </div>
            <Link to="/">
              <Button variant="outline">Back to App</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Choose the Perfect Plan<br />for Your Research Goals
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Whether you're an individual researcher, part of an institution, or building your academic brand, 
          we have a tailored solution with compelling offers to help you succeed.
        </p>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">50K+</p>
            <p className="text-sm text-gray-600">Researchers</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">10+ hrs</p>
            <p className="text-sm text-gray-600">Saved Per Paper</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">4.9/5</p>
            <p className="text-sm text-gray-600">User Rating</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold">3x</p>
            <p className="text-sm text-gray-600">More Citations</p>
          </div>
        </div>
      </section>

      {/* Lead Pages Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadPages.map((page) => {
            const Icon = page.icon;
            return (
              <Card 
                key={page.id} 
                className={`p-6 hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${page.bgGradient} border-2`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${page.gradient} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge className={`${page.badgeColor} text-white`}>
                    {page.badge}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-2">{page.title}</h3>
                
                <div className="mb-4">
                  <Badge variant="outline" className="text-xs mb-2">
                    {page.target}
                  </Badge>
                  <p className="text-sm text-gray-600">{page.description}</p>
                </div>

                <div className={`bg-white/70 rounded-lg p-4 mb-4 border-2 border-dashed`}>
                  <p className="text-sm font-bold text-gray-900 mb-2">🎁 {page.offer}</p>
                  <ul className="space-y-1">
                    {page.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-700 flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={page.path}>
                  <Button 
                    className={`w-full bg-gradient-to-r ${page.gradient} hover:opacity-90 transition-opacity`}
                  >
                    Learn More & Sign Up
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Quick Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-3 px-2">Feature</th>
                  <th className="text-center py-3 px-2">Free Trial</th>
                  <th className="text-center py-3 px-2">Enterprise</th>
                  <th className="text-center py-3 px-2">Early Access</th>
                  <th className="text-center py-3 px-2">Global</th>
                  <th className="text-center py-3 px-2">Growth</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-2 font-medium">Trial Duration</td>
                  <td className="text-center py-3 px-2">14 days</td>
                  <td className="text-center py-3 px-2">30 days</td>
                  <td className="text-center py-3 px-2">Unlimited</td>
                  <td className="text-center py-3 px-2">21 days</td>
                  <td className="text-center py-3 px-2">10 posts</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2 font-medium">Paper Limit</td>
                  <td className="text-center py-3 px-2">5 papers</td>
                  <td className="text-center py-3 px-2">Unlimited</td>
                  <td className="text-center py-3 px-2">Unlimited</td>
                  <td className="text-center py-3 px-2">Unlimited</td>
                  <td className="text-center py-3 px-2">As needed</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2 font-medium">Languages</td>
                  <td className="text-center py-3 px-2">EN + ZH</td>
                  <td className="text-center py-3 px-2">All</td>
                  <td className="text-center py-3 px-2">All</td>
                  <td className="text-center py-3 px-2 font-bold text-teal-600">15 Languages</td>
                  <td className="text-center py-3 px-2">EN + ZH</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-2 font-medium">Special Benefit</td>
                  <td className="text-center py-3 px-2">-</td>
                  <td className="text-center py-3 px-2">Custom Integration</td>
                  <td className="text-center py-3 px-2 font-bold text-orange-600">50% Off Forever</td>
                  <td className="text-center py-3 px-2">Cultural Tips</td>
                  <td className="text-center py-3 px-2 font-bold text-pink-600">Strategy Session</td>
                </tr>
                <tr>
                  <td className="py-3 px-2 font-medium">Best For</td>
                  <td className="text-center py-3 px-2 text-xs">Testing</td>
                  <td className="text-center py-3 px-2 text-xs">Teams</td>
                  <td className="text-center py-3 px-2 text-xs">Advocates</td>
                  <td className="text-center py-3 px-2 text-xs">International</td>
                  <td className="text-center py-3 px-2 text-xs">Brand Building</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Still Not Sure Which One to Choose?</h3>
          <p className="text-xl mb-8 opacity-90">
            Start with our free trial and explore all features risk-free
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/lead/free-trial">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}