import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Sparkles } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    problem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.problem) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
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
            subject: 'New AI Agent Inquiry from ' + formData.name,
          }
        })
      });

      if (response.ok) {
        toast({
          title: "🎉 Your AI Solution is Coming!",
          description: "We'll analyze your needs and reach out with a custom AI workflow within 24 hours.",
        });
        setFormData({ name: "", email: "", problem: "" });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      // Fallback: Create mailto link
      const subject = encodeURIComponent('New AI Agent Inquiry from ' + formData.name);
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Problem Description:\n${formData.problem}`
      );
      const mailtoLink = `mailto:gktechspheres@gmail.com?subject=${subject}&body=${body}`;
      
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Email Client Opened",
        description: "Please send the email from your email client to complete your request.",
      });
      
      setFormData({ name: "", email: "", problem: "" });
    }

    setIsSubmitting(false);
  };

  const isFormValid = formData.name && formData.email && formData.problem;

  return (
    <section id="contact-form" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Get Your Custom
                </span>
                <span className="text-foreground"> AI Solution</span>
              </h2>
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us your challenge, and our team at <span className="text-primary font-semibold">AgenticAIAgentsAgency</span> will build you a working AI solution. 
              No generic tools—only custom AI that solves your exact problem.
            </p>
          </div>

          {/* Form Card */}
          <Card className="bg-gradient-card border-border/50 shadow-orange backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-foreground">
                Describe Your Challenge
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                We'll analyze your needs and deliver a tailored AI solution within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="problem" className="text-foreground font-medium">
                    What problem do you want AI to solve? <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="problem"
                    name="problem"
                    placeholder="Describe your repetitive tasks, workflow challenges, or specific automation needs. The more detail you provide, the better we can tailor your solution..."
                    value={formData.problem}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-input/50 border-border/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full text-lg py-6 h-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background mr-2"></div>
                      Building Your Solution...
                    </>
                  ) : (
                    <>
                      Get My Custom AI Agent
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  🚀 We'll reach out within 24 hours with a working demo tailored to your needs
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Trust Badge */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-card/20 backdrop-blur-sm border border-border/50 rounded-full px-6 py-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Custom solutions only</span>
              </div>
              <div className="w-px h-4 bg-border/50"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-200"></div>
                <span className="text-sm text-muted-foreground">24-hour response</span>
              </div>
              <div className="w-px h-4 bg-border/50"></div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-400"></div>
                <span className="text-sm text-muted-foreground">Working demo included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;