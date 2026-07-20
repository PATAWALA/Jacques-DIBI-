export default function AdminLoginPage() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-4 flex items-center justify-center">
      <div className="max-w-md w-full bg-[#0A0D1A] border border-white/5 p-8 shadow-[0_4px_40px_rgba(0,0,0,0.6)]">
        <h1 className="font-serif text-2xl text-white text-center mb-8">
          Espace Administration
        </h1>
        <form className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="admin@jacquesdibi.com"
              className="w-full bg-[#05070F] border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#C5A880]/50"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
              Mot de passe
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-[#05070F] border border-white/10 px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#C5A880]/50"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#C5A880] hover:bg-[#D4B896] text-black font-bold text-sm uppercase tracking-[0.2em] py-4 transition-all duration-300"
          >
            Connexion
          </button>
        </form>
      </div>
    </section>
  );
}