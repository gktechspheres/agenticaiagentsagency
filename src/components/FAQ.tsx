import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What exactly is an AI agent, and how is it different from a chatbot?",
      answer: "An AI agent goes beyond simple chat responses. It can perform actions, connect to your tools (CRM, email, project management, marketing automation), and work as a teammate handling tasks end-to-end — not just answering questions."
    },
    {
      question: "How do I know if AI agents are right for my business?",
      answer: "If your team spends too much time on repetitive tasks like lead qualification, reporting, customer support, or data entry, an AI agent can save you hours weekly. We design each agent customized to your workflow, so it fits exactly where you need it most."
    },
    {
      question: "What tools and technologies do you use?",
      answer: "We work with trusted platforms like OpenAI, Claude, Gemini, Zapier, n8n, and Make.com. This ensures your AI agents are scalable, secure, and future-proof."
    },
    {
      question: "Will my team need technical expertise to use the AI agents?",
      answer: "No. Our agents are designed to run seamlessly in the background or with simple interfaces. We handle setup, integration, and training — so your team can focus on growth, not tech headaches."
    },
    {
      question: "Can you integrate AI agents into our existing tools and workflows?",
      answer: "Yes. We specialize in integrating with the tools you already use — whether that's CRMs like HubSpot, project tools like ClickUp, or marketing platforms. The goal: zero disruption, maximum automation."
    },
    {
      question: "What kind of results can we expect?",
      answer: "Clients typically save 20+ hours per week, increase lead response speed, and boost operational efficiency by up to 40%. Actual results depend on your workflow, but our focus is always on measurable business impact."
    },
    {
      question: "How does pricing work?",
      answer: "Since every AI agent is custom-built, pricing depends on your needs and complexity. We'll provide a transparent proposal after understanding your challenges. (Most clients see ROI within the first 30–60 days of implementation.)"
    },
    {
      question: "Do you offer white-label services for agencies?",
      answer: "Yes. We partner with digital marketing agencies to deliver AI-powered solutions under their brand name. You keep the client relationship — we do the heavy lifting behind the scenes."
    },
    {
      question: "What's the process to get started?",
      answer: "Simple: Share your challenges in our quick contact form → We design a tailored AI solution → We integrate it into your workflow and train your team → In weeks, you'll have an AI teammate working alongside you."
    },
    {
      question: "What if it doesn't work for us?",
      answer: "Our process is designed to minimize risk. We start small, validate quickly, and iterate until your AI agent delivers results. Think of it as building a scalable teammate you can trust."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-foreground">❓ Frequently Asked </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about AI agents and how they can transform your business operations.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-background border border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between hover:bg-muted/20 transition-colors duration-200"
                >
                  <h3 className="text-base md:text-lg font-semibold text-foreground pr-4 leading-relaxed">
                    Q{index + 1}. {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="border-t border-border/30 pt-4 md:pt-6">
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-gradient-card border border-border/50 rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a free consultation to discuss your specific needs and see how AI agents can transform your business.
            </p>
            <button 
              onClick={() => {
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                  contactForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-base"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
