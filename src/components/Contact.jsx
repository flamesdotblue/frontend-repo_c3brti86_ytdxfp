import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_100%,rgba(236,72,153,0.12)_0,transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8">
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-lg bg-white/10 p-2">
            <Mail className="h-5 w-5 text-fuchsia-300" />
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl">Let’s collaborate</h2>
        </div>

        <p className="mb-8 text-white/75">
          Have a project in mind or just want to say hi? Drop a line and I’ll get back soon.
        </p>

        <form
          className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          action="mailto:hello@example.com"
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-white/80">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-fuchsia-500/40 placeholder:text-white/40 focus:border-white/20 focus:ring"
              placeholder="Ada Lovelace"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-white/80">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-fuchsia-500/40 placeholder:text-white/40 focus:border-white/20 focus:ring"
              placeholder="you@domain.com"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-white/80">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-white/10 bg-black/60 px-4 py-3 text-white outline-none ring-fuchsia-500/40 placeholder:text-white/40 focus:border-white/20 focus:ring"
              placeholder="Tell me about your idea..."
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-violet-500 px-5 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:brightness-110"
          >
            Send Message
            <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </form>
      </div>
    </section>
  );
}
