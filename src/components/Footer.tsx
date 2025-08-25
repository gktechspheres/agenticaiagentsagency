import { Bot, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <Bot className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">AgenticAIAgentsAgency</span>
            </div>
            <p className="text-muted-foreground">
              Building intelligent AI agents and workflows that solve real business problems 
              and drive measurable results for your business growth.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Our Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Custom AI Agents</li>
              <li>Website Chatbots</li>
              <li>Invoice Automation</li>
              <li>Workflow Integration</li>
              <li>Agency Partnerships</li>
              <li>AI Strategy Consulting</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>gktechspheres@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 9392576089</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 8309341150</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 AgenticAIAgentsAgency. Building the future with intelligent AI automation solutions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;