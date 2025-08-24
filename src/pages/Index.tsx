import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Tools from "@/components/Tools";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <Tools />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
