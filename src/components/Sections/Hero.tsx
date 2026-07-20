"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-[#05070F] min-h-screen flex flex-col items-center justify-center py-20 lg:py-28 overflow-hidden">
      {/* Halo lumineux */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-orange-500/5 via-amber-500/5 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/20 to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image – vient de la gauche */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-24"
            }`}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-[3/4] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
              <Image
                src="/images/portrait.jpg"
                alt="Mᵉ Jacques DIBI"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070F] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 right-4 bg-[#05070F]/90 backdrop-blur-md px-3 py-1.5 border border-[#C5A880]/40">
                <span className="text-[#C5A880] text-xs font-serif font-bold tracking-wider">
                  Mᵉ Jacques DIBI
                </span>
              </div>
            </div>
          </div>

          {/* Texte – vient de la droite */}
          <div
            className={`text-center lg:text-left transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-24"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Mᵉ Jacques DIBI
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#C5A880] mb-6">
              Mieux communiquer. Mieux vous exprimer. Mieux diriger. Mieux impacter.
            </p>

            <p className="text-sm sm:text-base text-gray-400 max-w-lg mb-8 leading-relaxed">
              <span className="inline-block bg-[#C5A880]/10 border border-[#C5A880]/30 text-[#C5A880] px-2 py-0.5 text-xs sm:text-sm font-bold uppercase tracking-wider">
                Formateur
              </span>{" "}
              certifié FDFP et{" "}
              <span className="inline-block bg-[#C5A880]/10 border border-[#C5A880]/30 text-[#C5A880] px-2 py-0.5 text-xs sm:text-sm font-bold uppercase tracking-wider">
                Conférencier
              </span>{" "}
              international, Mᵉ Jacques DIBI accompagne cadres, institutions et organisations
              dans la maîtrise de l'art oratoire, le leadership transformationnel et la
              sécurisation de leurs démarches juridiques. Son ambition : aider{" "}
              <strong className="text-white">5 millions de jeunes</strong> à vivre de leurs
              compétences et savoir‑faire.
            </p>

            <p className="text-xl sm:text-2xl text-white font-bold mb-10">
              Tu veux en faire partie ?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#event"
                className="px-8 py-4 bg-gradient-to-r from-[#C5A880] to-[#D4B896] text-black font-bold tracking-wider uppercase text-xs shadow-[0_0_25px_rgba(197,168,128,0.3)] hover:shadow-[0_0_35px_rgba(197,168,128,0.5)] transition-all text-center rounded-none"
              >
                Réserver ma place
              </a>
              <a
                href="/formations"
                className="px-8 py-4 border border-[#C5A880]/40 text-[#C5A880] font-bold tracking-wider uppercase text-xs hover:bg-[#C5A880] hover:text-black transition-colors text-center rounded-none"
              >
                Découvrir les formations
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;