export default function Contact() {
  return (
    <section id="contatti" className="relative bg-gradient-to-b from-black via-neutral-950 to-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Prenota una consulenza gratuita</h2>
            <p className="mt-3 text-white/75">Raccontaci i tuoi obiettivi: analizziamo la tua nicchia e definiamo una strategia su misura.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 backdrop-blur">
              <p><span className="font-semibold text-white">Email:</span> hello@flamesagency.it</p>
              <p className="mt-2"><span className="font-semibold text-white">Telefono:</span> +39 02 1234 5678</p>
              <p className="mt-2"><span className="font-semibold text-white">Sede:</span> Milano, IT</p>
              <div className="mt-4 text-xs text-white/60">P.IVA 01234567890 • Privacy Policy</div>
            </div>
          </div>
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-white/80">Nome</label>
                <input className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-indigo-400" placeholder="Mario" />
              </div>
              <div>
                <label className="block text-sm text-white/80">Cognome</label>
                <input className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-indigo-400" placeholder="Rossi" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/80">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-indigo-400" placeholder="nome@azienda.it" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/80">Messaggio</label>
                <textarea rows={4} className="mt-1 w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-indigo-400" placeholder="Parlaci del tuo progetto..." />
              </div>
            </div>
            <button type="button" className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20">
              Invia richiesta
            </button>
            <p className="mt-3 text-center text-xs text-white/60">Ti risponderemo entro 24 ore.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
