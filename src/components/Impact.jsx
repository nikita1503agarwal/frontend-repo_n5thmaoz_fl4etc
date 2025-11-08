export default function Impact() {
  return (
    <section className="relative bg-gradient-to-b from-black to-neutral-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Perché digitalizzare ora</h2>
            <p className="mt-4 text-white/75">
              La trasformazione digitale non è più un'opzione. Le aziende che non innovano
              perdono clienti, margini e quote di mercato. I tuoi competitor stanno già investendo.
            </p>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>• + Visibilità su motori di ricerca e social</li>
              <li>• + Lead qualificati con campagne data-driven</li>
              <li>• + Processi automatizzati e riduzione dei costi</li>
              <li>• − Rischi di rimanere indietro rispetto alla concorrenza</li>
            </ul>
            <div className="mt-8">
              <a href="#contatti" className="rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20">
                Richiedi una consulenza
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Rischi del non aggiornarsi</h3>
            <div className="mt-4 space-y-3 text-sm">
              <p>• Calo progressivo di traffico e richieste</p>
              <p>• Dipendenza da canali offline costosi</p>
              <p>• Difficoltà nel misurare il ROI delle attività</p>
              <p>• Perdita di autorevolezza agli occhi dei clienti</p>
            </div>
            <div className="mt-6 rounded-xl bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10 p-4 text-xs text-white/70">
              I dati dicono che oltre il 70% dei clienti cerca online prima di acquistare. Fatti trovare pronto.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
