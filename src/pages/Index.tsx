import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import ProblemAmplify from "@/components/ProblemAmplify";
import SolutionValueProp from "@/components/SolutionValueProp";
import ValueProposition from "@/components/ValueProposition";
import SocialProof from "@/components/SocialProof";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      {/* <Tools /> */}
      <ProblemAmplify />
      <SolutionValueProp />
      <ValueProposition />
      <SocialProof />
      <Process />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
