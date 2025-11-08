export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Portfolio</h2>
          <p className="mt-3 text-white/70">Progetti in arrivo. Stiamo selezionando i case study più significativi.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur">
              <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-fuchsia-500/20" />
              <h3 className="mt-4 text-white">Progetto #{i + 1}</h3>
              <p className="text-sm text-white/70">Presto disponibile</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
