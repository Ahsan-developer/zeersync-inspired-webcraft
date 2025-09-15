const PartnersSection = () => {
  return (
    <section id="partners" className="relative py-4 md:py-6">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-wider text-white/50 mb-3">Trusted by Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 opacity-60">
          <div className="glass-gradient px-3.5 py-1.5 rounded-full border border-white/10 text-white text-sm font-medium">
            ServiceNow
          </div>
          <div className="glass-gradient px-3.5 py-1.5 rounded-full border border-white/10 text-white text-sm font-medium">
            Salesforce
          </div>
          <div className="glass-gradient px-3.5 py-1.5 rounded-full border border-white/10 text-white text-sm font-medium">
            Power BI
          </div>
          <div className="glass-gradient px-3.5 py-1.5 rounded-full border border-white/10 text-white text-sm font-medium">
            Tableau
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
