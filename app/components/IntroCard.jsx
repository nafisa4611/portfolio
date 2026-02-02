import LiveDate from './LiveDate';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

export default function IntroCard() {
  return (
    <div className="md:col-span-2 md:row-span-2 bg-[#161616] border border-white/10 p-8 rounded-3xl flex flex-col justify-center gap-4 hover:border-blue-500/50 transition-colors">
      <LiveDate />
      <h1 className="text-5xl md:text-6xl font-bold leading-tight">
        Hi, I'm <span className="text-blue-500">Mila</span>
      </h1>
      <p className="text-zinc-400 text-lg max-w-md">
        Junior Frontend Developer building accessible, high-performance digital experiences.
      </p>
      <div className="flex gap-4 mt-4">
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-zinc-200">Resume</button>
        <div className="flex gap-2">
          <Mail className="p-2 bg-zinc-800 rounded-full w-10 h-10 cursor-pointer hover:bg-zinc-700" />
          <Github className="p-2 bg-zinc-800 rounded-full w-10 h-10 cursor-pointer hover:bg-zinc-700" />
        </div>
      </div>
    </div>
  )
}
