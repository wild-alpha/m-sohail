import { Bot, Code2, Megaphone, Search } from 'lucide-react';

const services = [
  ['Performance Marketing', 'Google Ads, Meta Ads, ROI-focused campaigns.', Megaphone],
  ['SEO & Content Strategy', 'Rank higher, get found, drive organic traffic.', Search],
  ['Web Development', 'Next.js, React, Tailwind, fast SEO websites.', Code2],
  ['AI Automation', 'Automate workflows, save time, scale faster.', Bot],
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-20">
      <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-300">What I Do</p>
      <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">Growth Systems I Build</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {services.map(([title, desc, Icon]) => (
          <div key={title} className="glass group rounded-2xl p-7 transition hover:-translate-y-2 hover:border-purple-400/40">
            <Icon className="mb-8 text-blue-400 transition group-hover:scale-110" size={36} />
            <h3 className="font-display text-xl font-bold">{title}</h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
