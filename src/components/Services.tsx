import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, MessageSquare, FileText, Workflow, Users, Zap } from "lucide-react";
import servicesImage from "@/assets/ai-services.jpg";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Custom AI Agents",
      description: "Intelligent agents built specifically for your business processes, automating complex workflows and decision-making.",
      features: ["RAG Models", "Process Automation", "Intelligent Decision Making"]
    },
    {
      icon: MessageSquare,
      title: "Website Chatbots",
      description: "Advanced conversational AI that handles customer inquiries, lead qualification, and support with human-like understanding.",
      features: ["Natural Language Processing", "Lead Qualification", "24/7 Support"]
    },
    {
      icon: FileText,
      title: "Invoice Generation",
      description: "Automated invoice creation, processing, and management systems that eliminate manual data entry and reduce errors.",
      features: ["Automated Processing", "Error Reduction", "Integration Ready"]
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "End-to-end business process automation using cutting-edge tools like n8n, Make.com, and Zapier integrations.",
      features: ["Multi-platform Integration", "Custom Triggers", "Scalable Solutions"]
    },
    {
      icon: Users,
      title: "Agency Partnerships",
      description: "White-label AI solutions for digital marketing agencies. We become your AI development team seamlessly.",
      features: ["White-label Services", "Seamless Integration", "Partner Support"]
    },
    {
      icon: Zap,
      title: "AI Strategy Consulting",
      description: "Strategic guidance on implementing AI solutions that actually move your business metrics forward.",
      features: ["Strategic Planning", "ROI Optimization", "Implementation Roadmap"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-card relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={servicesImage} 
          alt="AI Services Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Solutions
            </span>
            <span className="text-foreground"> That Drive Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intelligent chatbots to complex workflow automation, we build AI solutions 
            that solve real problems and deliver measurable business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-orange group"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;