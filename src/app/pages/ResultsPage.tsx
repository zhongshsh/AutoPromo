import { useState } from "react";
import { ArrowLeft, Download, Copy, Check, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";

const mockResults = {
  paperTitle: "AutoPromo: A Multi-Agent Framework for Automated Academic Paper Promotion",
  generatedAt: "February 12, 2026",
  content: {
    blog_en: {
      title: "Breaking Down Silos: How AI Agents Are Revolutionizing Academic Communication",
      content: `In the fast-paced world of academic research, publishing a groundbreaking paper is only half the battle. The real challenge? Getting people to actually read it.

Enter AutoPromo, a multi-agent AI framework that's changing the game for researchers who want their work to make an impact beyond their immediate circles.

## The Problem: Great Research, Zero Visibility

Every year, millions of research papers are published. Most of them? They vanish into the digital void, read by a handful of specialists and then forgotten. It's not because the research is bad—it's because researchers don't have the time, skills, or resources to promote their work effectively across different platforms.

## The Solution: AI Agents Working Like a Newsroom

AutoPromo takes a novel approach by organizing six specialized AI agents in a pipeline that mirrors how professional newsrooms work:

1. **Paper Interpreter**: Parses your PDF into a structured knowledge graph
2. **Public Attention Agent**: Finds the most newsworthy angles aligned with trending topics
3. **Skeptical Reviewer**: Fact-checks claims against existing literature
4. **Chief Editor**: Curates the final selection of promotional points
5. **Output Generator**: Creates blogs, podcasts, and social media posts
6. **Content Polisher**: Refines everything through multi-perspective review

## The Results: One Paper, Multiple Formats, Multiple Languages

Upload a single PDF, and AutoPromo generates:
- Bilingual blog posts (English and Chinese)
- Two-person podcast scripts
- Platform-specific content for Twitter, LinkedIn, Reddit, WeChat, and Xiaohongshu

Each piece is optimized for its platform's unique audience and format conventions.

## What Makes It Different

Unlike simple summarization tools, AutoPromo focuses on finding genuinely newsworthy aspects of your research—the trade-offs, counterintuitive findings, and ecosystem-level effects that make people pay attention.

The framework also incorporates claim verification to ensure promotional content remains faithful to the original paper, avoiding overstatement or misrepresentation.

## The Bottom Line

Academic research deserves to be read, discussed, and applied. AutoPromo makes that happen by automating the time-consuming work of multi-platform promotion, letting researchers focus on what they do best: pushing the boundaries of human knowledge.`,
    },
    blog_zh: {
      title: "打破信息孤岛：AI智能体如何革新学术传播",
      content: `在学术研究的快节奏世界中，发表一篇突破性论文只是成功的一半。真正的挑战？让人们真正阅读它。

AutoPromo是一个多智能体AI框架，正在改变研究人员希望其工作在直接圈子之外产生影响的方式。

## 问题：优秀研究，零可见度

每年都会发表数百万篇研究论文。其中大多数？它们消失在数字虚空中，被少数专家阅读后就被遗忘了。这不是因为研究不好——而是因为研究人员没有时间、技能或资源在不同平台上有效地宣传他们的工作。

## 解决方案：像新闻编辑室一样工作的AI智能体

AutoPromo采用了一种新颖的方法，在管道中组织六个专业AI智能体，模仿专业新闻编辑室的工作方式：

1. **论文解释器**：将您的PDF解析为结构化知识图谱
2. **公众关注智能体**：寻找与热点话题相符的最具新闻价值的角度
3. **怀疑审查员**：根据现有文献事实核查声明
4. **总编辑**：策划最终的宣传点选择
5. **输出生成器**：创建博客、播客和社交媒体帖子
6. **内容润色师**：通过多角度审查完善一切

## 结果：一篇论文，多种格式，多种语言

上传单个PDF，AutoPromo生成：
- 双语博客文章（英文和中文）
- 两人播客脚本
- 针对Twitter、LinkedIn、Reddit、微信和小红书的平台特定内容

每篇内容都针对其平台的独特受众和格式约定进行了优化。

## 与众不同之处

与简单的摘要工具不同，AutoPromo专注于找到研究中真正具有新闻价值的方面——权衡、违反直觉的发现和生态系统级别的影响，这些都能引起人们的关注。

该框架还包含声明验证，以确保宣传内容忠实于原始论文，避免夸大或歪曲。

## 底线

学术研究值得被阅读、讨论和应用。AutoPromo通过自动化多平台推广的耗时工作来实现这一目标，让研究人员专注于他们最擅长的事情：推动人类知识的边界。`,
    },
    twitter: {
      content: `🚀 New framework alert: AutoPromo transforms academic papers into promotional content across multiple platforms automatically

6 specialized AI agents work like a newsroom:
📄 Parse paper → 🎯 Find newsworthy angles → ✅ Fact-check → ✍️ Generate content → ✨ Polish

Get:
• Bilingual blogs
• Podcast scripts
• Platform-specific posts for Twitter, LinkedIn, Reddit, WeChat, Xiaohongshu

One PDF upload → Multi-format, multi-language promotion

#AcademicTwitter #AIResearch #SciComm`,
    },
    linkedin: {
      content: `**Bridging the Gap Between Research and Impact**

Publishing research is one thing. Getting it noticed is another challenge entirely.

I'm excited to share AutoPromo, a multi-agent AI framework that automates the creation of promotional content for academic papers across multiple platforms and languages.

**The Challenge:**
Researchers invest months in their work, but lack time and resources for effective promotion. Most papers never reach audiences beyond immediate specialists.

**Our Approach:**
Six specialized AI agents collaborate like a professional newsroom:
→ Paper Interpreter: Structures the PDF into a knowledge graph
→ Public Attention Agent: Identifies newsworthy findings
→ Skeptical Reviewer: Verifies claims against literature
→ Chief Editor: Curates final promotional points
→ Output Generator: Creates platform-specific content
→ Content Polisher: Ensures quality through multi-perspective review

**What You Get:**
✅ Bilingual blog posts (EN/ZH)
✅ Podcast dialogue scripts
✅ Social media content for 5+ platforms
✅ All from a single PDF upload

**Why It Matters:**
Research deserves to be read, discussed, and applied. Automated promotion helps researchers focus on what they do best while ensuring their work reaches the right audiences.

#Research #AI #AcademicCommunication #Innovation`,
    },
    reddit: {
      content: `**AutoPromo: Multi-Agent Framework for Automated Academic Paper Promotion**

TL;DR: Upload a research paper PDF, get promotional content for Twitter, LinkedIn, Reddit, WeChat, and Xiaohongshu automatically generated by AI agents.

**The Problem**

You spend months on research, weeks writing the paper, and... crickets. Nobody reads it outside your immediate field. Sound familiar?

**How It Works**

Six AI agents work together like a newsroom:

1. **Paper Interpreter** - Parses your PDF into structured data
2. **Public Attention Agent** - Finds what's actually newsworthy (not just "we built a bigger model")
3. **Skeptical Reviewer** - Fact-checks against Google Scholar to avoid BS
4. **Chief Editor** - Picks the best 3-5 points to promote
5. **Output Generator** - Creates blogs, podcasts, and platform-specific posts
6. **Content Polisher** - Makes sure everything is accurate and engaging

**What You Get**

- English blog post
- Chinese blog post  
- Podcast script (two-person dialogue)
- Twitter thread
- LinkedIn post
- Reddit post
- WeChat article
- Xiaohongshu post

All optimized for each platform's format and audience.

**The Interesting Part**

The framework uses a "podcast-first" approach - generates the dialogue script first, then uses that narrative structure as scaffolding for other formats. Turns out conversation makes a better foundation than just rewriting the abstract over and over.

Also has a dedicated fact-checking agent that searches for prior work and flags claims that aren't novel or are overstated. Nice to see some guardrails built in.

**Thoughts?**

Anyone else working on automating science communication? What are the ethical considerations here?

[Link to paper would go here]`,
    },
    wechat: {
      content: `# 学术论文推广的革命：AutoPromo多智能体框架

## 一、研究的困境

在当今学术界，发表论文仅仅是第一步。如何让你的研究被更多人看到、讨论、引用，才是真正的挑战。

据统计，每年发表的数百万篇学术论文中，大部分都淹没在信息洪流中，只有极少数能够产生真正的影响力。

问题的根源在于：
- ✍️ 研究者缺乏时间进行多平台推广
- 🌐 不同平台需要不同的内容形式和语言风格
- 📱 跨平台、跨语言的内容创作工作量巨大

## 二、AutoPromo：AI智能体的解决方案

AutoPromo采用了创新的多智能体架构，模仿专业新闻编辑室的工作流程：

**六大智能体协同工作**

1. **论文解释器** - 将PDF转化为结构化知识图谱
2. **公众关注智能体** - 挖掘具有新闻价值的研究发现
3. **怀疑审查员** - 对照文献验证声明的准确性
4. **总编辑** - 精选最终的推广要点
5. **内容生成器** - 创建多种格式的推广内容
6. **内容润色师** - 从多个视角完善每一篇内容

## 三、一键生成，多平台覆盖

只需上传一份PDF文件，AutoPromo即可自动生成：

📝 **博客文章**（中英双语）
- 深度长文
- 逻辑清晰
- 易于理解

🎙️ **播客脚本**
- 双人对话格式
- 生动有趣
- 适合音频传播

📱 **社交媒体内容**
- Twitter话题帖
- LinkedIn专业文章
- Reddit讨论帖
- 微信公众号文章
- 小红书笔记

每种内容都针对平台特性和受众习惯进行了优化。

## 四、独特之处

与传统的摘要工具不同，AutoPromo关注的是：

🎯 **真正的新闻价值**
- 违反直觉的发现
- 方法上的权衡
- 生态系统级别的影响

✅ **事实核查**
- 避免夸大其词
- 确保声明准确
- 引用文献支撑

🌐 **多语言多平台**
- 无缝跨语言转换
- 平台风格适配
- 受众精准定位

## 五、未来展望

AutoPromo代表了学术传播自动化的新方向。它让研究者可以专注于科研本身，而将繁琐的推广工作交给AI来完成。

学术研究的价值，不应该被埋没在发表后的沉默中。

---

*关注我们，了解更多AI赋能学术传播的创新实践*`,
    },
    xiaohongshu: {
      content: `📚✨ 学术论文推广神器！一键生成多平台内容

姐妹们！作为科研人，你们是不是也有这样的烦恼：
辛辛苦苦写完论文，结果没人看😭

今天要给大家安利一个宝藏工具！👇

🤖 **AutoPromo - AI智能推广助手**

只需要上传PDF，就能自动生成：
✅ 中英文博客
✅ 播客脚本  
✅ 微博/小红书/公众号文案
✅ Twitter/LinkedIn帖子

📱 **6个AI智能体分工合作**
就像专业新闻团队一样：
• 解析论文
• 挖掘亮点
• 事实核查
• 内容生成
• 精修润色

🎯 **超贴心的功能**
- 自动适配不同平台风格
- 中英文无缝切换
- 找到最有传播力的角度
- 确保内容准确不夸大

💡 **适合谁用？**
✨ 科研人员
✨ 高校教师
✨ 研究生
✨ 学术编辑

再也不用担心好研究没人看啦！🎉

.
.
.
#学术科研 #AI工具 #效率神器 #科研日常 #论文写作 #学术推广 #人工智能 #科技分享`,
    },
  },
};

export function ResultsPage() {
  const [activeTab, setActiveTab] = useState("blog_en");
  const [copiedContent, setCopiedContent] = useState<string | null>(null);

  const handleCopy = (content: string, contentType: string) => {
    navigator.clipboard.writeText(content);
    setCopiedContent(contentType);
    setTimeout(() => setCopiedContent(null), 2000);
  };

  const contentSections = [
    { id: "blog_en", label: "English Blog", icon: "📝" },
    { id: "blog_zh", label: "Chinese Blog", icon: "📝" },
    { id: "twitter", label: "Twitter", icon: "🐦" },
    { id: "linkedin", label: "LinkedIn", icon: "💼" },
    { id: "reddit", label: "Reddit", icon: "🤖" },
    { id: "wechat", label: "WeChat", icon: "💬" },
    { id: "xiaohongshu", label: "Xiaohongshu", icon: "📕" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-3">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div>
            <h1 className="font-semibold text-lg mb-1">Generated Content</h1>
            <p className="text-sm text-gray-500 line-clamp-1">{mockResults.paperTitle}</p>
            <p className="text-xs text-gray-400 mt-1">Generated on {mockResults.generatedAt}</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Quick Actions */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <Button variant="outline" size="sm" className="flex items-center gap-2 whitespace-nowrap">
            <Download className="w-4 h-4" />
            Download All
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2 whitespace-nowrap">
            <ExternalLink className="w-4 h-4" />
            Share to Community
          </Button>
        </div>

        {/* Platform Tabs */}
        <Card className="p-4 mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 mb-4 border-b">
            {contentSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                  activeTab === section.id
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span>{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="space-y-4">
            {activeTab === "blog_en" && (
              <ContentSection
                title={mockResults.content.blog_en.title}
                content={mockResults.content.blog_en.content}
                type="blog_en"
                onCopy={handleCopy}
                isCopied={copiedContent === "blog_en"}
              />
            )}
            {activeTab === "blog_zh" && (
              <ContentSection
                title={mockResults.content.blog_zh.title}
                content={mockResults.content.blog_zh.content}
                type="blog_zh"
                onCopy={handleCopy}
                isCopied={copiedContent === "blog_zh"}
              />
            )}
            {activeTab === "twitter" && (
              <ContentSection
                content={mockResults.content.twitter.content}
                type="twitter"
                onCopy={handleCopy}
                isCopied={copiedContent === "twitter"}
                characterCount={mockResults.content.twitter.content.length}
              />
            )}
            {activeTab === "linkedin" && (
              <ContentSection
                content={mockResults.content.linkedin.content}
                type="linkedin"
                onCopy={handleCopy}
                isCopied={copiedContent === "linkedin"}
              />
            )}
            {activeTab === "reddit" && (
              <ContentSection
                content={mockResults.content.reddit.content}
                type="reddit"
                onCopy={handleCopy}
                isCopied={copiedContent === "reddit"}
              />
            )}
            {activeTab === "wechat" && (
              <ContentSection
                content={mockResults.content.wechat.content}
                type="wechat"
                onCopy={handleCopy}
                isCopied={copiedContent === "wechat"}
              />
            )}
            {activeTab === "xiaohongshu" && (
              <ContentSection
                content={mockResults.content.xiaohongshu.content}
                type="xiaohongshu"
                onCopy={handleCopy}
                isCopied={copiedContent === "xiaohongshu"}
              />
            )}
          </div>
        </Card>

        {/* Tips */}
        <Card className="p-4 bg-blue-50 border-blue-200">
          <h3 className="font-semibold text-sm mb-2">💡 Tips for Using Generated Content</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Review and customize content before publishing</li>
            <li>• Add relevant images or figures from your paper</li>
            <li>• Tag collaborators and related accounts</li>
            <li>• Share across multiple platforms for maximum reach</li>
          </ul>
        </Card>
      </main>
    </div>
  );
}

interface ContentSectionProps {
  title?: string;
  content: string;
  type: string;
  onCopy: (content: string, type: string) => void;
  isCopied: boolean;
  characterCount?: number;
}

function ContentSection({ title, content, type, onCopy, isCopied, characterCount }: ContentSectionProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          {title && <h3 className="font-semibold text-lg mb-1">{title}</h3>}
          {characterCount && (
            <Badge variant="secondary" className="text-xs">
              {characterCount} characters
            </Badge>
          )}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onCopy(content, type)}
          className="flex items-center gap-2"
        >
          {isCopied ? (
            <>
              <Check className="w-4 h-4 text-green-600" />
              <span className="text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </Button>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">{content}</pre>
      </div>
    </div>
  );
}
