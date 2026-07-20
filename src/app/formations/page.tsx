import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, BookOpen, Users, ArrowRight, CheckCircle, Clock, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Formations Certifiantes | Jacques DIBI",
  description:
    "Formations en art oratoire, leadership et droit des affaires OHADA, certifiées FDFP. Développez vos compétences avec un expert reconnu.",
};

const programmes = [
  {
    title: "Certification en Art Oratoire & Leadership",
    duration: "3 jours (21 heures)",
    audience: "Professionnels, dirigeants, entrepreneurs",
    price: "Sur devis",
    description:
      "Maîtrisez les techniques de prise de parole, la gestuelle, la structure du discours et l'impact émotionnel pour diriger avec charisme.",
    highlights: [
      "Techniques de respiration et gestion du trac",
      "Structuration d'un discours persuasif",
      "Mises en situation filmées",
      "Attestation FDFP reconnue",
    ],
    accent: "amber",
  },
  {
    title: "Pratique du Droit OHADA pour Juristes",
    duration: "5 jours (35 heures)",
    audience: "Étudiants en droit, jeunes avocats, juristes d'entreprise",
    price: "À partir de 150 000 FCFA",
    description:
      "Une immersion complète dans le droit des affaires africain : actes uniformes, contentieux, et pratique contractuelle.",
    highlights: [
      "Droit des sociétés commerciales",
      "Sûretés et recouvrement",
      "Arbitrage et médiation OHADA",
      "Cas pratiques et études de dossiers",
    ],
    accent: "cyan",
  },
  {
    title: "Devenir Maître de Cérémonie Professionnel",
    duration: "2 jours intensifs",
    audience: "Futurs MC, communicants, chargés de protocole",
    price: "Sur devis",
    description:
      "Transmission exclusive du savoir-faire d'un Maître de Cérémonie primé à l'international. Du mariage au gala de prestige.",
    highlights: [
      "Protocole et gestion de la scène",
      "Improvisation et répartie",
      "Relation client et personal branding",
      "Simulation d'événements réels",
    ],
    accent: "gold",
  },
];

export default function FormationsPage() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Lueur d'ambiance */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#C5A880]/5 via-transparent to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#C5A880]/60">
            Formations certifiantes
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white mt-4 font-bold mb-4">
            Formations d'Excellence
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Des programmes conçus pour les leaders, les juristes et les orateurs
            qui veulent passer au niveau supérieur. Chaque formation est ancrée
            dans l'expérience réelle du terrain.
          </p>
        </div>

        {/* Programmes */}
        <div className="space-y-8">
          {programmes.map((prog, i) => (
            <div
              key={i}
              className="group relative bg-[#0A0D1A] border border-white/5 hover:border-[#C5A880]/20 transition-all duration-700 shadow-[0_4px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_60px_rgba(0,0,0,0.8)]"
            >
              {/* Ligne supérieure colorée */}
              <div
                className={`h-[2px] w-full transition-all duration-500 ${
                  prog.accent === "amber"
                    ? "bg-gradient-to-r from-amber-400/80 to-transparent"
                    : prog.accent === "cyan"
                    ? "bg-gradient-to-r from-cyan-400/80 to-transparent"
                    : "bg-gradient-to-r from-[#C5A880] to-transparent"
                }`}
              />

              <div className="p-8 md:p-10">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {/* Contenu principal */}
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <GraduationCap size={18} className="text-[#C5A880]" />
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A880]/70 font-medium">
                        Programme certifiant
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
                      {prog.title}
                    </h2>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {prog.description}
                    </p>

                    {/* Points forts */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {prog.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 flex items-center justify-center bg-[#C5A880]/10 border border-[#C5A880]/20 shrink-0 mt-0.5">
                            <CheckCircle size={12} className="text-[#C5A880]" />
                          </div>
                          <span className="text-sm text-gray-300">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar infos */}
                  <div className="bg-[#05070F] border border-white/5 p-6 flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shrink-0">
                        <Clock size={16} className="text-[#C5A880]" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{prog.duration}</p>
                        <p className="text-xs text-gray-500">Durée</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shrink-0">
                        <Target size={16} className="text-[#C5A880]" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{prog.audience}</p>
                        <p className="text-xs text-gray-500">Public cible</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shrink-0">
                        <BookOpen size={16} className="text-[#C5A880]" />
                      </div>
                      <div>
                        <p className="text-[#C5A880] text-lg font-bold">{prog.price}</p>
                        <p className="text-xs text-gray-500">Tarif</p>
                      </div>
                    </div>

                    <Link
                      href="/conferences#contact"
                      className="mt-2 flex items-center justify-center gap-2 bg-[#C5A880] hover:bg-[#D4B896] text-black font-bold text-xs uppercase tracking-[0.15em] py-4 transition-all duration-300"
                    >
                      Demander un devis
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}