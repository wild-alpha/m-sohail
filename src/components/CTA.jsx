import { ArrowRight, Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function CTA() {
  return (
    <footer id="contact" className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-5">
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#050914]/80 shadow-[0_0_60px_rgba(59,130,246,0.12)] backdrop-blur-xl">
        <div className="grid gap-8 p-6 sm:p-8 md:p-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          {/* Left Content */}
          <div>
            <h2 className="max-w-xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
              Have a project in mind or want to discuss growth opportunities?
              Let&apos;s connect and create something impactful.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:hello@msohail.com"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.35)] transition hover:scale-[1.02]"
              >
                Let&apos;s Talk
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="mailto:hello@msohail.com"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white transition hover:border-blue-400/40 hover:bg-white/[0.06]"
              >
                Send Email
                <Mail size={18} className="text-blue-400" />
              </a>
            </div>
          </div>

          {/* Right Cube */}
<div className="relative flex min-h-[280px] items-center justify-center overflow-hidden md:min-h-[340px]">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.28),transparent_62%)]" />

  {/* Background particles */}
  <div className="cube-bg-particles">
    {Array.from({ length: 34 }).map((_, index) => (
      <span key={index} />
    ))}
  </div>

  {/* Orbit lines behind cube */}
  <div className="orbit-back orbit-back-1" />
  <div className="orbit-back orbit-back-2" />
  <div className="orbit-back orbit-back-3" />

  {/* Cube */}
  <div className="cube-scene">
    <div className="premium-cube">
      <div className="cube-face cube-face-front">
        <div className="cube-grid" />
        <div className="cube-inner-dots" />

        <div className="ms-face-logo">
          M<span>S</span>
        </div>
      </div>

      <div className="cube-face cube-face-left">
        <div className="cube-grid" />
        <div className="cube-inner-dots" />
      </div>

      <div className="cube-face cube-face-top">
        <div className="cube-grid" />
        <div className="cube-inner-dots" />
      </div>
    </div>

    <div className="bottom-light" />
  </div>

  {/* Very soft front orbit lines */}
  <div className="orbit-front orbit-front-1" />
  <div className="orbit-front orbit-front-2" />
</div>

  </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 px-6 py-7 sm:px-8 md:px-12">
          <div className="grid gap-8 text-sm text-zinc-400 md:grid-cols-3 md:items-center">
            <div>
              <div className="font-display text-3xl font-black text-white">
                M
                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                  S
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm">
                © 2026 Muhammad Sohail. All rights reserved.
              </p>
            </div>

            <div className="md:text-center">
              <p className="mb-4 text-xs font-semibold text-blue-400">
                Let&apos;s Connect
              </p>

              <div className="flex gap-4 md:justify-center">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-blue-500"
                >
                  <FaLinkedin size={17} />
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-blue-500"
                >
                  <FaTwitter size={17} />
                </a>

                <a
                  href="#"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-blue-500"
                >
                  <FaGithub size={17} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-blue-500"
                >
                  <FaInstagram size={17} />
                </a>
              </div>
            </div>

            <div className="md:text-right">
              <p className="mb-4 text-xs font-semibold text-blue-400">
                Email Me
              </p>

              <a
                href="mailto:hello@msohail.com"
                className="inline-flex items-center gap-3 text-zinc-300 transition hover:text-white"
              >
                <Mail size={18} className="text-blue-400" />
                hello@msohail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}