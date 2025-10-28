import React from 'react';
import { Code, Cpu, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.12)_0,transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.12)_0,transparent_35%)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-10 flex items-center justify-between gap-6">
          <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Available for freelance</span>
        </div>
        <p className="max-w-3xl text-white/80">
          I’m a multidisciplinary developer focused on crafting delightful user interfaces, resilient systems, and performant experiences. My work blends sleek aesthetics with practical engineering, bringing ideas to life across web, 3D, and emerging tech.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <Feature icon={<Sparkles className=\"h-5 w-5 text-fuchsia-400\" />} title="Design x Code">
            Thoughtful interfaces, motion, and micro‑interactions that feel alive.
          </Feature>
          <Feature icon={<Cpu className=\"h-5 w-5 text-cyan-300\" />} title="Systems Thinking">
            Scalable patterns, clean architecture, and a love for developer experience.
          </Feature>
          <Feature icon={<Code className=\"h-5 w-5 text-violet-400\" />} title="Modern Stack">
            React, TypeScript, 3D on the web, and APIs that ship real value.
          </Feature>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, children }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
      <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-black/40 px-3 py-2">
        {icon}
        <span className="text-sm font-semibold text-white/90">{title}</span>
      </div>
      <p className="text-sm text-white/70">{children}</p>
    </div>
  );
}
