export default function Testimonials() {
  const items = [
    {
      quote:
        'Grazie al nuovo sito e alle campagne, abbiamo aumentato del 45% le richieste in 3 mesi.',
      author: 'Marco R., Studio Professionale',
    },
    {
      quote:
        'Strategia chiara, misurabile e focalizzata sui risultati. Team super affidabile.',
      author: 'Sara B., E-commerce Founder',
    },
    {
      quote:
        'Automazioni e CRM hanno ridotto tempi e costi nel processo commerciale.',
      author: 'Luca M., PMI B2B',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-neutral-950 to-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Cosa dicono i clienti</h2>
          <p className="mt-3 text-white/70">Risultati reali, storie concrete.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
              <blockquote className="text-sm text-white/80">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-xs text-white/60">{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
