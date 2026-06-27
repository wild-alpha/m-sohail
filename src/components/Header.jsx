const nav = ['Home', 'About', 'Results', 'Case Studies', 'Projects', 'Services', 'Resume'];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070B]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="font-display text-2xl font-bold tracking-tight">
          M<span className="gradient-text">S</span>
        </a>
        <nav className="hide-mobile flex items-center gap-8 text-sm text-zinc-300">
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="transition hover:text-white">
              {item}
            </a>
          ))}
        </nav>
        <a href="#contact" className="rounded-xl border border-blue-400/40 px-5 py-2 text-sm text-white transition hover:bg-blue-500/10">
          Let’s Talk
        </a>
      </div>
    </header>
  );
}
