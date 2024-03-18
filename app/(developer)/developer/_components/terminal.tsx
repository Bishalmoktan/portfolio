'use client';

import { useAppContext } from '@/app/hooks/useAppContext';
import TerminalInput from './terminal-input';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const Terminal = () => {
  const { cmd } = useAppContext();
  useEffect(() => {
    const result = document.getElementById('result')!;
    const root = createRoot(result);
    switch (cmd) {
      case 'help':
        if (result) {
          root.render(
            <div>
              <p>bio</p>
              <p>skills</p>
              <p>projects</p>
            </div>
          );
        }
        break;
      default:
        if (result) {
          root.render(
            <div>
              <p>Invalid command</p>
            </div>
          );
        }
    }
  }, [cmd]);
  return (
    <div className="w-[60vw]">
      <div>
        <div className="bg-gray-800 flex p-2 rounded-md">
          <div className="flex gap-2 items-center">
            <div className="size-3 bg-rose-500 rounded-full"></div>
            <div className="size-3 bg-yellow-500 rounded-full"></div>
            <div className="size-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">Bishal Moktan / Portfolio</div>
        </div>
      </div>
      <div className="border-1 border-gray-800 h-[60vh] w-full bg-black bg-opacity-70">
        <div className="px-4" id="result"></div>
        <TerminalInput />
      </div>
    </div>
  );
};
export default Terminal;
