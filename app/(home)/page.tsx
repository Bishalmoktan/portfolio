import HeroSection from './_components/HeroSection';
import Navbar from './_components/Navbar';
import Projects from './_components/Projects';
import Skills from './_components/Skills';

export default function Home() {
  return (
    <div className='min-h-screen space-y-20 overflow-hidden bg-black'>
      <div className='relative bg-black bg-grid-white/[0.05]'>
        <div className='mx-auto max-w-7xl p-5'>
          <Navbar isFooter={false} />
          <HeroSection />
        </div>
      </div>
      <div className='mx-auto max-w-7xl p-5'>
        <Skills />
        <Projects />
        <div className='mt-10 border-t'>
          <Navbar isFooter={true} className='flex-col gap-4' />
        </div>
      </div>
    </div>
  );
}
