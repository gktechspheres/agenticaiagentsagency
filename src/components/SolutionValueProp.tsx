import { Bot, MessageSquare, FileText, Search, Zap, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SolutionValueProp = () => {
  const solutions = [
    {
      icon: Bot,
      title: "Lead Qualification Agents",
      description: "Filter and prioritize prospects automatically",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageSquare,
      title: "Intelligent Chatbots",
      description: "Customer support automation that feels human",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FileText,
      title: "AI-Powered Generators",
      description: "Automated invoice & report creation",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Search,
      title: "RAG Knowledge Assistants",
      description: "Instant access to your company knowledge",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Seamless integration with n8n, Zapier, Make.com",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solutions" className="py-12 md:py-24 bg-gradient-to-b from-background to-primary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-primary animate-spin" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-foreground">Your New </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Teammate
              </span>
              <span className="text-foreground"> Is Ready</span>
            </h2>
            <Sparkles className="w-8 h-8 text-primary animate-spin" />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            At <span className="font-semibold text-primary">AgenticAiAgentsAgency</span>, we don't just build tools — we design AI agents that slot seamlessly into your operations and work alongside your team.
          </p>
        </div>

        {/* Whether You Need Section */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Whether you need:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="group bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-6 md:p-8 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {solution.title}
                    </h4>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="mt-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CheckCircle className="w-5 h-5 text-primary mr-2" />
                      <span className="text-sm text-primary font-medium">Custom Built for You</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Value Proposition */}
        {/* <div className="text-center mb-12 md:mb-16">
          <div className="bg-gradient-card border border-primary/20 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                …we'll design and integrate your{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">
                  custom AI teammate
                </span>{" "}
                to save time, cut costs, and unlock growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <span className="font-semibold text-foreground">Save Time</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="font-semibold text-foreground">Cut Costs</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 text-purple-500" />
                  </div>
                  <span className="font-semibold text-foreground">Unlock Growth</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 animate-pulse"></div>
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Ready to Meet Your AI Teammate?
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stop drowning in repetitive tasks. Get a custom AI agent built specifically for your business needs.
              </p>
              
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-gradient-primary hover:shadow-orange text-primary-foreground font-bold text-lg px-8 py-6 h-auto group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Bot className="w-6 h-6" />
                  Get My Custom AI Agent
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 group-hover:from-primary/90 group-hover:to-primary transition-all duration-300"></div>
              </Button>
              
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span>24-hour response</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                  <span>Custom built solution</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-400"></div>
                  <span>Working demo included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionValueProp;
