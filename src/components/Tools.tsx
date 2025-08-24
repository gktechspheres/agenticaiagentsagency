import { Card, CardContent } from "@/components/ui/card";

const Tools = () => {
  const tools = [
    { name: "n8n", category: "Workflow Automation" },
    { name: "Make.com", category: "Integration Platform" },
    { name: "Zapier", category: "App Automation" },
    { name: "OpenAI GPT", category: "Language Models" },
    { name: "Claude", category: "AI Assistant" },
    { name: "Gemini", category: "Multimodal AI" },
    { name: "LangChain", category: "AI Framework" },
    { name: "Python", category: "Development" },
    { name: "JavaScript", category: "Development" },
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" }
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-orange group hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tool.category}
                </p>
              </CardContent>
            </Card>
          ))}
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