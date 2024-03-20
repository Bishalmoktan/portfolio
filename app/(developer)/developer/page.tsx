'use client';

import { useEffect, useRef } from 'react';
import Terminal from './_components/terminal';

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
          console.log('Entered fullscreen mode');
        } else {
          document.exitFullscreen();
          console.log('Exited fullscreen mode');
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
      className="h-screen w-screen bg-[url('/bgWallpaper.jpg')] bg-cover bg-no-repeat flex justify-center items-center"
    >
      <Terminal />
    </div>
  );
};
export default DeveloperPage;
