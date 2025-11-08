import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-28 pt-40 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Portiamo la tua azienda nel futuro digitale
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Acquisisci nuovi clienti, supera la concorrenza: più visibilità, lead qualificati e ROI misurabile grazie a strategie su misura.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contatti"
              className="rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Prenota una consulenza gratuita
            </a>
            <a href="#servizi" className="text-sm font-semibold text-white/80 hover:text-white">
              Scopri i servizi
            </a>
          </div>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur-lg">
            <p>
              Chi non innova rischia di perdere clienti e quote di mercato. La digitalizzazione è la chiave per crescere oggi, non domani.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
