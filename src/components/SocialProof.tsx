import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const SocialProof = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "We saved 25+ hours per week. Our sales team now focuses only on hot leads — game changer.",
      author: "Marketing Agency Owner",
      company: "Digital Growth Co.",
      rating: 5,
    },
    {
      quote: "AgenticAiAgentsAgency automated our reporting. What took 3 hours daily now runs in 3 minutes.",
      author: "SaaS Founder", 
      company: "TechStart Solutions",
      rating: 5,
    },
    {
      quote: "The AI workflows they built scale with our growth. We're processing 3x more leads with the same team.",
      author: "E-commerce Director",
      company: "RetailPro Inc.",
      rating: 5,
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const trustLogos = [
    { name: "OpenAI", logo: "/src/assets/logos/chatgpt.png" },
    { name: "Zapier", logo: "/src/assets/logos/zapier.png" },
    { name: "n8n", logo: "/src/assets/logos/n8n.png" },
    { name: "Supabase", logo: "/src/assets/logos/supabase.jpg" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-foreground">Trusted By </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Agencies & Business Owners
            </span>
            <br />
            <span className="text-foreground">Who Scale Smarter With AI</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-12 md:mb-16">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-background border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground hover:text-primary" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-background border border-border/50 hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground hover:text-primary" />
          </button>

          {/* Testimonial Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="relative bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                    <CardContent className="p-8 md:p-12 text-center">
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                        <Quote className="w-10 h-10 text-primary" />
                      </div>

                      {/* Star Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mx-1" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-foreground mb-8 text-lg md:text-xl leading-relaxed italic max-w-2xl mx-auto">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author */}
                      <div className="border-t border-border/30 pt-6">
                        <div className="font-semibold text-foreground text-base md:text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-muted-foreground text-sm md:text-base mt-1">
                          {testimonial.company}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary' 
                    : 'bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <h3 className="text-lg md:text-xl font-semibold text-muted-foreground mb-6 md:mb-8">
            Powered by industry-leading platforms
          </h3>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0"
              >
                <img 
                  src={logo.logo} 
                  alt={logo.name}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
