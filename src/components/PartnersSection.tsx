const PartnersSection = () => {
  return (
    <section id="partners" className="relative py-8 md:py-12">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-wider text-white/50 mb-6">Trusted by Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 opacity-60">
          <div className="glass-gradient px-4 py-2 rounded-full border border-white/10 text-white text-sm font-medium">
            ServiceNow
          </div>
          <div className="glass-gradient px-4 py-2 rounded-full border border-white/10 text-white text-sm font-medium">
            Salesforce
          </div>
          <div className="glass-gradient px-4 py-2 rounded-full border border-white/10 text-white text-sm font-medium">
            Power BI
          </div>
          <div className="glass-gradient px-4 py-2 rounded-full border border-white/10 text-white text-sm font-medium">
            Tableau
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
