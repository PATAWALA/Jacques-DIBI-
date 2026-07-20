import Link from "next/link";
import { ArrowRight, Sparkles, Star } from "lucide-react";

const ebooks = [
  {
    title: "Guide pratique du droit des affaires OHADA",
    price: "14 900 FCFA",
    cover: "📘",
    tag: "Best-seller",
    description: "Maîtrisez les actes uniformes, les sûretés et le contentieux OHADA.",
  },
  {
    title: "Les clés de la prise de parole en public",
    price: "9 900 FCFA",
    cover: "🎤",
    tag: "Nouveauté",
    description: "Vaincre le trac, structurer un discours et captiver tout auditoire.",
  },
  {
    title: "Droits de l'Homme : le manuel du citoyen",
    price: "12 900 FCFA",
    cover: "⚖️",
    tag: "Engagement",
    description: "Synthèse des droits fondamentaux et mécanismes de protection.",
  },
];

export default function BoutiqueFlash() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
      {/* Lueur d'ambiance */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-[#C5A880]/3 via-transparent to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-[#C5A880]/60">
              E-books premium
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-white mt-4 font-bold">
              Mes ouvrages
            </h2>
          </div>
          <Link
            href="/boutique"
            className="hidden md:inline-flex items-center gap-2 text-[#C5A880] hover:text-white text-sm font-medium transition-colors group"
          >
            Voir la collection
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-3 gap-8">
          {ebooks.map((book, i) => (
            <div
              key={i}
              className="group relative bg-[#0A0D1A] border border-white/5 hover:border-[#C5A880]/20 transition-all duration-700 flex flex-col shadow-[0_4px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_60px_rgba(0,0,0,0.8)]"
            >
              {/* Ligne supérieure dorée */}
              <div className="h-[2px] w-full bg-gradient-to-r from-[#C5A880]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-8 flex flex-col flex-1">
                {/* Emoji + Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl">{book.cover}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] bg-[#C5A880]/10 text-[#C5A880] px-3 py-1 border border-[#C5A880]/20 font-medium">
                    {book.tag}
                  </span>
                </div>

                {/* Titre */}
                <h3 className="font-serif text-xl text-white leading-snug mb-3">
                  {book.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-1">
                  {book.description}
                </p>

                {/* Prix + Bouton */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-[#C5A880]">{book.price}</span>
                    <span className="text-[10px] text-gray-600 mt-0.5">Téléchargement instantané</span>
                  </div>

                  <Link
                    href="/boutique"
                    className="flex items-center gap-2 px-5 py-3 border border-[#C5A880]/30 text-[#C5A880] text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#C5A880] hover:text-black hover:border-[#C5A880] transition-all duration-500"
                  >
                    <Sparkles size={14} />
                    Acheter
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lien mobile */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/boutique"
            className="inline-flex items-center gap-2 text-[#C5A880] hover:text-white text-sm font-medium transition-colors group"
          >
            Voir la collection
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}