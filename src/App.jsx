import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="h-2 w-2 animate-ping rounded-full bg-fuchsia-400" />
          <span className="text-sm font-semibold tracking-wide">Flames • Blue</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-lg bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/20"
        >
          Let’s Talk
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-white/60 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="text-white/50">Built with love, gradients, and cosmic vibes.</p>
      </div>
    </footer>
  );
}
