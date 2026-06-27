import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function CTA() {
  return (
    <footer id="contact" className="mx-auto max-w-7xl px-5 pb-8 pt-10">
      <div className="glass grid gap-10 rounded-3xl p-8 md:p-12 lg:grid-cols-[1fr_.75fr]">
        <div>
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Let’s Build Something{" "}
            <span className="gradient-text">Amazing Together</span>
          </h2>

          <p className="mt-5 max-w-xl text-zinc-400">
            Have a project in mind or want to discuss growth opportunities?
            Let’s connect and create something impactful.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:hello@msohail.com"
              className="glow-button inline-flex items-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold"
            >
              Let’s Talk <ArrowRight size={18} />
            </a>

            <a
              href="mailto:hello@msohail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-4 text-sm font-semibold hover:bg-white/5"
            >
              Send Email <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="relative flex min-h-[260px] items-center justify-center">
          <div className="cube relative h-36 w-36">
            <div className="cube-face translate-z-[72px]" />
            <div className="cube-face rotate-y-90 translate-z-[72px]" />
            <div className="cube-face rotate-x-90 translate-z-[72px]" />
          </div>

          <div className="absolute font-display text-4xl font-bold">
            M<span className="gradient-text">S</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-5 py-8 text-sm text-zinc-500">
        <p>© 2026 Muhammad Sohail. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-white" aria-label="LinkedIn">
            <FaLinkedin size={18} />
          </a>

          <a href="#" className="hover:text-white" aria-label="GitHub">
            <FaGithub size={18} />
          </a>

          <a
            href="mailto:hello@msohail.com"
            className="hover:text-white"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}