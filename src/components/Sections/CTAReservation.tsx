import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

export default function CTAReservation() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Lueurs d'ambiance */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#C5A880]/8 via-transparent to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#C5A880]/5 via-transparent to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* Filet supérieur */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A880]/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge urgence */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C5A880]/10 border border-[#C5A880]/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C5A880]">
            Prochain webinaire
          </span>
        </div>

        {/* Titre */}
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-4 leading-tight">
          Réservez votre place
        </h2>
        <p className="text-lg md:text-xl text-[#C5A880] font-serif italic mb-6">
          Droits de l'Homme & Leadership Transformationnel
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Une conférence exclusive où le droit rencontre la stratégie et l'éloquence.
          Places limitées, réservez la vôtre maintenant.
        </p>

        {/* Infos clés */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 bg-[#0A0D1A] border border-white/5 px-6 py-4">
            <Calendar size={20} className="text-[#C5A880] shrink-0" />
            <div className="text-left">
              <p className="text-white font-medium text-sm">Vendredi 28 août 2026</p>
              <p className="text-xs text-gray-500">Date de l'événement</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#0A0D1A] border border-white/5 px-6 py-4">
            <Clock size={20} className="text-[#C5A880] shrink-0" />
            <div className="text-left">
              <p className="text-white font-medium text-sm">14:00 – 17:00 GMT</p>
              <p className="text-xs text-gray-500">Durée : 3 heures</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#0A0D1A] border border-white/5 px-6 py-4">
            <Users size={20} className="text-[#C5A880] shrink-0" />
            <div className="text-left">
              <p className="text-white font-medium text-sm">Places limitées</p>
              <p className="text-xs text-gray-500">Inscription obligatoire</p>
            </div>
          </div>
        </div>

        {/* CTA principal */}
        <a
          href="#event"
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#C5A880] to-[#D4B896] text-black font-bold text-sm uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(197,168,128,0.25)] hover:shadow-[0_0_60px_rgba(197,168,128,0.4)] transition-all duration-500 group"
        >
          Je réserve ma place
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Texte rassurant */}
        <p className="text-xs text-gray-600 mt-6">
          Inscription gratuite • Accès replay inclus pour tous les inscrits
        </p>
      </div>
    </section>
  );
}