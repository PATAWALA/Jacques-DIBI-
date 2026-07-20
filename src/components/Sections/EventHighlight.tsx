"use client";

import { useState } from "react";
import { Calendar, MapPin, Clock, Send, Users, Monitor } from "lucide-react";

export default function EventHighlight() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="event" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Lueur d'ambiance */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-bl from-[#C5A880]/5 via-transparent to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.4em] text-[#C5A880]/60">
            Prochaine Masterclass
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mt-4 font-bold mb-4">
            Droits de l'Homme & Leadership
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Une conférence exclusive en présentiel et en ligne.
            Réservez votre place dès maintenant.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Informations - 2 colonnes */}
          <div className="lg:col-span-2 bg-[#0A0D1A] border border-white/5 p-8 flex flex-col justify-center shadow-[0_4px_40px_rgba(0,0,0,0.6)]">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shrink-0">
                  <Calendar size={18} className="text-[#C5A880]" />
                </div>
                <div>
                  <p className="text-white font-medium">Vendredi 28 août 2026</p>
                  <p className="text-xs text-gray-500 mt-0.5">Date de l'événement</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shrink-0">
                  <Clock size={18} className="text-[#C5A880]" />
                </div>
                <div>
                  <p className="text-white font-medium">14:00 – 17:00 GMT</p>
                  <p className="text-xs text-gray-500 mt-0.5">Durée : 3 heures</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shrink-0">
                  <MapPin size={18} className="text-[#C5A880]" />
                </div>
                <div>
                  <p className="text-white font-medium">Abidjan – Plateau & Zoom</p>
                  <p className="text-xs text-gray-500 mt-0.5">Présentiel & en ligne</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shrink-0">
                  <Users size={18} className="text-[#C5A880]" />
                </div>
                <div>
                  <p className="text-white font-medium">Places limitées</p>
                  <p className="text-xs text-gray-500 mt-0.5">Inscription obligatoire</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shrink-0">
                  <Monitor size={18} className="text-[#C5A880]" />
                </div>
                <div>
                  <p className="text-white font-medium">Accès replay inclus</p>
                  <p className="text-xs text-gray-500 mt-0.5">Pour tous les inscrits</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire - 3 colonnes */}
          <div className="lg:col-span-3 bg-[#0A0D1A] border border-[#C5A880]/10 p-8 flex flex-col justify-center shadow-[0_4px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
            {/* Ligne supérieure dorée */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5A880] to-transparent" />

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
                    Votre adresse email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="exemple@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#05070F] border border-white/10 px-4 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#C5A880]/50 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#C5A880] hover:bg-[#D4B896] text-black font-bold text-sm uppercase tracking-[0.2em] py-4 transition-all duration-300"
                >
                  <Send size={16} />
                  Je m'inscris gratuitement
                </button>

                <p className="text-xs text-gray-600 text-center">
                  Aucun spam. Vous recevrez uniquement les informations relatives à cet événement.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#C5A880]/10 border border-[#C5A880]/30">
                  <Send size={24} className="text-[#C5A880]" />
                </div>
                <p className="text-[#C5A880] font-serif text-xl mb-2">Inscription confirmée</p>
                <p className="text-gray-400 text-sm">À très bientôt !</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}