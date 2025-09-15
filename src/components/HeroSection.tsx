import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation sparkle-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary-glow/30 rounded-full floating-animation sparkle-animation" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-60 right-40 w-8 h-8 bg-primary/30 rounded-full floating-animation" style={{ animationDelay: '1s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
              Digital Innovation
              <span className="block gradient-text">
                Redefined
              </span>
            </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto fade-in-up stagger-1">
            Your trusted partner in digital transformation. We specialize in cutting-edge IT solutions, 
            custom software development, and innovative technology services that drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up stagger-2">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-elegant hover:shadow-glow transition-smooth group"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="hero" 
              size="lg"
              className="transition-smooth group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Partner Badges */}
        <div className="mt-16 fade-in-up stagger-3">
          <p className="text-white/70 mb-6 text-sm uppercase tracking-wide">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">ServiceNow</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">Salesforce</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">Power BI</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-white font-semibold">Tableau</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path 
            d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;