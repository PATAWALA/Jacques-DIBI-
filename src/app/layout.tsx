import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomStickyCTA from "@/components/BottomStickyCTA";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jacques DIBI | Juriste d'Affaires & Maître de Cérémonie",
  description:
    "Expert en Droits de l'Homme, Formateur Agréé FDFP, Conférencier international et auteur d'e-books premium. Découvrez mes masterclass, ouvrages et services juridiques de haut niveau.",
  keywords: [
    "Jacques DIBI",
    "juriste d'affaires",
    "droits de l'homme",
    "FDFP",
    "conférencier",
    "maître de cérémonie",
    "e-book juridique",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable} dark`}>
      <body className="bg-night text-silver antialiased relative min-h-screen">
        {/* Lumières d'ambiance permanentes */}
        <div
          className="fixed -z-10 top-1/4 -left-32 w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.06] bg-cyan-400 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="fixed -z-10 bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.05] bg-amber-400 pointer-events-none"
          aria-hidden="true"
        />

        {/* Navigation vitrée */}
        <Navbar />

        {/* Contenu principal */}
        <main className="relative z-0">{children}</main>
        <Footer />
        {/* Bouton CTA mobile (géré par son composant) */}
        <BottomStickyCTA />
      </body>
    </html>
  );
}