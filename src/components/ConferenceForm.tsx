'use client';

import { useState } from 'react';

export default function ConferenceForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation – connectez votre API ici
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8 text-white">
        ✅ Merci ! Vous êtes inscrit. Le lien de connexion vous sera envoyé par email.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input
        type="email"
        placeholder="Votre adresse email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 bg-transparent border border-[#C5A880]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A880]"
      />
      <button
        type="submit"
        className="bg-[#C5A880] text-black px-6 py-3 font-bold uppercase tracking-[0.15em] text-xs hover:bg-[#D4B896] transition-all border border-[#C5A880]"
      >
        Je m'inscris
      </button>
    </form>
  );
}