export default function Credibility() {
  const partners = [
    {
      name: "CNDH-CI",
      description: "Conseil National des Droits de l'Homme",
    },
    {
      name: "FDFP",
      description: "Fonds de Développement de la Formation Professionnelle",
    },
    {
      name: "CÉGEP de Trois-Rivières",
      description: "Partenaire Cabinet Canadien",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-gold-matte/70 mb-8">
          Institutions de référence
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map((partner, idx) => (
            <div key={partner.name} className="flex items-center gap-x-10">
              <div className="flex flex-col items-center gap-2 px-6 py-4 border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-[#C5A880]/20 transition-colors duration-300">
                <span className="text-white font-serif text-xl tracking-wider">
                  {partner.name}
                </span>
                <span className="text-xs text-silver/40 font-medium">
                  {partner.description}
                </span>
              </div>

              {idx !== partners.length - 1 && (
                <div className="hidden sm:block w-[1px] h-10 bg-gradient-to-b from-transparent via-[#C5A880]/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}