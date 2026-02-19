
"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import TiltCard from "./TiltCard";


export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#020202] text-black dark:text-white transition-colors duration-500 px-6 md:px-16 lg:px-24 py-16">

      <ThemeToggle />

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[45%] h-[45%] bg-blue-600/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[0%] w-[35%] h-[35%] bg-indigo-600/20 blur-[160px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(140px,auto)]">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-8 md:row-span-3 rounded-[3rem] p-14 bg-white/70 dark:bg-[#0b0b0b] backdrop-blur border border-black/10 dark:border-white/10 relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs tracking-[0.35em] uppercase text-zinc-500 font-bold">
              Available for Opportunities
            </span>
          </div>

          <h1 className="text-[12vw] md:text-8xl font-black leading-[0.8] tracking-tighter mb-8">
            NAFISA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-blue-500 dark:from-zinc-200 dark:to-blue-400">
              JEBIN
            </span>
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl text-lg">
            Front-end developer specializing in React & Next.js,
            building scalable and user-focused digital experiences.
          </p>

          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full" />
        </motion.div>

        {/* EXPERIENCE */}
        <TiltCard className="md:col-span-4 md:row-span-2">
          <div className="h-full bg-white dark:bg-[#0b0b0b] border border-black/10 dark:border-white/10 rounded-[2.5rem] p-10">
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
              Experience
            </p>

            <h3 className="text-2xl font-bold mb-1">
              Front-End Developer
            </h3>

            <p className="text-blue-500 font-semibold mb-4">
              Code Prophet · 2026 — Present
            </p>

            <ul className="text-zinc-600 dark:text-zinc-400 text-sm space-y-2">
              <li>• Built reusable production components</li>
              <li>• Converted UI designs into real products</li>
              <li>• Collaborated with development team</li>
              <li>• Participated in code reviews</li>
            </ul>
          </div>
        </TiltCard>

        {/* SKILLS */}
        <TiltCard className="md:col-span-4 md:row-span-2">
          <div className="h-full bg-white dark:bg-[#0b0b0b] border border-black/10 dark:border-white/10 rounded-[2.5rem] p-10 flex flex-wrap gap-3 content-start">
            {[
              "React",
              "Next.js",
              "Redux",
              "Tailwind",
              "Node.js",
              "MongoDB",
              "Stripe",
              "Recharts",
            ].map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 text-sm font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </TiltCard>

        {/* FEATURED PROJECT */}
        <TiltCard className="md:col-span-12 md:row-span-2">
          <a
            href="https://world-mart-eight.vercel.app/"
            target="_blank"
            className="block h-full rounded-[3rem] p-14 bg-white dark:bg-[#0b0b0b] border border-black/10 dark:border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <p className="text-blue-500 text-xs uppercase tracking-widest font-bold mb-3">
                  Featured Project
                </p>

                <h2 className="text-5xl font-black mb-4">
                  World Mart
                </h2>

                <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mb-6">
                  Full-stack e-commerce platform with authentication,
                  cart management, and Stripe payment integration.
                </p>

                <div className="text-sm text-zinc-500">
                  React · Next.js · Redux · Stripe · Tailwind
                </div>
              </div>

              <div className="h-20 w-20 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center text-3xl font-bold">
                ↗
              </div>
            </div>
          </a>
        </TiltCard>

        {/* OTHER PROJECTS */}
        {[
          {
            title: "Finance Dashboard",
            desc: "Modern SaaS dashboard with analytics and charts.",
            link: "https://dashboard-ui-three-drab.vercel.app",
          },
          {
            title: "ID Card Generator",
            desc: "Excel-based automated ID card generation tool.",
            link: "https://id-card-generator-beta.vercel.app",
          },
          {
            title: "Landing Page",
            desc: "Pixel-perfect responsive marketing website.",
            link: "https://postivus-landing-page-henna.vercel.app",
          },
        ].map((p) => (
          <TiltCard key={p.title} className="md:col-span-4">
            <a
              href={p.link}
              target="_blank"
              className="block h-full bg-white dark:bg-[#0b0b0b] border border-black/10 dark:border-white/10 rounded-[2rem] p-8"
            >
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                {p.desc}
              </p>
            </a>
          </TiltCard>
        ))}

        {/* CONTACT CTA */}
        <TiltCard className="md:col-span-12">
          <div className="rounded-[2rem] p-10 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30">
            <h3 className="text-2xl font-semibold mb-6">
              Let’s Build Something Great Together
            </h3>

            <div className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <p>📞 +880 1764 247894</p>
              <p>✉ jabinmila@gmail.com</p>
              <p>🔗 linkedin.com/in/nafisa-jebin-459573128</p>
              <p>💻 github.com/nafisa4611</p>
            </div>
          </div>
        </TiltCard>

      </div>
    </main>
  );
}
