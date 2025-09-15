const PartnersSection = () => {
  return (
    <section id="partners" className="relative py-16 md:py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-xs uppercase tracking-wider text-white/50 mb-8">Trusted by Industry Leaders</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-70">
          <div className="glass-gradient px-6 py-3 rounded-full border border-white/10 text-white text-sm font-medium">
            ServiceNow
          </div>
          <div className="glass-gradient px-6 py-3 rounded-full border border-white/10 text-white text-sm font-medium">
            Salesforce
          </div>
          <div className="glass-gradient px-6 py-3 rounded-full border border-white/10 text-white text-sm font-medium">
            Power BI
          </div>
          <div className="glass-gradient px-6 py-3 rounded-full border border-white/10 text-white text-sm font-medium">
            Tableau
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
