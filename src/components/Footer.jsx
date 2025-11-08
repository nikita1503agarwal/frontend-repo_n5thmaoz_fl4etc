export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
            <span className="text-sm font-semibold tracking-wider text-white/90">FLAMES AGENCY</span>
          </div>
          <div className="text-xs text-white/60">
            © {new Date().getFullYear()} Flames Agency — P.IVA 01234567890 — <a href="#" className="underline text-white/80 hover:text-white">Privacy</a>
          </div>
          <div className="flex gap-4 text-white/70">
            <a href="#" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a>
            <a href="#" aria-label="Instagram" className="hover:text-white">Instagram</a>
            <a href="#" aria-label="X" className="hover:text-white">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
