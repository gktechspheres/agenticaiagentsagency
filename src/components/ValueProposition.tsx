import { CheckCircle, Clock, TrendingDown, Zap, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ValueProposition = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Hours Every Week",
      description: "Automate repetitive workflows and free up your time for high-value activities that grow your business.",
      color: "text-blue-500"
    },
    {
      icon: TrendingDown,
      title: "Reduce Costs & Scale Faster",
      description: "Lower operational expenses while increasing capacity to handle more customers and projects.",
      color: "text-green-500"
    },
    {
      icon: Zap,
      title: "Increase Efficiency",
      description: "Eliminate bottlenecks and streamline processes for maximum productivity and smoother operations.",
      color: "text-yellow-500"
    },
    {
      icon: Target,
      title: "Stay Competitive",
      description: "Integrate cutting-edge AI into your team and maintain your competitive edge in the market.",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
             Value We Provide
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Unlock unparalleled efficiency and future-proof your operations with AI agents 
            that feel like part of your team, not just a tool.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            >
              <CardContent className="p-6 md:p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-${benefit.color.split('-')[1]}-500/20 to-${benefit.color.split('-')[1]}-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {benefit.description}
                </p>
                
                <div className="mt-6 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-card border border-border/50 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Join forward-thinking companies who have already integrated AI agents into their workflow.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-muted-foreground">24/7 AI Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                  <span className="text-muted-foreground">Instant Implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-400"></div>
                  <span className="text-muted-foreground">Measurable Results</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ValueProposition;
