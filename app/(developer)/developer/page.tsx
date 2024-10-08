'use client';

import { useEffect, useRef } from 'react';
import Terminal from './_components/terminal';
import MobileViewAlert from './_components/mobile-view-alert';

const DeveloperPage = () => {
  const screen = useRef<HTMLDivElement>(null);

  const enterFullscreen = () => {
    const elem = screen.current;
    if (elem) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  useEffect(() => {
    const enterFullscreen = async () => {
      try {
        if (!document.fullscreenElement) {
          await document.body.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      } catch (error: any) {
        console.error('Fullscreen request failed:', error.message);
      }
    };

    enterFullscreen();

    return () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
  }, []);

  return (
    <div
      ref={screen}
      onDoubleClick={handleFullscreen}
      className="flex h-screen w-screen flex-col items-center justify-center gap-2 bg-[url('/bgWallpaper.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className='md:hidden'>
        <MobileViewAlert />
      </div>
      <Terminal />
    </div>
  );
};
export default DeveloperPage;
