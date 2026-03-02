"use client";

import { motion } from "framer-motion";
import BackgroundFX from "./components/BackgroundFX";
import MagneticButton from "./components/MagneticButton";
import Navbar from "./components/Navbar";
import { ArrowUpRight, Zap } from "lucide-react";
import Contact from "./components/Contact";

const projects = [
  {
    title: "Math Adventure",
    desc: "A gamified math problem generator for kids, utilizing Vue 3, Pinia for state management, and Tailwind CSS with custom theme animations.",
    link: "https://kids-math-app-theta.vercel.app/",
    tags: ["Vue 3", "Pinia", "TypeScript", "Tailwind"],
    size: "md:col-span-2",
  },
  {
    title: "World Mart",
    desc: "A full-scale e-commerce engine utilizing Stripe edge-function webhooks for secure, asynchronous payment processing and optimistic UI updates.",
    link: "https://world-mart-eight.vercel.app/",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    size: "md:col-span-2",
  },
  {
    title: "Finance Dashboard",
    desc: "Real-time SaaS analytics implementing server-side caching and complex data visualization with Recharts.",
    link: "https://dashboard-ui-three-drab.vercel.app",
    tags: ["Recharts", "Next.js", "Lucide"],
    size: "md:col-span-1",
  },
  {
    title: "ID Card Generator",
    desc: "Automation tool for high-volume asset generation using ExcelJS and Canvas API for client-side rendering.",
    link: "https://id-card-generator-beta.vercel.app",
    tags: ["ExcelJS", "Canvas API"],
    size: "md:col-span-1",
  },
  {
    title: "Protivious Landing",
    desc: "High-performance marketing site focusing on micro-interactions using Framer Motion and GSAP.",
    link: "https://postivus-landing-page-henna.vercel.app",
    tags: ["Framer Motion", "GSAP"],
    size: "md:col-span-2",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <Navbar />
      <BackgroundFX />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 space-y-24">
        
        {/* HERO SECTION */}
        <section className="relative pt-10 pb-10 text-center space-y-8">
          {/* ...Status Badge... */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--card)] border border-[var(--border)] backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wide uppercase text-emerald-400/90">
              Available for new opportunities
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.95]"
            >
              <span className="text-[var(--text)]">
                Nafisa Jebin Mila
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg md:text-xl text-[var(--text)]/60 max-w-2xl mx-auto leading-relaxed"
            >
              Frontend Engineer specializing in <span className="text-[var(--text)] font-semibold">React & Next.js</span>.
              Architecting scalable interfaces at <span className="text-[var(--text)] font-semibold">Code Prophet</span>.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <MagneticButton>
              <a href="#contact" className="px-8 py-4 bg-[var(--text)] text-[var(--bg)] font-bold rounded-full hover:opacity-90 transition-all flex items-center gap-2">
                Let&apos;s Connect
              </a>
            </MagneticButton>

            <MagneticButton>
              <a href="#projects" className="px-8 py-4 bg-[var(--card)] border border-[var(--border)] text-[var(--text)] font-medium rounded-full hover:border-[var(--text)]/30 transition-all">
                View Systems
              </a>
            </MagneticButton>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-12">
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-sm font-bold tracking-widest uppercase text-blue-400">Featured Work</h2>
            <p className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--text)]">Systems Architecture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {projects.map((p, i) => (
              <motion.a
                key={i}
                href={p.link}
                target="_blank"
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 ${p.size}`}
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold text-[var(--text)] group-hover:text-blue-400 transition-colors">{p.title}</h3>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--text)]">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                    <p className="mt-4 text-[var(--text)]/60 leading-relaxed max-w-[90%]">{p.desc}</p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-[var(--spot)] border border-[var(--border)] rounded-lg text-[var(--text)]/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute -right-10 -top-10 h-32 w-32 bg-blue-500/0 blur-[50px] group-hover:bg-blue-500/10 transition-all" />
              </motion.a>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-sm font-bold tracking-widest uppercase text-blue-400">Career Path</h2>
            <p className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[var(--text)]">Professional Trajectory</p>
          </div>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--border)] before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[var(--border)] bg-[var(--bg)] z-10 absolute left-0 md:left-1/2 md:-translate-x-1/2 shadow-lg group-hover:border-blue-500/50 transition-colors">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[45%] glass p-8 rounded-3xl group-hover:border-blue-500/30 transition-all">
                <div className="flex flex-col mb-6">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                        <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Current Impact</span>
                        <h3 className="text-2xl font-bold text-[var(--text)] mt-1">Frontend Engineer</h3>
                        <p className="text-[var(--text)]/70 font-medium">Code Prophet • Jan 2026 – Present</p>
                    </div>
                 
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                        <Zap size={14} />
                        Lighthouse 98
                    </div>
                  </div>
                </div>

                <ul className="space-y-4 text-sm text-[var(--text)]/70 leading-relaxed">
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1">▹</span>
                    <span>Optimized core web vitals for flagship applications, achieving a <span className="text-[var(--text)] font-semibold">98+ Lighthouse score</span> through code-splitting and image optimization.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1">▹</span>
                    <span>Collaborated on the transition from a monolithic architecture to <span className="text-[var(--text)] font-semibold">Next.js App Router</span>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-500 mt-1">▹</span>
                    <span>Mentored junior developers through rigorous code reviews.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <Contact />
      </div>
    </main>
  );
}