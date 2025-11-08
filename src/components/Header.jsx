import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Servizi', href: '#servizi' },
    { label: 'Metodo', href: '#metodo' },
    { label: 'Chi siamo', href: '#chi-siamo' },
    { label: 'Contatti', href: '#contatti' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#hero" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg" />
              <span className="text-sm font-semibold tracking-wider text-white/90">FLAMES AGENCY</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contatti"
                className="rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Prenota una consulenza gratuita
              </a>
            </nav>

            <button
              aria-label="Apri menù"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-white/80 backdrop-blur md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-black/60" onClick={() => setOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs border-l border-white/10 bg-neutral-900/90 p-6 backdrop-blur-md">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-semibold tracking-wider text-white/90">FLAMES AGENCY</span>
              <button
                aria-label="Chiudi menù"
                className="rounded-xl border border-white/10 p-2 text-white/80"
                onClick={() => setOpen(false)}
              >
                <X size={22} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contatti"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-500/20"
              >
                Prenota una consulenza gratuita
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
