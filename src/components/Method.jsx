const steps = [
  {
    title: 'Analisi',
    desc: 'Nicchia, mercato, competitor e buyer personas per capire dove competere.'
  },
  {
    title: 'Strategia su misura',
    desc: 'Definizione obiettivi, canali, messaggi e KPI per crescita e ROI.'
  },
  {
    title: 'Prototipazione & design',
    desc: 'Wireframe e UI orientati alla conversione e alla chiarezza.'
  },
  {
    title: 'Sviluppo & UX/UI',
    desc: 'Performance, accessibilità e usabilità per esperienze fluide.'
  },
  {
    title: 'Implementazione & tracking',
    desc: 'Strumenti di acquisizione, CRM, analytics e misurazione risultati.'
  },
  {
    title: 'Lancio & ottimizzazione',
    desc: 'Iterazioni continue basate su dati reali e feedback.'
  },
];

export default function Method() {
  return (
    <section id="metodo" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Il nostro metodo in 6 fasi</h2>
          <p className="mt-4 text-white/70">Processo collaudato per portare risultati concreti e misurabili.</p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
              <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-sm font-extrabold text-white">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
