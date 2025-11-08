export default function FAQ() {
  const faqs = [
    {
      q: 'Quanto tempo serve per realizzare un sito? ',
      a: 'Dipende dalla complessità. In media 4–8 settimane, incluse analisi, design, sviluppo e test.'
    },
    {
      q: 'Lavorate con qualsiasi settore?',
      a: 'Sì, i nostri servizi sono pensati per PMI e professionisti in diversi ambiti: B2B, B2C, servizi e retail.'
    },
    {
      q: 'Come misurate i risultati?',
      a: 'Impostiamo KPI chiari, tracciamenti con analytics e dashboard per monitorare lead e ROI.'
    },
  ];

  return (
    <section className="relative bg-black py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Domande frequenti</h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90 backdrop-blur">
              <summary className="cursor-pointer list-none text-base font-medium text-white/90">
                <span className="mr-3 inline-block h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 align-middle" />
                {f.q}
              </summary>
              <p className="mt-3 pl-5 text-sm text-white/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
