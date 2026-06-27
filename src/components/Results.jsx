import { TrendingUp, DollarSign, Users, Trophy } from 'lucide-react';

const results = [
  ['480%', 'Increase in Organic Traffic', 'In 6 Months', TrendingUp],
  ['320%', 'Increase in ROI', 'Through Paid Ads', DollarSign],
  ['2500+', 'Leads Generated', 'For Clients', Users],
  ['Top 1', 'Rankings Achieved', 'For Competitive Keywords', Trophy],
];

export default function Results() {
  return (
    <section id="results" className="border-y border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-300">Proven Results</p>
        <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">Real Impact. Measurable Growth.</h2>
        <p className="mt-4 max-w-2xl text-zinc-400">Replace these demo numbers with your verified screenshots and real campaign data.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {results.map(([value, title, desc, Icon]) => (
            <div key={title} className="glass rounded-2xl p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400">
                <Icon size={28} />
              </div>
              <div className="font-mono-brand gradient-text text-4xl font-bold">{value}</div>
              <h3 className="mt-3 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
