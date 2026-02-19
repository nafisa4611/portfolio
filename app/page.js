"use client";

import { motion } from "framer-motion";
import BackgroundFX from "./components/BackgroundFX";
import ThemeToggle from "./components/ThemeToggle";
import TiltCard from "./components/TiltCard";
import MagneticButton from "./components/MagneticButton";

const projects = [
  {
    title: "World Mart",
    desc: "Full ecommerce with Stripe, cart & authentication.",
    link: "https://world-mart-eight.vercel.app/",
  },
  {
    title: "Finance Dashboard",
    desc: "Modern SaaS analytics UI with charts.",
    link: "https://dashboard-ui-three-drab.vercel.app",
  },
  {
    title: "ID Card Generator",
    desc: "Excel-based ID card automation tool.",
    link: "https://id-card-generator-beta.vercel.app",
  },
  {
    title: "Protivious Landing",
    desc: "Responsive marketing landing experience.",
    link: "https://postivus-landing-page-henna.vercel.app",
  },
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <BackgroundFX />
      <ThemeToggle />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-32">

        {/* HERO */}
        <section className="text-center space-y-8">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold tracking-tight"
          >
            Nafisa Jebin Mila
          </motion.h1>

          <p className="text-xl opacity-70 max-w-2xl mx-auto">
            Frontend Developer specializing in React & Next.js —
            building scalable, high-performance interfaces.
          </p>

          <div className="flex gap-4 justify-center">
            <MagneticButton>Contact Me</MagneticButton>
            <MagneticButton>View Projects</MagneticButton>
          </div>

        </section>

        {/* PROJECTS */}
        <section>

          <h2 className="text-3xl font-semibold mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {projects.map((p, i) => (
              <TiltCard key={i}>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href={p.link}
                  target="_blank"
                  className="block glass p-8 rounded-2xl shadow-2xl"
                >
                  <h3 className="text-2xl font-bold mb-3">{p.title}</h3>
                  <p className="opacity-70">{p.desc}</p>
                </motion.a>
              </TiltCard>
            ))}

          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="space-y-6 text-center">

          <h2 className="text-3xl font-semibold">
            Experience
          </h2>

          <div className="glass p-10 rounded-2xl max-w-3xl mx-auto">

            <h3 className="text-xl font-bold">
              Frontend Developer — Code Prophet
            </h3>

            <p className="opacity-60 mb-4">
              Jan 2026 – Present
            </p>

            <p className="opacity-80">
              Developed reusable UI components, collaborated on live
              projects, participated in reviews and feature planning.
            </p>

          </div>
        </section>

        {/* CONTACT */}
        <section className="text-center space-y-4">

          <h2 className="text-3xl font-semibold">
            Contact
          </h2>

          <p>📞 +880 1764 247894</p>
          <p>✉ jabinmila@gmail.com</p>
          <p>GitHub: github.com/nafisa4611</p>
          <p>LinkedIn: linkedin.com/in/nafisa-jebin-459573128</p>

        </section>

      </div>
    </main>
  );
}
