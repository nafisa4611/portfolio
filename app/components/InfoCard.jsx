import { Code2 } from 'lucide-react';

export default function InfoCard() {
    return (
        <div className="bg-[#161616] border border-white/10 p-6 rounded-3xl flex flex-col justify-between">
            <Code2 className="text-blue-500 mb-4" size={32} />
            <div>
                <p className="text-3xl font-bold">450+</p>
                <p className="text-zinc-500 text-sm">GitHub Commits</p>
            </div>
        </div>
    )
}
