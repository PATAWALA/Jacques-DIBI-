"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function BottomStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // check initial
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null; // hidden entirely on desktop (always hidden because lg:hidden in layout? We'll control visibility only mobile)

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 flex lg:hidden justify-center pb-4 pointer-events-none">
      <Link
        href="#conferences"
        className="pointer-events-auto flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-2xl text-sm font-medium text-white hover:bg-gold-matte/10 hover:border-gold-matte/30 transition-all duration-500 animate-in slide-in-from-bottom-4 fade-in"
      >
        <Calendar size={16} className="text-gold-matte" />
        Prochaine conférence
      </Link>
    </div>
  );
}