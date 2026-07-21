'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, Calendar } from 'lucide-react';

export default function BottomStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Apparaît après 400px de scroll
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // vérification immédiate
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Si déjà sur la page de l'événement, on ne l'affiche pas (optionnel)
  if (typeof window !== 'undefined' && window.location.pathname === '/evenements') return null;

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 flex lg:hidden justify-center pb-3 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-3 bg-white border border-border-light shadow-xl rounded-xl px-4 py-3 mx-4 max-w-sm w-full animate-slide-up">
        <div className="flex-1 min-w-0">
          <p className="text-xs text-gray-500 leading-tight">
            📣 <span className="font-medium text-blue-royal">Conférence gratuite en ligne</span> – Droit & numérique : les clés pour 2026
          </p>
        </div>
        <Link
          href="/evenements"
          className="inline-flex items-center gap-1.5 bg-gold-cta text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-yellow-600 transition-colors whitespace-nowrap"
        >
          <Calendar className="w-4 h-4" />
          Je m'inscris
        </Link>
      </div>
    </div>
  );
}