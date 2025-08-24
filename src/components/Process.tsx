import { CheckCircle, MessageCircle, Cog, Zap, TrendingUp } from "lucide-react";
import { useState } from "react";

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

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to implementation, we follow a proven process that ensures 
            your AI solution delivers real business value from day one.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2">
              <div 
                className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                style={{ width: `${(activeStep + 1) * 25}%` }}
              />
            </div>

            {/* Timeline Steps */}
            <div className="grid grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    activeStep >= index ? 'opacity-100' : 'opacity-60'
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Step Circle */}
                  <div className={`w-16 h-16 mx-auto rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                    activeStep >= index 
                      ? 'border-primary bg-primary text-primary-foreground shadow-orange' 
                      : 'border-border bg-background text-muted-foreground'
                  }`}>
                    <step.icon className="w-6 h-6" />
                  </div>

                  {/* Step Content */}
                  <div className="mt-6 text-center">
                    <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                      activeStep >= index ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    
                    {/* Step Details */}
                    <div className={`space-y-1 transition-all duration-300 ${
                      activeStep === index ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}>
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    activeStep >= index 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6">
                {/* Timeline Line & Circle */}
                <div className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                    index <= activeStep 
                      ? 'border-primary bg-primary text-primary-foreground' 
                      : 'border-border bg-background text-muted-foreground'
                  }`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className={`w-0.5 h-16 mt-4 transition-all duration-300 ${
                      index < activeStep ? 'bg-primary' : 'bg-border'
                    }`} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                      index <= activeStep 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Auto-advance functionality */}
        <div className="hidden lg:block">
          <div className="flex justify-center mt-12 gap-2">
            {processSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index ? 'bg-primary' : 'bg-border hover:bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;