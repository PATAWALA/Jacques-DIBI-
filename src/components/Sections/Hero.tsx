import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Lueurs d'ambiance spécifiques */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[180px] opacity-[0.07] bg-cyan-400 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.05] bg-amber-400 pointer-events-none"
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-gold-matte/20 bg-gold-matte/5 text-gold-matte text-xs uppercase tracking-[0.2em] font-medium">
          <Star size={12} />
          Expert agréé FDFP
        </div>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Je suis <span className="text-gold-matte">Jacques DIBI</span>
        </h1>

        <p className="text-lg md:text-xl text-silver/80 max-w-2xl mx-auto leading-relaxed mb-10">
          Juriste d’Affaires, Expert en Droits de l’Homme, Formateur agréé et Maître de
          Cérémonie. Je transforme vos enjeux juridiques en leviers de puissance et vos
          événements en moments inoubliables.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#conferences"
            className="group inline-flex items-center gap-2 bg-white/5 backdrop-blur-lg border border-white/10 px-8 py-4 rounded-2xl text-white font-medium hover:bg-gold-matte/10 hover:border-gold-matte/30 transition-all duration-300 shadow-glow-cyan"
          >
            Prochaine conférence
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/boutique"
            className="text-silver/70 hover:text-gold-matte font-medium transition-colors underline underline-offset-4"
          >
            Découvrir mes e-books
          </Link>
        </div>
      </div>
    </section>
  );
}