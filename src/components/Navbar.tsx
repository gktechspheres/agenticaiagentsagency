import { useState, useEffect } from "react";
import { Menu, X, Bot, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Problems", id: "problems" },
    { label: "Solutions", id: "solutions" },
    { label: "Value", id: "value" },
    { label: "Process", id: "process" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="absolute -inset-1 bg-gradient-primary rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
              <div className="">
                <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  AgenticAI <p className="text-xs text-muted-foreground -mt-1">Agents Agency</p>
                </h1>
                
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground/80 hover:text-foreground font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold px-6 py-2 rounded-full group transition-all duration-300"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center hover:bg-muted transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="bg-background/95 backdrop-blur-lg border-t border-border/50">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground/80 hover:text-foreground font-medium py-2 transition-colors duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-6 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item.label}
                    </div>
                  </button>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-border/50">
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold py-3 rounded-full group"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    <span>Get Started Free</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;
