const cases = [
  ['Interior Design Brand', 'Technical SEO + landing page optimization.', '320%', 'ROI Increase'],
  ['Local SEO Success', 'Multiplied traffic for a local business.', '480%', 'Organic Traffic'],
  ['Google Ads Campaign', 'High-converting campaigns that generated quality leads.', '2500+', 'Leads Generated'],
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-y border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-300">Case Studies</p>
            <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">Results That Speak</h2>
          </div>
          <a className="rounded-xl border border-white/15 px-5 py-3 text-sm text-zinc-200 hover:bg-white/5" href="#projects">View All Case Studies</a>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cases.map(([title, desc, stat, label]) => (
            <article key={title} className="glass rounded-2xl p-7">
              <div className="mb-8 h-28 rounded-2xl bg-[linear-gradient(135deg,rgba(59,130,246,.25),rgba(139,92,246,.18),transparent)]" />
              <div className="font-mono-brand gradient-text text-4xl font-bold">{stat}</div>
              <p className="mt-1 text-sm text-zinc-400">{label}</p>
              <h3 className="mt-8 font-display text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
