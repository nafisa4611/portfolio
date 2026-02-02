import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function ProjectCard() {
    return (
        <div className="md:col-span-3 min-h-[300px] bg-gradient-to-br from-blue-900/20 to-zinc-900 border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <h3 className="text-sm font-mono text-blue-400 mb-2 uppercase">Featured Project</h3>
                    <h2 className="text-3xl font-bold mb-4">AI Dashboard System</h2>
                    <p className="text-zinc-400 mb-6 max-w-sm">
                        Real-time data visualization with Next.js and high-speed API integration.
                    </p>
                </div>
                <Link href="https://world-mart-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <button className="w-fit bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all">
                        Live Demo <ExternalLink size={16} />
                    </button>
                </Link>
            </div>

            {/* Project Screenshot Mockup */}
            <div className="absolute right-[-10%] bottom-[-10%] w-[60%] h-[80%] hidden md:block">
                <div className="relative w-full h-full rounded-tl-2xl border-l-4 border-t-4 border-white/10 overflow-hidden shadow-2xl transition-transform group-hover:-translate-x-4 group-hover:-translate-y-4 duration-500">
                    <Image
                        src="/project-mockup.png"
                        alt="AI Dashboard Preview"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
