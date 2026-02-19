import IntroCard from './IntroCard';
import TechStackCard from './TechStackCard';
import ProjectCard from './ProjectCard';
import InfoCard from './InfoCard';

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4">
                <IntroCard />
                <TechStackCard />
                <ProjectCard />
               <InfoCard />
            </div>

        </main>
    );
}