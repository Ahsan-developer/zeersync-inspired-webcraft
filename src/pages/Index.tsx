import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThreeJSLOD from "@/components/ThreeJSLOD";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ThreeJSLOD />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
