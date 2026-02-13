import { useState } from "react";
import { Search, TrendingUp, Clock, Heart, MessageCircle, Share2, Sparkles, Users, Zap, Globe } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

interface Post {
  id: string;
  title: string;
  author: string;
  institution: string;
  timestamp: string;
  likes: number;
  comments: number;
  platforms: string[];
  tags: string[];
  excerpt: string;
}

const mockPosts: Post[] = [
  {
    id: "1",
    title: "Multi-Agent Systems Transform Academic Paper Promotion",
    author: "Dr. Sarah Chen",
    institution: "Carnegie Mellon University",
    timestamp: "2 hours ago",
    likes: 234,
    comments: 18,
    platforms: ["Twitter", "LinkedIn", "WeChat"],
    tags: ["NLP", "Multi-Agent", "Automation"],
    excerpt: "Our new framework automates the creation of promotional content across multiple platforms using specialized AI agents...",
  },
  {
    id: "2",
    title: "Vision-Language Models Achieve New Benchmark on Document Understanding",
    author: "Prof. Michael Wong",
    institution: "Stanford University",
    timestamp: "5 hours ago",
    likes: 189,
    comments: 24,
    platforms: ["Twitter", "Reddit"],
    tags: ["Computer Vision", "LLM", "Document AI"],
    excerpt: "We introduce DocLayout-YOLO, a state-of-the-art model for detecting layout elements in academic papers with 95% accuracy...",
  },
  {
    id: "3",
    title: "Breaking Down Language Barriers in Scientific Communication",
    author: "Dr. Li Wei",
    institution: "Tsinghua University",
    timestamp: "1 day ago",
    likes: 456,
    comments: 52,
    platforms: ["WeChat", "Xiaohongshu", "LinkedIn"],
    tags: ["Translation", "Science Communication", "Bilingual"],
    excerpt: "Our bilingual content generation pipeline helps researchers reach global audiences without language barriers...",
  },
  {
    id: "4",
    title: "Fact-Checking AI for Research Claims Verification",
    author: "Dr. Priya Sharma",
    institution: "MIT",
    timestamp: "2 days ago",
    likes: 312,
    comments: 37,
    platforms: ["Twitter", "LinkedIn", "Reddit"],
    tags: ["Fact-Checking", "Research Integrity", "AI Safety"],
    excerpt: "A skeptical reviewer agent that automatically verifies research claims against existing literature, reducing misinformation...",
  },
  {
    id: "5",
    title: "Podcast Scripts as Narrative Scaffolds for Content Generation",
    author: "Prof. James Anderson",
    institution: "UC Berkeley",
    timestamp: "3 days ago",
    likes: 278,
    comments: 31,
    platforms: ["Twitter", "LinkedIn"],
    tags: ["Content Generation", "Narrative Design", "Audio"],
    excerpt: "Using dialogue format as the foundation for multi-format content creation yields more engaging and coherent results...",
  },
];

export function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("trending");

  const filteredPosts = mockPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-semibold text-lg">Community</h1>
              <p className="text-xs text-gray-500">Discover promoted papers</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search papers, topics, or tags..."
              className="pl-10 bg-gray-50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-4">
        {/* Product Introduction Banner */}
        <Card className="p-5 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white border-0 shadow-lg mb-4">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-lg mb-1">Welcome to AutoPromo Community</h2>
              <p className="text-xs text-white/90 leading-relaxed">
                Discover how researchers worldwide are promoting their papers. Get inspired by successful campaigns and connect with peers in your field.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users className="w-3 h-3" />
                <p className="text-lg font-bold">50K+</p>
              </div>
              <p className="text-xs text-white/80">Researchers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Globe className="w-3 h-3" />
                <p className="text-lg font-bold">120+</p>
              </div>
              <p className="text-xs text-white/80">Countries</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Zap className="w-3 h-3" />
                <p className="text-lg font-bold">15K+</p>
              </div>
              <p className="text-xs text-white/80">Papers</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs bg-white/10 backdrop-blur-sm rounded-lg p-2">
            <Sparkles className="w-4 h-4 flex-shrink-0" />
            <span>Share your success story and inspire other researchers</span>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="trending" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Trending
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Recent
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="space-y-4 mt-4">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </TabsContent>

          <TabsContent value="recent" className="space-y-4 mt-4">
            {[...filteredPosts].reverse().map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </TabsContent>
        </Tabs>
      </main>

      <BottomNav />
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      {/* Author Info */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold">
            {post.author.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <p className="font-medium text-sm">{post.author}</p>
            <p className="text-xs text-gray-500">{post.institution}</p>
          </div>
        </div>
        <span className="text-xs text-gray-400">{post.timestamp}</span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-base mb-2 leading-tight">{post.title}</h3>

      {/* Excerpt */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Platforms */}
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
        <span className="text-xs text-gray-500">Promoted on:</span>
        {post.platforms.map((platform) => (
          <Badge key={platform} variant="outline" className="text-xs">
            {platform}
          </Badge>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            className={`flex items-center gap-1 h-8 ${
              isLiked ? "text-red-500" : "text-gray-500"
            }`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
            <span className="text-xs">{post.likes + (isLiked ? 1 : 0)}</span>
          </Button>

          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500 h-8">
            <MessageCircle className="w-4 h-4" />
            <span className="text-xs">{post.comments}</span>
          </Button>
        </div>

        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500 h-8">
          <Share2 className="w-4 h-4" />
          <span className="text-xs">Share</span>
        </Button>
      </div>
    </Card>
  );
}