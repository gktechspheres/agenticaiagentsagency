import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Zap, Brain, Workflow, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    problem: "",
    email: "",
    name: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNext = () => {
    if (currentStep === 1 && !formData.problem.trim()) {
      toast({
        title: "Please describe your challenge",
        description: "Tell us what business bottleneck you're facing.",
        variant: "destructive",
      });
      return;
    }
    if (currentStep === 2 && !formData.email.trim()) {
      toast({
        title: "Email required",
        description: "We need your email to send you the AI solution.",
        variant: "destructive",
      });
      return;
    }
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async () => {
    if (!formData.name.trim()) {
      toast({
        title: "Name required",
        description: "Please tell us your name to complete the submission.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Using EmailJS to send email directly from frontend
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_029tucm', // You'll need to set this up in EmailJS
          template_id: 'template_o096bew', // You'll need to set this up in EmailJS
          user_id: '1JFLXrQHN3n8CUm2W', // You'll need to get this from EmailJS
          template_params: {
            to_email: 'gktechspheres@gmail.com',
            from_name: formData.name,
            from_email: formData.email,
            message: formData.problem,
            subject: 'New AI Agent Inquiry from Hero Form - ' + formData.name,
          }
        })
      });

      if (response.ok) {
        toast({
          title: "🚀 Your AI Solution is Coming!",
          description: "We'll analyze your challenge and reach out with a custom AI workflow within 24 hours.",
        });
        setFormData({ problem: "", email: "", name: "" });
        setCurrentStep(1);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      // Fallback: Create mailto link
      const subject = encodeURIComponent('AI Solution Request from Hero Form - ' + formData.name);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Business Challenge:\n${formData.problem}`
      );
      const mailtoLink = `mailto:gktechspheres@gmail.com?subject=${subject}&body=${body}`;

      window.open(mailtoLink, '_blank');

      toast({
        title: "Email Client Opened",
        description: "Please send the email from your email client to complete your request.",
      });

      setFormData({ problem: "", email: "", name: "" });
      setCurrentStep(1);
    }

    setIsSubmitting(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (currentStep < 3) {
        handleNext();
      } else {
        handleSubmit();
      }
    }
  };

  return (
    <section id="hero" className="relative flex justify-center overflow-hidden bg-background py-8 md:py-0">
      {/* CSS Grid Background */}
      <div className="hero-grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95 z-0 pointer-events-none" />

      {/* Floating Elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-10 animate-bounce">
        <div className="bg-card/20 backdrop-blur-sm rounded-full p-4 border border-border/30">
          <Brain className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="hidden md:block absolute top-40 right-20 animate-bounce delay-1000">
        <div className="bg-card/20 backdrop-blur-sm rounded-full p-4 border border-border/30">
          <Workflow className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className="hidden md:block absolute bottom-32 left-20 animate-bounce delay-500">
        <div className="bg-card/20 backdrop-blur-sm rounded-full p-4 border border-border/30">
          <Zap className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center pt-10 md:pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-foreground">
              Tell Us Your Biggest Business Bottleneck — <span className="bg-gradient-primary bg-clip-text text-transparent">
                We'll Build the AI Teammate to Solve It
              </span>
            </span>

          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
            Don’t waste another week on repetitive tasks, missed leads, or slow operations.
            Share your #1 challenge below, and our team will design a custom AI solution tailored to your workflow.
          </p>

          {/* Step Indicator */}
              <div className="flex justify-center items-center mt-4 mb-4 md:mb-6">
                <div className="flex items-center space-x-2 md:space-x-4">
                  <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold ${currentStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                    1
                  </div>
                  <div className={`w-8 md:w-12 h-1 ${currentStep >= 2 ? 'bg-primary' : 'bg-muted'}`}></div>
                  <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold ${currentStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                    2
                  </div>
                  <div className={`w-8 md:w-12 h-1 ${currentStep >= 3 ? 'bg-primary' : 'bg-muted'}`}></div>
                  <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold ${currentStep >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                    3
                  </div>
                </div>
              </div>

          {/* Multi-Step Form */}
          <div className="max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-8">
            <div className="bg-card/20 backdrop-blur-sm border border-border/30 rounded-2xl p-4 md:p-8">

              {/* Step 1: Problem */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                    What's your biggest business challenge?
                  </h3>
                  <Textarea
                    placeholder="E.g. We spend 10+ hours a week on manual reporting..."
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    onKeyPress={handleKeyPress}
                    rows={3}
                    className="bg-background/50 border-2 border-primary/50 focus:border-primary transition-colors text-sm md:text-base py-3 md:py-4"
                  />
                  <Button
                    onClick={handleNext}
                    className="w-full text-base md:text-lg py-3 md:py-4 h-auto"
                    disabled={!formData.problem.trim()}
                  >
                    Next Step
                    <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </div>
              )}

              {/* Step 2: Email */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                    Where should we send your AI solution?
                  </h3>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onKeyPress={handleKeyPress}
                    className="bg-background/50 border-2 border-primary/50 focus:border-primary transition-colors text-sm md:text-base py-3 md:py-4"
                  />
                  <Button
                    onClick={handleNext}
                    className="w-full text-base md:text-lg py-3 md:py-4 h-auto"
                    disabled={!formData.email.trim()}
                  >
                    Next Step
                    <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </div>
              )}

              {/* Step 3: Name */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                    What's your name?
                  </h3>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onKeyPress={handleKeyPress}
                    className="bg-background/50 border-2 border-primary/50 focus:border-primary transition-colors text-sm md:text-base py-3 md:py-4"
                  />
                  <Button
                    onClick={handleSubmit}
                    className="w-full text-base md:text-lg py-3 md:py-4 h-auto"
                    disabled={!formData.name.trim() || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-background mr-2"></div>
                        Building Your Solution...
                      </>
                    ) : (
                      <>
                        Show Me My AI Solution
                        <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                      </>
                    )}
                  </Button>
                </div>
              )}

              {/* Progress Text */}
              <p className="text-xs md:text-sm text-muted-foreground text-center mt-3 md:mt-4">
                {currentStep === 1 && "Step 1 of 3: Describe your challenge"}
                {currentStep === 2 && "Step 2 of 3: Provide your email"}
                {currentStep === 3 && "Step 3 of 3: Tell us your name"}
              </p>

              

            </div>
          </div>

          {/* Trust Indicators */}
          {/* <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-muted-foreground text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>24-Hour Response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200"></div>
              <span>Custom AI Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-400"></div>
              <span>Working Demo</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;