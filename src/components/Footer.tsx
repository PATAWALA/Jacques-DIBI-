import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-abyss/40 backdrop-blur-md mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <Link href="/" className="flex flex-col">
            <span className="text-sm font-black uppercase tracking-[0.25em] text-white">
              Jacques DIBI
            </span>
            <span className="text-[9px] font-medium tracking-[0.4em] uppercase text-[#C5A880] mt-0.5">
              Cabinet & Conseil
            </span>
          </Link>
          <p className="text-silver/50 text-sm leading-relaxed">
            L’excellence juridique et l’art de la parole au service de votre réussite.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-silver/60">
            <li><Link href="/conferences" className="hover:text-gold-matte transition-colors">Conférences</Link></li>
            <li><Link href="/formations" className="hover:text-gold-matte transition-colors">Formations</Link></li>
            <li><Link href="/boutique" className="hover:text-gold-matte transition-colors">Boutique</Link></li>
            <li><Link href="/engagements" className="hover:text-gold-matte transition-colors">AUPROHADA & Engagements</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-silver/60">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-gold-matte" />
              <a href="mailto:contact@jacquesdibi.com" className="hover:text-gold-matte transition-colors">
                contact@jacquesdibi.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-gold-matte" />
              <span>+225 XX XX XX XX XX</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-gold-matte" />
              <span>Abidjan, Côte d’Ivoire</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 px-6 text-center text-xs text-silver/40">
        © {new Date().getFullYear()} Jacques DIBI. Tous droits réservés.
      </div>
    </footer>
  );
}