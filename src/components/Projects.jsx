const projects = [
  'Next.js SEO Website',
  'AI Growth Dashboard',
  'E-Commerce Platform',
  'Marketing Automation',
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20">
      <p className="text-xs font-bold uppercase tracking-[.25em] text-blue-300">Featured Projects</p>
      <h2 className="font-display mt-3 text-4xl font-bold md:text-5xl">Selected Work</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, index) => (
          <div key={project} className="glass overflow-hidden rounded-2xl">
            <div className="h-40 bg-[linear-gradient(135deg,rgba(59,130,246,.24),rgba(139,92,246,.18),rgba(6,182,212,.12))] p-5">
              <div className="h-full rounded-xl border border-white/10 bg-black/20" />
            </div>
            <div className="p-5">
              <h3 className="font-semibold">{project}</h3>
              <p className="mt-2 text-sm text-zinc-400">{index % 2 ? 'Data & Analytics' : 'Web Development'}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
