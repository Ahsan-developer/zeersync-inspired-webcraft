const PartnersSection = () => {
  return (
    <section id="partners" className="relative py-8 md:py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-24 h-24 premium-gradient rounded-full blur-xl opacity-30 floating-animation"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 accent-gradient rounded-full blur-2xl opacity-20 floating-animation" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center fade-in-up">
          <h2 className="text-lg md:text-xl font-semibold text-white mb-2">Trusted Partners</h2>
          <p className="text-xs uppercase tracking-wider text-white/50 mb-8">Industry Leaders We Work With</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 fade-in-up stagger-1">
          <div className="glass-gradient px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:scale-105 transition-all duration-300 hover:border-white/40">
            ServiceNow
          </div>
          <div className="glass-gradient px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:scale-105 transition-all duration-300 hover:border-white/40">
            Salesforce
          </div>
          <div className="glass-gradient px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:scale-105 transition-all duration-300 hover:border-white/40">
            Power BI
          </div>
          <div className="glass-gradient px-6 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:scale-105 transition-all duration-300 hover:border-white/40">
            Tableau
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
