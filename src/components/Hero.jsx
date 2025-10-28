import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays for depth (don't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 pt-28 pb-24 sm:px-8 md:pt-40">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-fuchsia-400" />
          Futuristic • Cyber Aesthetic
        </span>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          Building immersive digital experiences
          <span className="block bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
            at the intersection of art & code
          </span>
        </h1>

        <p className="max-w-2xl text-base text-white/80 sm:text-lg">
          I craft interactive interfaces, elegant systems, and playful 3D moments. Explore selected work and let’s create something remarkable together.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Contact
            <Mail className="h-4 w-4" />
          </a>
          <div className="ml-2 inline-flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/15 bg-white/5 p-3 text-white/90 transition hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/15 bg-white/5 p-3 text-white/90 transition hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
