export default function Credibility() {
  const partners = [
    { name: "FDFP", description: "Formateur Agréé" },
    { name: "CNDH-CI", description: "Conseil National des Droits de l'Homme" },
    { name: "Barreau de Côte d'Ivoire", description: "Avocat inscrit" },
    { name: "UNESCO", description: "Intervenant" },
  ];

  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-matte/70 mb-8">
          Ils me font confiance
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
          {partners.map((p) => (
            <div key={p.name} className="flex flex-col items-center gap-1">
              <span className="text-white font-serif text-xl">{p.name}</span>
              <span className="text-xs text-silver/50">{p.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}