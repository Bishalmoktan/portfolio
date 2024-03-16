import HeroSection from './_components/HeroSection';
import Navbar from './_components/Navbar';
import Projects from './_components/Projects';
import Skills from './_components/Skills';

export default function Home() {
  return (
    <div className="min-h-screen bg-black space-y-20 overflow-hidden">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5">
        <Skills />
        <Projects />
        <div className="border-t mt-10">
          <Navbar className="flex-col gap-4" />
        </div>
      </div>
    </div>
  );
}
