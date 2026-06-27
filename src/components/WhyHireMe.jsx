export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[.9fr_1fr]">
      <div className="glass relative min-h-[440px] overflow-hidden rounded-3xl p-8">
        <div className="absolute right-10 top-10 h-24 w-24 rotate-12 rounded-3xl border border-purple-400/50 bg-purple-500/20 blur-[1px]" />
        <div className="absolute bottom-8 left-8 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative z-10 flex h-full flex-col justify-end">
          <div className="mb-6 h-56 w-56 rounded-[2rem] border border-blue-400/30 bg-[linear-gradient(135deg,rgba(59,130,246,.25),rgba(139,92,246,.2))] shadow-[0_0_80px_rgba(59,130,246,.25)]" />
          <p className="text-sm text-zinc-400">Replace this block with your professional portrait cutout later.</p>
        </div>
      </div>
      <div className="py-4">
        <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-300">About Me</p>
        <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">Who I Am</h2>
        <p className="mt-6 text-lg leading-8 text-zinc-300">
          I’m Muhammad Sohail, an AI-powered growth marketing professional who combines performance marketing, technical SEO, web development, and automation to help businesses generate qualified leads and scale faster.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4">
          {['5+ Years', '50+ Projects', '30+ Clients'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[.03] p-5">
              <div className="gradient-text font-mono-brand text-2xl font-bold">{item.split(' ')[0]}</div>
              <div className="mt-1 text-sm text-zinc-400">{item.replace(item.split(' ')[0], '')}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
