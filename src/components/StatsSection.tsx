const StatsSection = () => {
  return (
    <section id="stats" className="relative py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-2xl md:text-4xl font-bold gradient-text">500+</div>
            <div className="text-white/60 text-sm">Projects</div>
          </div>
          <div>
            <div className="text-2xl md:text-4xl font-bold gradient-text">99%</div>
            <div className="text-white/60 text-sm">Success Rate</div>
          </div>
          <div>
            <div className="text-2xl md:text-4xl font-bold gradient-text">24/7</div>
            <div className="text-white/60 text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
