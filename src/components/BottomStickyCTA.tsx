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
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 flex lg:hidden justify-center pb-4 pointer-events-none">
      <Link
        href="/conferences"
        className="pointer-events-auto flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 shadow-2xl text-sm font-medium text-white hover:bg-[#C5A880] hover:text-black hover:border-[#C5A880] transition-all duration-500 rounded-none"
      >
        <Calendar size={16} className="text-gold-matte" />
        Réserver ma place
      </Link>
    </div>
  );
}