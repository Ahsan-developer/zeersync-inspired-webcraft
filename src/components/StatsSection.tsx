const StatsSection = () => {
  return (
    <section id="stats" className="relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 gap-8 md:gap-12 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-5xl font-bold gradient-text">500+</div>
            <div className="text-white/60 text-sm md:text-base">Projects</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-5xl font-bold gradient-text">99%</div>
            <div className="text-white/60 text-sm md:text-base">Success Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-5xl font-bold gradient-text">24/7</div>
            <div className="text-white/60 text-sm md:text-base">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
