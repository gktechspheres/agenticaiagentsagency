import { CheckCircle, MessageCircle, Cog, Zap, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      icon: MessageCircle,
      title: "Tell Us Your Problem",
      description: "Share your business challenges and automation needs. We analyze your workflow to identify the perfect AI solution.",
      details: ["Problem Analysis", "Workflow Assessment", "Solution Planning"]
    },
    {
      icon: Cog,
      title: "We Build the AI Agent",
      description: "Our experts develop custom AI agents tailored to your specific requirements using cutting-edge technologies.",
      details: ["Custom Development", "AI Model Training", "Quality Testing"]
    },
    {
      icon: Zap,
      title: "Integrate into Your Workflow",
      description: "Seamless integration with your existing systems and platforms for immediate productivity gains.",
      details: ["System Integration", "User Training", "Performance Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Get the Results",
      description: "Experience improved efficiency, reduced costs, and automated processes that scale with your business.",
      details: ["Monitoring & Support", "Performance Analytics", "Continuous Improvement"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = document.querySelectorAll('.timeline-step');
      let currentActiveStep = 0;

      stepElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const windowCenter = window.innerHeight / 2;

        if (elementCenter <= windowCenter) {
          currentActiveStep = index;
        }
      });

      setActiveStep(currentActiveStep);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="process-section" className="py-12 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to implementation, we follow a proven process that ensures 
            your AI solution delivers real business value from day one.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full">
            <div 
              className="w-full bg-gradient-to-b from-primary to-primary/60 transition-all duration-1000 ease-out"
              style={{ 
                height: `${((activeStep + 1) / processSteps.length) * 100}%`,
                boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
              }}
            />
          </div>

          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 top-0 w-1 bg-border h-full">
            <div 
              className="w-full bg-gradient-to-b from-primary to-primary/60 transition-all duration-1000 ease-out"
              style={{ 
                height: `${((activeStep + 1) / processSteps.length) * 100}%`,
                boxShadow: '0 0 20px hsl(var(--primary) / 0.3)'
              }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-16 md:space-y-32">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="timeline-step relative transition-all duration-700 ease-out"
              >
                {/* Mobile Layout - Always Left Aligned */}
                <div className="block md:hidden">
                  <div className="flex items-start gap-6">
                    {/* Mobile Timeline Node */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-full border-4 border-background flex items-center justify-center transition-all duration-500 ${
                          index <= activeStep
                            ? 'bg-primary text-primary-foreground scale-110 shadow-lg'
                            : 'bg-muted text-muted-foreground scale-100'
                        }`}
                        style={{
                          boxShadow: index <= activeStep 
                            ? '0 0 30px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--primary) / 0.2)' 
                            : 'none'
                        }}
                      >
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                    </div>

                    {/* Mobile Content Card */}
                    <div className="flex-1">
                      <div
                        className={`bg-card border rounded-2xl p-6 shadow-xl transition-all duration-700 ease-out transform ${
                          index <= activeStep
                            ? 'opacity-100 scale-100 translate-y-0 border-primary/20 shadow-2xl'
                            : 'opacity-60 scale-95 translate-y-4 border-border/50'
                        }`}
                        style={{
                          background: index <= activeStep 
                            ? 'linear-gradient(135deg, hsl(var(--card)), hsl(var(--card)/0.9))' 
                            : 'hsl(var(--card)/0.8)',
                          boxShadow: index <= activeStep 
                            ? '0 20px 40px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px hsl(var(--primary) / 0.1)' 
                            : '0 8px 20px -5px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`rounded-full p-2 transition-all duration-500 ${
                            index <= activeStep 
                              ? 'bg-primary text-primary-foreground scale-110' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            <step.icon className="w-5 h-5" />
                          </div>
                          <h3 className={`text-xl font-bold transition-colors duration-500 ${
                            index <= activeStep ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {step.title}
                          </h3>
                        </div>
                        
                        <p className={`text-base mb-4 leading-relaxed transition-colors duration-500 ${
                          index <= activeStep ? 'text-muted-foreground' : 'text-muted-foreground/60'
                        }`}>
                          {step.description}
                        </p>
                        
                        <div className="space-y-2">
                          {step.details.map((detail, detailIdx) => (
                            <div 
                              key={detailIdx}
                              className={`flex items-center gap-2 transition-all duration-500 ${
                                index <= activeStep 
                                  ? 'opacity-100 translate-x-0' 
                                  : 'opacity-60 translate-x-2'
                              }`}
                              style={{ transitionDelay: `${detailIdx * 100}ms` }}
                            >
                              <CheckCircle className={`w-4 h-4 transition-colors duration-500 ${
                                index <= activeStep ? 'text-primary' : 'text-muted-foreground/40'
                              }`} />
                              <span className={`text-sm font-medium transition-colors duration-500 ${
                                index <= activeStep ? 'text-foreground' : 'text-muted-foreground/60'
                              }`}>
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - Alternating Left/Right */}
                <div className={`hidden md:flex md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Step Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                    <div
                      className={`bg-card border rounded-3xl p-8 shadow-xl transition-all duration-700 ease-out transform ${
                        index <= activeStep
                          ? 'opacity-100 scale-100 translate-y-0 border-primary/20 shadow-2xl'
                          : 'opacity-60 scale-95 translate-y-8 border-border/50'
                      }`}
                      style={{
                        background: index <= activeStep 
                          ? 'linear-gradient(135deg, hsl(var(--card)), hsl(var(--card)/0.9))' 
                          : 'hsl(var(--card)/0.8)',
                        boxShadow: index <= activeStep 
                          ? '0 25px 50px -12px rgba(0, 0, 0, 0.3), 0 0 0 1px hsl(var(--primary) / 0.1)' 
                          : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`rounded-full p-3 transition-all duration-500 ${
                          index <= activeStep 
                            ? 'bg-primary text-primary-foreground scale-110' 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          <step.icon className="w-6 h-6" />
                        </div>
                        <h3 className={`text-2xl font-bold transition-colors duration-500 ${
                          index <= activeStep ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className={`text-lg mb-6 leading-relaxed transition-colors duration-500 ${
                        index <= activeStep ? 'text-muted-foreground' : 'text-muted-foreground/60'
                      }`}>
                        {step.description}
                      </p>
                      
                      <div className="space-y-3">
                        {step.details.map((detail, detailIdx) => (
                          <div 
                            key={detailIdx}
                            className={`flex items-center gap-3 transition-all duration-500 ${
                              index <= activeStep 
                                ? 'opacity-100 translate-x-0' 
                                : 'opacity-60 translate-x-2'
                            }`}
                            style={{ transitionDelay: `${detailIdx * 100}ms` }}
                          >
                            <CheckCircle className={`w-5 h-5 transition-colors duration-500 ${
                              index <= activeStep ? 'text-primary' : 'text-muted-foreground/40'
                            }`} />
                            <span className={`font-medium transition-colors duration-500 ${
                              index <= activeStep ? 'text-foreground' : 'text-muted-foreground/60'
                            }`}>
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Desktop Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-16 h-16 rounded-full border-4 border-background flex items-center justify-center transition-all duration-500 ${
                        index <= activeStep
                          ? 'bg-primary text-primary-foreground scale-110 shadow-lg'
                          : 'bg-muted text-muted-foreground scale-100'
                      }`}
                      style={{
                        boxShadow: index <= activeStep 
                          ? '0 0 30px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--primary) / 0.2)' 
                          : 'none'
                      }}
                    >
                      <span className="text-xl font-bold">{index + 1}</span>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-12 md:mt-16 gap-2 md:gap-3">
          {processSteps.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 md:h-2 rounded-full transition-all duration-500 ${
                index <= activeStep 
                  ? 'w-8 md:w-12 bg-primary' 
                  : 'w-6 md:w-8 bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;