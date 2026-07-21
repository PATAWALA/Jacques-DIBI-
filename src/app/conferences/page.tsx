import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, MapPin, ArrowRight, Users, Video } from "lucide-react";
import ConferenceForm from "@/components/ConferenceForm";

export const metadata: Metadata = {
  title: "Conférences & Masterclass | DCMP Network",
  description:
    "Assistez aux conférences sur le droit des affaires, le numérique et le leadership. Réservez votre place gratuitement.",
};

const conferences = [
  {
    title: "Droits de l'Homme & Leadership Transformationnel",
    date: "Vendredi 28 août 2026",
    time: "14:00 – 17:00 GMT",
    location: "Abidjan – Plateau & Zoom",
    description:
      "Une masterclass exclusive pour dirigeants, juristes et étudiants désireux de comprendre comment les principes des droits humains deviennent des leviers de leadership.",
    href: "/captures/leadership-droits-humains",
    featured: true,
  },
  {
    title: "Plaidoirie & Art Oratoire : Convaincre pour Gagner",
    date: "Samedi 19 septembre 2026",
    time: "10:00 – 13:00 GMT",
    location: "Université Félix Houphouët-Boigny – Abidjan",
    description:
      "Une formation-conférence dédiée aux techniques de plaidoirie moderne et à l'éloquence judiciaire, en partenariat avec l'AUPROHADA.",
    href: "/captures/plaidoirie-art-oratoire",
    featured: false,
  },
  {
    title: "OHADA : Enjeux et Opportunités pour les Jeunes Juristes",
    date: "Vendredi 16 octobre 2026",
    time: "15:00 – 18:00 GMT",
    location: "En ligne (Zoom)",
    description:
      "Conférence interactive destinée aux étudiants et jeunes diplômés pour décrypter le droit des affaires africain et ses débouchés professionnels.",
    href: "/captures/ohada-jeunes-juristes",
    featured: false,
  },
];

export default function ConferencesPage() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Lueur d'ambiance */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#C5A880]/5 via-transparent to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-[#C5A880]/60">
            Conférences & Masterclass
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-white mt-4 font-bold mb-4">
            Conférences d'Exception
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Chaque intervention est une expérience immersive où le droit rencontre la
            stratégie et l'éloquence. Réservez votre place et rejoignez une communauté
            d'excellence.
          </p>
        </div>

        {/* Grille des conférences */}
        <div className="grid md:grid-cols-2 gap-8">
          {conferences.map((conf, i) => (
            <div
              key={i}
              className={`group relative border transition-all duration-700 shadow-[0_4px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_60px_rgba(0,0,0,0.8)] flex flex-col ${
                conf.featured
                  ? "bg-[#0A0D1A] border-[#C5A880]/20"
                  : "bg-[#0A0D1A] border-white/5 hover:border-[#C5A880]/10"
              }`}
            >
              {/* Ligne supérieure */}
              <div
                className={`h-[2px] w-full transition-all duration-500 ${
                  conf.featured
                    ? "bg-gradient-to-r from-[#C5A880] to-transparent"
                    : "bg-gradient-to-r from-white/10 to-transparent group-hover:from-[#C5A880]/40"
                }`}
              />

              {/* Badge featured */}
              {conf.featured && (
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-[#C5A880]/10 border border-[#C5A880]/30">
                  <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A880] font-bold">
                    Prochain événement
                  </span>
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                {/* Infos pratiques */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shrink-0">
                      <Calendar size={14} className="text-[#C5A880]" />
                    </div>
                    <span className="text-sm text-gray-300">{conf.date}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shrink-0">
                      <Clock size={14} className="text-[#C5A880]" />
                    </div>
                    <span className="text-sm text-gray-300">{conf.time}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shrink-0">
                      {conf.location.includes("Zoom") ? (
                        <Video size={14} className="text-[#C5A880]" />
                      ) : (
                        <MapPin size={14} className="text-[#C5A880]" />
                      )}
                    </div>
                    <span className="text-sm text-gray-300">{conf.location}</span>
                  </div>
                </div>

                {/* Titre */}
                <h2 className="font-serif text-2xl text-white mb-3">{conf.title}</h2>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed mb-8 flex-1">
                  {conf.description}
                </p>

                {/* Bouton */}
                <Link
                  href={conf.href}
                  className={`mt-auto inline-flex items-center justify-center gap-2 w-full py-4 border text-xs font-bold uppercase tracking-[0.15em] transition-all duration-500 ${
                    conf.featured
                      ? "bg-[#C5A880] border-[#C5A880] text-black hover:bg-[#D4B896]"
                      : "border-[#C5A880]/30 text-[#C5A880] hover:bg-[#C5A880] hover:text-black hover:border-[#C5A880]"
                  }`}
                >
                  Je m'inscris
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Inscription à la conférence gratuite en ligne */}
        <div id="inscription" className="mt-20 bg-[#0A0D1A] border border-[#C5A880]/10 shadow-[0_4px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="h-[2px] w-full bg-gradient-to-r from-[#C5A880] to-transparent" />
          <div className="p-10 md:p-12 text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl text-white mb-3">
              Droit & numérique : les clés pour 2026
            </h3>
            <p className="text-gray-400 mb-8">
              Inscrivez-vous gratuitement à cette conférence en ligne pour anticiper les évolutions juridiques liées au numérique.
            </p>
            <ConferenceForm />
          </div>
        </div>

        {/* Contact direct */}
        <div className="mt-20 bg-[#0A0D1A] border border-[#C5A880]/10 shadow-[0_4px_40px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="h-[2px] w-full bg-gradient-to-r from-[#C5A880] to-transparent" />

          <div className="p-10 md:p-12 text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-[#C5A880]/5 border border-[#C5A880]/20 shadow-[0_0_40px_rgba(197,168,128,0.06)]">
              <Users size={28} className="text-[#C5A880]" />
            </div>

            <h3 className="font-serif text-2xl text-white mb-3">
              Une conférence sur mesure pour votre organisation ?
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Contactez-nous pour une intervention privée ou institutionnelle adaptée
              à vos besoins spécifiques.
            </p>

            <Link
              href="mailto:contact@dcmp.network"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#C5A880]/30 text-[#C5A880] text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#C5A880] hover:text-black hover:border-[#C5A880] transition-all duration-500"
            >
              Demander une intervention
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}