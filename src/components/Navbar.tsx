"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/#profil", label: "Profil" },
  { href: "/#conferences", label: "Conférences" },
  { href: "/boutique", label: "E-books" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-night/60 backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        {/* Logo / Nom */}
        <Link
          href="/"
          className="font-serif text-2xl tracking-wide text-white hover:text-gold-matte transition-colors"
        >
          Jacques DIBI
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-silver/80">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-gold-matte transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-silver hover:text-gold-matte transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-abyss/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm uppercase tracking-wide text-silver/80">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-gold-matte transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}