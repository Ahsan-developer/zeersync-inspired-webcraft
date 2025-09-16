import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    // Initialize particles.js with delay to ensure script loads
    const timer = setTimeout(() => {
      console.log('Checking for particlesJS:', (window as any).particlesJS);
      if ((window as any).particlesJS) {
        console.log('Initializing particles...');
        (window as any).particlesJS("particles-js", {
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 2,
                color: "#ffffff"
              }
            },
            opacity: {
              value: 0.3,
              random: true
            },
            size: {
              value: 2,
              random: true
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true
        });
      } else {
        console.log('particlesJS not found');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Particles Background */}
      <div id="particles-js" className="absolute inset-0 z-[1]" style={{ minHeight: '100vh' }}></div>
      
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 hero-gradient z-0 opacity-80 pointer-events-none"></div>
      
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 opacity-20 z-[2] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 premium-gradient rounded-full floating-animation blur-xl opacity-60"></div>
      <div className="absolute top-40 right-20 w-24 h-24 accent-gradient rounded-full floating-animation blur-lg opacity-40" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 glass-gradient rounded-full floating-animation sparkle-animation" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-60 right-40 w-12 h-12 bg-primary/40 rounded-full floating-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-60 right-60 w-20 h-20 premium-gradient rounded-full floating-animation blur-lg opacity-30" style={{ animationDelay: '3s' }}></div>
      
      {/* Split Layout Container */}
      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-white space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight fade-in-up">
              Digital
              <span className="block gradient-text drop-shadow-2xl">
                Innovation
              </span>
              <span className="block text-accent">
                Redefined
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl fade-in-up stagger-1 leading-relaxed">
              Transform your business with cutting-edge AI solutions, custom software development, and innovative technology services that drive exponential growth.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up stagger-2">
            <Button 
              variant="premium"
              size="lg" 
              className="group shadow-glow hover:shadow-premium transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="glass" 
              size="lg"
              className="transition-all duration-300 group hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
          
        </div>
        
        {/* Right Visual Element */}
        <div className="relative lg:block hidden">
          <div className="relative">
            {/* Main Visual Card */}
            <div className="glass-gradient p-8 rounded-3xl shadow-premium border border-white/10 backdrop-blur-xl fade-in-up stagger-1">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 premium-gradient rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">AI-Powered Solutions</h3>
                    <p className="text-white/60 text-sm">Next-gen technology</p>
                  </div>
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/80">Performance</span>
                      <span className="text-accent">98%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full accent-gradient w-[98%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/80">Security</span>
                      <span className="text-primary">100%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full premium-gradient w-full rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-white/80">Innovation</span>
                      <span className="text-accent">95%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full accent-gradient w-[95%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 glass-gradient p-4 rounded-2xl border border-white/10 backdrop-blur-xl sparkle-animation">
              <div className="text-2xl">🚀</div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-gradient p-4 rounded-2xl border border-white/10 backdrop-blur-xl floating-animation">
              <div className="text-2xl">⚡</div>
            </div>
          </div>
        </div>
      </div>
      
      
      {/* Enhanced Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-24">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--background))" />
              <stop offset="50%" stopColor="hsl(var(--card))" />
              <stop offset="100%" stopColor="hsl(var(--background))" />
            </linearGradient>
          </defs>
          <path 
            d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" 
            fill="url(#waveGradient)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;