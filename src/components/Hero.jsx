import Image from "next/image";
import {
  ArrowRight,
  Download,
  BarChart3,
  Bot,
  Search,
  Sparkles,
} from "lucide-react";
import { FaMeta } from "react-icons/fa6";
import { SiGoogleads, SiNextdotjs } from "react-icons/si";

const tags = [
  {
    label: "SEO",
    icon: Search,
    pos: "left-[48%] top-[6%]",
    animation: "tag-float-1",
  },
  {
    label: "Google Ads",
    icon: SiGoogleads,
    pos: "right-[2%] top-[30%]",
    animation: "tag-float-2",
  },
  {
    label: "AI Automation",
    icon: Bot,
    pos: "left-[4%] top-[46%]",
    animation: "tag-float-3",
  },
  {
    label: "Next.js",
    icon: SiNextdotjs,
    pos: "right-[11%] bottom-[23%]",
    animation: "tag-float-4",
  },
  {
    label: "Meta Ads",
    icon: FaMeta,
    pos: "left-[18%] bottom-[13%]",
    animation: "tag-float-5",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    pos: "right-[30%] bottom-[4%]",
    animation: "tag-float-6",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto max-w-7xl px-4 pb-6 pt-4 sm:px-5 lg:pb-8"
    >
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#050914]/80 shadow-[0_0_70px_rgba(59,130,246,0.12)] backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(59,130,246,0.18),transparent_42%),radial-gradient(circle_at_85%_30%,rgba(139,92,246,0.16),transparent_35%)]" />

        <div className="relative grid min-h-[680px] items-center gap-8 px-6 py-10 sm:px-8 md:px-12 lg:grid-cols-[0.85fr_1.15fr] lg:min-h-[620px] lg:py-12 xl:min-h-[650px]">
          {/* Left Content */}
          <div className="z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.12)] sm:text-xs">
              <Sparkles size={13} />
              AI Growth Marketing Engineer
            </div>

            <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-6xl">
              I Build Systems That Generate{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                Customers.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
              I combine AI, data, and performance marketing to build scalable
              growth systems that drive real business results — not just vanity
              metrics.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#results"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.35)] transition hover:scale-[1.02]"
              >
                View My Results
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="/resume.pdf"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-zinc-200 transition hover:border-blue-400/40 hover:bg-white/[0.06]"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hero-visual-3d relative z-10 mx-auto aspect-square w-full max-w-[620px]">
            {/* background particles */}
            <div className="hero-space-dots">
              {Array.from({ length: 34 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>

            {/* orbit lines */}
            <div className="hero-orbit hero-orbit-1" />
            <div className="hero-orbit hero-orbit-2" />
            <div className="hero-orbit hero-orbit-3" />
            <div className="hero-orbit hero-orbit-4" />

            {/* 3D Globe Image */}
            <div className="hero-globe-image-wrap">
              <Image
                src="/images/hero-globe-img.webp"
                alt="3D digital world map globe"
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Floating tags */}
            {tags.map(({ label, icon: Icon, pos, animation }) => (
              <div
                key={label}
                className={`absolute ${pos} ${animation} hero-tag flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-zinc-100`}
              >
                <Icon size={18} className="text-blue-400" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}