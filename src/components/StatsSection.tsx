const StatsSection = () => {
  return (
    <section id="stats" className="relative py-12 md:py-16 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--accent) / 0.4) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-6 right-20 w-16 h-16 premium-gradient rounded-full blur-lg opacity-40 floating-animation"></div>
      <div className="absolute bottom-6 left-20 w-20 h-20 accent-gradient rounded-full blur-xl opacity-30 floating-animation" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold gradient-text mb-4">Our Impact</h2>
          <p className="text-white/60 text-sm md:text-base">Delivering Excellence Through Numbers</p>
        </div>
        
        <div className="grid grid-cols-3 gap-6 md:gap-12 text-center">
          <div className="fade-in-up stagger-1 group">
            <div className="text-3xl md:text-5xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">500+</div>
            <div className="text-white/60 text-sm md:text-base mt-2">Projects</div>
          </div>
          <div className="fade-in-up stagger-2 group">
            <div className="text-3xl md:text-5xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">99%</div>
            <div className="text-white/60 text-sm md:text-base mt-2">Success Rate</div>
          </div>
          <div className="fade-in-up stagger-3 group">
            <div className="text-3xl md:text-5xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">24/7</div>
            <div className="text-white/60 text-sm md:text-base mt-2">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
