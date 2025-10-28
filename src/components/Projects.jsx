import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Nebula UI Kit',
    description:
      'A component system exploring neon gradients, depth, and motion for next‑gen dashboards.',
    link: '#',
    tags: ['React', 'Tailwind', 'Motion'],
    accent: 'from-fuchsia-500/20 to-violet-500/20',
  },
  {
    title: 'Hologram Gallery',
    description:
      'Experimental 3D gallery with interactive scenes and spatial audio cues.',
    link: '#',
    tags: ['Three.js', 'Spline', 'WebGL'],
    accent: 'from-cyan-400/20 to-indigo-500/20',
  },
  {
    title: 'Quantum Notes',
    description:
      'A minimal, blazing‑fast notes app with offline sync and AI snippets.',
    link: '#',
    tags: ['Vite', 'PWA', 'AI'],
    accent: 'from-emerald-400/20 to-cyan-400/20',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(139,92,246,0.12)_0,transparent_70%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Selected Projects</h2>
            <p className="mt-2 text-white/70">A few highlights from recent explorations and client work.</p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur transition hover:bg-white/10 md:inline-flex"
          >
            Get in touch
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className={`group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${p.accent} p-6 transition hover:border-white/20`}
            >
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-14 rounded-full bg-white/10 blur-3xl" />
              <div className="flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <span className="rounded-md bg-white/10 p-2 text-white/80 transition group-hover:bg-white/20">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mb-4 text-sm text-white/70">{p.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-white/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
