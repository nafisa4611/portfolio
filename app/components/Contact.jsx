import { useState } from "react";
import { Copy, Check, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "jabinmila@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // Reduced padding for a tighter, more intentional layout
    <section id="contact" className="py-16 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        
        {/* Main CTA - Refined Typography */}
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-[var(--text)]">
            Let's build something <span className="text-blue-500">extraordinary.</span>
          </h2>
          <p className="text-[var(--text)]/60 text-lg max-w-xl mx-auto">
            Currently based in Dhaka, Bangladesh — available for worldwide collaboration.
          </p>
        </div>

        {/* Interactive Email Box - High Contrast & Interactivity */}
        <div 
          onClick={copyToClipboard}
          className="group relative inline-flex items-center gap-4 px-8 py-5 bg-[var(--card)] border border-[var(--border)] rounded-full cursor-pointer hover:border-blue-500/50 hover:bg-[var(--spot)] transition-all"
        >
          <Mail className="text-blue-400" size={24} />
          <span className="text-xl md:text-2xl font-semibold tracking-tight text-[var(--text)]">
            {email}
          </span>
          <div className="ml-4 p-3 rounded-full bg-[var(--spot)] group-hover:bg-[var(--border)] transition-colors">
            {copied ? <Check size={20} className="text-emerald-400" /> : <Copy size={20} className="text-[var(--text)]/40" />}
          </div>
          
          {/* Tooltip */}
          <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-[var(--text)] text-[var(--bg)] text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {copied ? "Copied!" : "Click to copy email"}
          </span>
        </div>

        {/* Social Grid - Uniform Spacing & Hover Styles */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8">
          <a href="https://github.com/nafisa4611" target="_blank" className="flex items-center justify-between p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-blue-500/50 transition-all group">
            <div className="flex items-center gap-3 text-[var(--text)]">
              <Github size={24} />
              <span className="font-semibold text-lg">GitHub</span>
            </div>
            <ExternalLink size={18} className="text-[var(--text)]/30 group-hover:text-blue-400 transition-colors" />
          </a>
          
          <a href="https://linkedin.com/in/nafisa-jebin-459573128" target="_blank" className="flex items-center justify-between p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)] hover:border-blue-500/50 transition-all group">
            <div className="flex items-center gap-3 text-[var(--text)]">
              <Linkedin size={24} />
              <span className="font-semibold text-lg">LinkedIn</span>
            </div>
            <ExternalLink size={18} className="text-[var(--text)]/30 group-hover:text-blue-400 transition-colors" />
          </a>

          <div className="col-span-2 md:col-span-1 flex items-center justify-center p-6 rounded-3xl bg-[var(--card)] border border-[var(--border)]">
            <span className="text-[var(--text)]/50 text-lg font-mono">+880 1764 247894</span>
          </div>
        </div>

        {/* Final Footer Note - Subtle Styling */}
        <footer className="pt-16 text-[var(--text)]/30 text-sm tracking-widest uppercase">
          &copy; 2026 Nafisa Jebin Mila — Built with Next.js & Framer Motion
        </footer>
      </div>
    </section>
  );
}