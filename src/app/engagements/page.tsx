import type { Metadata } from "next";
import { Building2, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AUPROHADA & Engagements | Jacques DIBI",
  description:
    "Découvrez les engagements de Jacques DIBI en tant que Chargé de Communication de l'AUPROHADA et Consultant auprès du CNDH-CI.",
};

export default function EngagementsPage() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Lueurs d'ambiance */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/3 via-transparent to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#C5A880]/3 via-transparent to-transparent rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#C5A880]/60">
            Engagements institutionnels
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white mt-4 font-bold mb-4">
            Au Cœur du Droit & des Droits de l'Homme
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Un ancrage fort au sein des institutions qui façonnent le droit des affaires
            et la protection des droits fondamentaux en Afrique.
          </p>
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* AUPROHADA */}
          <div className="group relative bg-[#0A0D1A] border border-white/5 hover:border-cyan-400/20 transition-all duration-700 shadow-[0_4px_40px_rgba(0,0,0,0.6)] flex flex-col">
            {/* Ligne supérieure */}
            <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400/80 to-transparent" />

            <div className="p-10 flex flex-col flex-1">
              {/* Icône */}
              <div className="w-16 h-16 flex items-center justify-center bg-cyan-400/5 border border-cyan-400/20 shadow-[0_0_40px_rgba(34,211,238,0.06)] mb-6">
                <Building2 size={28} className="text-cyan-300" />
              </div>

              {/* Titre */}
              <div className="mb-4">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/60 mb-2">
                  Association Universitaire
                </p>
                <h2 className="font-serif text-2xl text-white">
                  Chargé de Communication – AUPROHADA
                </h2>
              </div>

              {/* Texte */}
              <p className="text-gray-400 leading-relaxed mb-8 flex-1">
                Garant de la communication de l'Association Universitaire pour la Promotion
                du Droit en Afrique, Mᵉ Jacques DIBI pilote la mise en lumière des initiatives
                scientifiques, des concours de plaidoirie et la vulgarisation du Traité OHADA
                auprès de la communauté juridique internationale.
              </p>

              {/* Lien */}
              <Link
                href="/conferences"
                className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm font-medium transition-colors group/link"
              >
                Découvrir les événements AUPROHADA
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CNDH-CI */}
          <div className="group relative bg-[#0A0D1A] border border-white/5 hover:border-[#C5A880]/20 transition-all duration-700 shadow-[0_4px_40px_rgba(0,0,0,0.6)] flex flex-col">
            {/* Ligne supérieure */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#C5A880] to-transparent" />

            <div className="p-10 flex flex-col flex-1">
              {/* Icône */}
              <div className="w-16 h-16 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shadow-[0_0_40px_rgba(197,168,128,0.06)] mb-6">
                <Shield size={28} className="text-[#C5A880]" />
              </div>

              {/* Titre */}
              <div className="mb-4">
                <p className="text-xs uppercase tracking-[0.3em] text-[#C5A880]/60 mb-2">
                  Conseil National
                </p>
                <h2 className="font-serif text-2xl text-white">
                  Expert & Consultant – CNDH-CI
                </h2>
              </div>

              {/* Texte */}
              <p className="text-gray-400 leading-relaxed mb-8 flex-1">
                Consultant auprès du Conseil National des Droits de l'Homme de Côte d'Ivoire,
                Mᵉ Jacques DIBI met ses compétences de juriste au service de la protection des
                droits fondamentaux et de la sensibilisation institutionnelle.
              </p>

              {/* Lien */}
              <Link
                href="/conferences#contact"
                className="inline-flex items-center gap-2 text-[#C5A880] hover:text-[#D4B896] text-sm font-medium transition-colors group/link"
              >
                Contacter pour une consultation
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}