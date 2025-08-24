import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Workflow } from "lucide-react";
import heroImage from "@/assets/hero-ai-automation.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Automation Technology" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="bg-card/20 backdrop-blur-sm rounded-full p-4 border border-border/30">
          <Brain className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-bounce delay-1000">
        <div className="bg-card/20 backdrop-blur-sm rounded-full p-4 border border-border/30">
          <Workflow className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce delay-500">
        <div className="bg-card/20 backdrop-blur-sm rounded-full p-4 border border-border/30">
          <Zap className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Agents
            </span>
            <br />
            <span className="text-foreground">
              That Actually Work
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We build custom AI workflows and intelligent agents that automate your repetitive tasks, 
            streamline operations, and solve real business problems. No generic solutions—only 
            tailored AI that fits your exact needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToForm}
              className="text-lg px-8 py-6 h-auto"
            >
              Get Your Custom AI Agent
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="glass" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
            >
              View Our Solutions
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>RAG Models</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200"></div>
              <span>Chatbots</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-400"></div>
              <span>Invoice Automation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-600"></div>
              <span>Custom Workflows</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;