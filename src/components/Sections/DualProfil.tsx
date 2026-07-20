"use client";

import { useEffect, useState } from "react";
import { BookOpen, Mic, Star } from "lucide-react";

const poles = [
  {
    icon: <BookOpen size={24} className="text-cyan-300" />,
    titre: "Conseil Juridique & Droits Humains",
    description:
      "Sécurisation des démarches institutionnelles, vulgarisation du droit des affaires (OHADA) et accompagnement des organisations.",
    points: [
      "Droit des affaires & conformité",
      "Consultation droits de l'homme (CNDH-CI)",
      "Plaidoyer & contentieux stratégique",
    ],
    cta: "Réserver une session",
    href: "/conferences#contact",
    accent: "cyan",
  },
  {
    icon: <Mic size={24} className="text-amber-300" />,
    titre: "Haute Éloquence & Prise de Parole",
    description:
      "Programmes certifiés FDFP pour dirigeants et professionnels. Maîtriser la rhétorique, structurer un discours d'impact et captiver un auditoire.",
    points: [
      "Formations certifiantes",
      "Coaching individuel et collectif",
      "Art oratoire & leadership transformationnel",
    ],
    cta: "Réserver une session",
    href: "/formations",
    accent: "amber",
  },
  {
    icon: <Star size={24} className="text-[#C5A880]" />,
    titre: "Maîtrise de Cérémonie Institutionnelle",
    description:
      "Modération et conduite de sommets, conférences internationales et galas de haute valeur protocolaire.",
    points: [
      "Cérémonies de prestige",
      "Colloques & tables rondes",
      "Gestion protocolaire & animation",
    ],
    cta: "Demander un devis",
    href: "/conferences#contact",
    accent: "gold",
  },
];

export default function DualProfil() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="expertises" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#05070F] relative overflow-hidden">
      {/* Lueur d'ambiance subtile */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-tr from-[#C5A880]/3 via-transparent to-transparent rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* En-tête */}
        <div
          className={`text-center mb-16 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[#C5A880]/60">
            Expertises & Interventions
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mt-4 font-bold">
            Une expertise au service de votre réussite
          </h2>
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-3 gap-8">
          {poles.map((pole, idx) => (
            <div
              key={idx}
              className={`group relative bg-[#0A0D1A] border border-white/5 hover:border-white/10 transition-all duration-700 flex flex-col shadow-[0_4px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_60px_rgba(0,0,0,0.8)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${idx * 200}ms`,
                transitionDuration: "800ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Ligne supérieure colorée */}
              <div
                className={`h-[2px] w-full transition-all duration-500 ${
                  pole.accent === "cyan"
                    ? "bg-gradient-to-r from-cyan-400/80 to-transparent"
                    : pole.accent === "amber"
                    ? "bg-gradient-to-r from-amber-400/80 to-transparent"
                    : "bg-gradient-to-r from-[#C5A880] to-transparent"
                }`}
              />

              <div className="p-8 flex flex-col flex-1">
                {/* Icône avec halo */}
                <div
                  className={`w-16 h-16 flex items-center justify-center mb-6 border border-white/5 ${
                    pole.accent === "cyan"
                      ? "bg-cyan-400/5 shadow-[0_0_40px_rgba(34,211,238,0.06)]"
                      : pole.accent === "amber"
                      ? "bg-amber-400/5 shadow-[0_0_40px_rgba(251,191,36,0.06)]"
                      : "bg-[#C5A880]/5 shadow-[0_0_40px_rgba(197,168,128,0.06)]"
                  }`}
                >
                  {pole.icon}
                </div>

                {/* Titre */}
                <h3 className="font-serif text-2xl text-white mb-4">{pole.titre}</h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-8">
                  {pole.description}
                </p>

                {/* Puces avec ligne verticale */}
                <ul className="space-y-3 mb-10 flex-1">
                  {pole.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="w-[2px] h-4 bg-[#C5A880]/40 group-hover:bg-[#C5A880] transition-colors duration-500 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Bouton */}
                <a
                  href={pole.href}
                  className={`mt-auto inline-block w-full text-center py-4 border text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                    pole.accent === "cyan"
                      ? "border-cyan-400/20 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:border-cyan-400"
                      : pole.accent === "amber"
                      ? "border-amber-400/20 text-amber-300 hover:bg-amber-400 hover:text-black hover:border-amber-400"
                      : "border-[#C5A880]/30 text-[#C5A880] hover:bg-[#C5A880] hover:text-black hover:border-[#C5A880]"
                  }`}
                >
                  {pole.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}