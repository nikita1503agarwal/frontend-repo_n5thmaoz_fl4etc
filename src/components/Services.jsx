import { Rocket, ChartBar, ShoppingCart, Globe, Workflow, Search } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Siti web su misura',
    desc: 'Progetti unici, orientati alla conversione, veloci e SEO-ready.'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    desc: 'Store performanti, integrazioni pagamento e automazioni post-vendita.'
  },
  {
    icon: ChartBar,
    title: 'Digital Marketing',
    desc: 'Campagne data-driven su Meta, Google e LinkedIn per lead e vendite.'
  },
  {
    icon: Search,
    title: 'SEO / SEM',
    desc: 'Visibilità organica e paid, keyword strategy e ottimizzazioni tecniche.'
  },
  {
    icon: Workflow,
    title: 'Automazioni',
    desc: 'CRM, email marketing, chatbot e workflow che scalano il business.'
  },
  {
    icon: Rocket,
    title: 'Analisi di mercato',
    desc: 'Studio nicchia, competitor e buyer personas per strategie su misura.'
  },
];

export default function Services() {
  return (
    <section id="servizi" className="relative bg-gradient-to-b from-black via-neutral-950 to-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Servizi pensati per risultati misurabili</h2>
          <p className="mt-4 text-white/70">Soluzioni versatili per PMI e professionisti in ogni settore.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 shadow-xl backdrop-blur transition hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-indigo-500/30 via-violet-500/30 to-fuchsia-500/30 p-3">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
              <p className="mt-4 text-xs text-white/60">
                Ogni progetto parte dall’analisi della nicchia, del mercato e dei competitor.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
