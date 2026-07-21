import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BottomStickyCTA from '@/components/BottomStickyCTA'; 

export const metadata: Metadata = {
  title: 'DCMP Network – Réseau des cabinets juridiques en Afrique',
  description: 'Trouvez les meilleurs experts juridiques et fiscaux ou inscrivez votre cabinet.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BottomStickyCTA /> {/* ← toujours visible sur mobile après 400px de scroll */}
      </body>
    </html>
  );
}