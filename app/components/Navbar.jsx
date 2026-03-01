"use client";

import { motion } from "framer-motion";
import { Home, FolderCode, User, Mail, FileDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "#", icon: <Home size={18} /> },
    { name: "Projects", href: "#projects", icon: <FolderCode size={18} /> },
    { name: "Experience", href: "#experience", icon: <User size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
];

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 20, x: "-50%", opacity: 1 }}
            // 1. FIXED: Changed bg-white/5 to bg-[var(--card)] and border-white/10 to var(--border)
            className="fixed top-0 left-1/2 z-[100] flex items-center gap-1 p-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] backdrop-blur-md shadow-2xl"
        >
            <ThemeToggle />
            
            {navItems.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    // 2. FIXED: Changed text-white/60 to [var(--text)]/60 and hover colors
                    className="group relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[var(--text)]/60 transition-all hover:text-[var(--text)] hover:bg-[var(--spot)]"
                >
                    {item.icon}
                    <span className="hidden md:block">{item.name}</span>

                    {/* Subtle hover indicator */}
                    <motion.span
                        className="absolute inset-0 rounded-full bg-[var(--spot)] -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                </a>
            ))}
            
            {/* 3. FIXED: Changed border color */}
            <div className="h-6 w-[1px] bg-[var(--border)] mx-2" />

            <a
                href="/resume.pdf"
                download="Nafisa_Jebin_Mila_Resume.pdf"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--text)] text-[var(--bg)] text-sm font-bold hover:opacity-90 transition-all"
            >
                <FileDown size={16} />
                <span>Resume</span>
            </a>
        </motion.nav>
    );
}