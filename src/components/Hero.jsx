import { ArrowRight, Download, BarChart3, Bot, Code2, Search, Target } from 'lucide-react';

const tags = [
  { label: 'SEO', icon: Search, pos: 'left-[8%] top-[22%]' },
  { label: 'Google Ads', icon: Target, pos: 'right-[4%] top-[34%]' },
  { label: 'AI Automation', icon: Bot, pos: 'left-[2%] top-[52%]' },
  { label: 'Next.js', icon: Code2, pos: 'right-[10%] bottom-[22%]' },
  { label: 'Analytics', icon: BarChart3, pos: 'left-[30%] bottom-[10%]' },
];

export default function Hero() {
  return (
    <section id="home" className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1fr_.95fr]">
      <div>
        <div className="mb-8 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.22em] text-blue-300">
          AI Growth Marketing Engineer
        </div>
        <h1 className="font-display max-w-3xl text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
          I Build Systems That Generate <span className="gradient-text">Customers.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-300">
          I combine AI, data, SEO, paid ads, and web development to build scalable growth systems that drive real business results — not vanity metrics.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a href="#results" className="glow-button inline-flex items-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold">
            View My Results <ArrowRight size={18} />
          </a>
          <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-4 text-sm font-semibold text-zinc-200 hover:bg-white/5">
            Download Resume <Download size={18} />
          </a>
        </div>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[620px]">
        <div className="absolute inset-12 rounded-full border border-blue-400/25 orbit" />
        <div className="absolute inset-20 rounded-full border border-purple-400/25 orbit-reverse" />
        <div className="pulse-glow absolute inset-[22%] rounded-full bg-[radial-gradient(circle,#3B82F6_0%,#8B5CF6_36%,transparent_70%)] opacity-40 blur-xl" />
        <div className="absolute inset-[20%] rounded-full border border-cyan-300/25 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,.22),rgba(59,130,246,.28)_18%,rgba(139,92,246,.18)_45%,transparent_72%)] shadow-[0_0_90px_rgba(59,130,246,.35)]">
          <div className="absolute inset-0 rounded-full grid-bg opacity-70" />
        </div>
        {tags.map(({ label, icon: Icon, pos }) => (
          <div key={label} className={`absolute ${pos} glass float-slow flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-100`}>
            <Icon size={18} className="text-blue-400" /> {label}
          </div>
        ))}
      </div>
    </section>
  );
}
