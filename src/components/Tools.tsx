import { Card, CardContent } from "@/components/ui/card";

const Tools = () => {
  const tools = [
    { name: "n8n", category: "Workflow Automation", logo: "🔗" },
    { name: "Make.com", category: "Integration Platform", logo: "🔷" },
    { name: "Zapier", category: "App Automation", logo: "⚡" },
    { name: "OpenAI GPT", category: "Language Models", logo: "🤖" },
    { name: "Claude", category: "AI Assistant", logo: "🧠" },
    { name: "Gemini", category: "Multimodal AI", logo: "✨" },
    { name: "LangChain", category: "AI Framework", logo: "🔗" },
    { name: "Python", category: "Development", logo: "🐍" },
    { name: "JavaScript", category: "Development", logo: "📜" },
    { name: "React", category: "Frontend", logo: "⚛️" },
    { name: "Node.js", category: "Backend", logo: "🟢" },
    { name: "PostgreSQL", category: "Database", logo: "🐘" },
    { name: "MongoDB", category: "Database", logo: "🍃" },
    { name: "Docker", category: "DevOps", logo: "🐳" },
    { name: "AWS", category: "Cloud", logo: "☁️" },
    { name: "Supabase", category: "Backend", logo: "⚡" }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Powered by </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cutting-Edge Tools
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We leverage the most advanced AI models and automation platforms to build 
            robust, scalable solutions that grow with your business.
          </p>
        </div>

        {/* Auto-scrolling Tools Banner */}
        <div className="relative overflow-hidden bg-gradient-card border border-border/50 rounded-lg py-8">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll-left">
            {/* First set of tools */}
            {tools.map((tool, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center gap-4 bg-gradient-card border border-border/30 rounded-lg px-6 py-4 min-w-[200px] hover:border-primary/50 transition-all duration-300 hover:shadow-orange group"
              >
                <div className="text-2xl">{tool.logo}</div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {tool.category}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {tools.map((tool, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center gap-4 bg-gradient-card border border-border/30 rounded-lg px-6 py-4 min-w-[200px] hover:border-primary/50 transition-all duration-300 hover:shadow-orange group"
              >
                <div className="text-2xl">{tool.logo}</div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {tool.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-card border border-border/50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Custom Tool Integration
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Beyond our standard toolkit, we seamlessly integrate with your existing systems 
              and preferred platforms. Whether it's your CRM, ERP, or specialized industry software, 
              our AI agents work with what you already have.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;