import HeroSection from './_components/HeroSection';
import Navbar from './_components/Navbar';
import Projects from './_components/Projects';
import Skills from './_components/Skills';

export default function Home() {
  return (
    <div className="min-h-screen bg-black space-y-20 overflow-hidden">
      <div className="bg-black   bg-grid-white/[0.05] relative">
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar isFooter={false} />
          <HeroSection />
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5">
        <Skills />
        <Projects />
        <div className="border-t mt-10">
          <Navbar isFooter={true} className="flex-col gap-4" />
        </div>
      </div>
    </div>
  );
}
