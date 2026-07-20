import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Star, ShieldCheck, CheckCircle, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Boutique Premium | Jacques DIBI",
  description:
    "E-books et guides pratiques rédigés par Jacques DIBI : droit des affaires OHADA, prise de parole, leadership et droits de l'homme.",
};

const products = [
  {
    title: "Guide Pratique du Droit des Affaires OHADA",
    price: "14 900 FCFA",
    cover: "📘",
    tag: "Best-seller",
    description:
      "Un manuel clair et structuré pour maîtriser les actes uniformes, les sûretés et le contentieux. Modèles de contrats inclus.",
    highlights: ["Actes uniformes commentés", "Modèles de contrats", "Fiches pratiques"],
  },
  {
    title: "Les Clés de la Prise de Parole en Public",
    price: "9 900 FCFA",
    cover: "🎤",
    tag: "Nouveauté",
    description:
      "Le guide indispensable pour vaincre le trac, structurer un discours percutant et captiver n'importe quel auditoire.",
    highlights: ["Exercices pratiques", "Vidéos bonus", "Checklists de préparation"],
  },
  {
    title: "Droits de l'Homme : Le Manuel du Citoyen",
    price: "12 900 FCFA",
    cover: "⚖️",
    tag: "Engagement",
    description:
      "Une synthèse accessible des droits fondamentaux et des mécanismes de protection en Côte d'Ivoire et en Afrique.",
    highlights: ["Institutions clés", "Procédures de recours", "Cas concrets"],
  },
];

export default function BoutiquePage() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Lueur d'ambiance */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-[#C5A880]/3 via-transparent to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#C5A880]/60">
            E-books & ressources
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white mt-4 font-bold mb-4">
            Boutique Premium
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Des ressources exclusives pour approfondir vos connaissances juridiques
            et développer votre impact personnel.
          </p>
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="group relative bg-[#0A0D1A] border border-white/5 hover:border-[#C5A880]/20 transition-all duration-700 flex flex-col shadow-[0_4px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_60px_rgba(0,0,0,0.8)]"
            >
              {/* Ligne supérieure dorée */}
              <div className="h-[2px] w-full bg-gradient-to-r from-[#C5A880]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-8 flex flex-col flex-1">
                {/* Emoji + Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl">{product.cover}</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] bg-[#C5A880]/10 text-[#C5A880] px-3 py-1 border border-[#C5A880]/20 font-medium">
                    {product.tag}
                  </span>
                </div>

                {/* Titre */}
                <h2 className="font-serif text-xl text-white leading-snug mb-3">
                  {product.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Points forts */}
                <ul className="space-y-2 mb-8 flex-1">
                  {product.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shrink-0">
                        <CheckCircle size={10} className="text-[#C5A880]" />
                      </div>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Prix + Bouton */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-[#C5A880]">{product.price}</span>
                    <span className="text-[10px] text-gray-600 mt-0.5 flex items-center gap-1">
                      <Download size={10} />
                      Téléchargement instantané
                    </span>
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

        {/* Sécurité */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shrink-0">
            <ShieldCheck size={18} className="text-[#C5A880]" />
          </div>
          <div>
            <p className="text-sm text-gray-300 font-medium">Paiement 100% sécurisé</p>
            <p className="text-xs text-gray-500">Livraison instantanée par email</p>
          </div>
        </div>
      </div>
    </section>
  );
}