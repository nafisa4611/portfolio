

export default function TechStackCard() {
    return (
        <div className="md:col-span-2 bg-[#161616] border border-white/10 p-6 rounded-3xl">
            <h3 className="text-sm font-mono text-zinc-500 mb-6 uppercase tracking-wider">Tech Stack</h3>
            <div className="grid grid-cols-3 gap-4">
                {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Node.js'].map((skill) => (
                    <div key={skill} className="bg-zinc-900/50 border border-white/5 p-3 rounded-xl text-center text-sm hover:scale-105 transition-transform">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    )
}
