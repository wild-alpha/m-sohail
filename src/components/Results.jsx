import { TrendingUp, DollarSign, Users, Trophy } from "lucide-react";
import { FaGoogle, FaMeta, FaApple } from "react-icons/fa6";
import {
  SiVercel,
  SiSemrush,
  SiNextdotjs,
  SiGoogleanalytics,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";

const trusted = [
  { name: "Google", icon: FaGoogle, color: "text-blue-400" },
  { name: "Meta", icon: FaMeta, color: "text-sky-400" },
  { name: "Vercel", icon: SiVercel, color: "text-zinc-300" },
  { name: "Apple", icon: FaApple, color: "text-zinc-300" },
  { name: "OpenAI", icon: SiOpenai, color: "text-emerald-300" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Analytics", icon: SiGoogleanalytics, color: "text-orange-300" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "Semrush", icon: SiSemrush, color: "text-orange-400" },
  { name: "Ahrefs", icon: null, color: "text-blue-300" },
];

const results = [
  {
    value: "480%",
    title: "Increase in Organic Traffic",
    desc: "In 6 Months",
    icon: TrendingUp,
    color: "blue",
  },
  {
    value: "320%",
    title: "Increase in ROI",
    desc: "Through Paid Ads",
    icon: DollarSign,
    color: "purple",
  },
  {
    value: "2500+",
    title: "Leads Generated",
    desc: "For Clients",
    icon: Users,
    color: "cyan",
  },
  {
    value: "Top 1",
    title: "Rankings Achieved",
    desc: "For Competitive Keywords",
    icon: Trophy,
    color: "pink",
  },
];

export default function Results() {
  const sliderItems = [...trusted, ...trusted];

  return (
    <section id="results" className="mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-5">
      {/* Trusted Slider Separate Box */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#050914]/80 shadow-[0_0_70px_rgba(59,130,246,0.08)] backdrop-blur-xl">
        <div className="grid gap-8 px-6 py-8 sm:px-8 md:px-12 lg:grid-cols-[280px_1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-zinc-300">
              Trusted by Businesses
            </p>

            <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-500">
              I&apos;ve helped businesses of all sizes grow and scale
            </p>
          </div>

          <div className="trusted-slider">
            <div className="trusted-slider-track flex w-max items-center gap-16 whitespace-nowrap">
              {sliderItems.map(({ name, icon: Icon, color }, index) => (
                <div
                  key={`${name}-${index}`}
                  className="trusted-logo flex min-w-max items-center gap-3"
                >
                  {Icon ? (
                    <Icon size={30} className={color} />
                  ) : (
                    <span className={`text-2xl font-black ${color}`}>a</span>
                  )}

                  <span className="text-2xl font-bold tracking-tight text-zinc-300">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gap between slider and results */}
      <div className="h-8 sm:h-10 lg:h-12" />

      {/* Results Separate Box */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#050914]/80 px-6 py-12 shadow-[0_0_70px_rgba(59,130,246,0.08)] backdrop-blur-xl sm:px-8 md:px-12 md:py-14">
        <div className="results-wave-bg" />

        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">
            Proven Results
          </p>

          <h2 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Real Impact. Measurable Growth.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Here are some numbers that show the impact I&apos;ve created for
            businesses.
          </p>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {results.map(({ value, title, desc, icon: Icon, color }) => (
              <div
                key={title}
                className={`result-card result-card-${color} group rounded-2xl border border-white/10 bg-[#07111f]/70 p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2`}
              >
                <div className={`result-icon result-icon-${color}`}>
                  <Icon size={30} />
                </div>

                <div
                  className={`mt-8 font-mono-brand text-4xl font-bold result-value-${color}`}
                >
                  {value}
                </div>

                <h3 className="mt-3 font-semibold text-white">{title}</h3>

                <p className="mt-2 text-sm text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}