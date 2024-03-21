'use client';
import { ScrollArea } from '@/components/ui/scroll-area';
import TerminalInput from './terminal-input';
import { useAppContext } from '@/app/hooks/useAppContext';
import { useEffect, useRef, useState } from 'react';
import Help from './help';
import Bio from './bio';
import Skills from './skills';
import Projects from './projects';
import Contact from './contact';

const TerminalBody = () => {
  const { cmd, setCmd } = useAppContext();
  const [result, setResult] = useState({
    content: (
      <div className="">
        <TerminalInput value={' '} disable={true} type="history" />
        <h1 className="text-5xl">Hi there!</h1>
      </div>
    ),
  });

  const scroll = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [result]);

  useEffect(() => {
    let newContent;
    if (cmd !== '') {
      switch (cmd) {
        case 'help':
          newContent = {
            content: (
              <div>
                {result.content}
                <TerminalInput value={cmd} disable={true} type="history" />
                <Help />
              </div>
            ),
          };
          setResult(newContent);
          setCmd('');
          break;

        case 'clear':
          setResult({ content: <div></div> });
          setCmd('');
          break;
        case 'bio':
          setResult({
            content: (
              <div>
                {result.content}
                <TerminalInput value={cmd} disable={true} type="history" />
                <Bio />
              </div>
            ),
          });
          setCmd('');
          break;
        case 'skills':
          setResult({
            content: (
              <div>
                {result.content}
                <TerminalInput value={cmd} disable={true} type="history" />
                <Skills />
              </div>
            ),
          });
          setCmd('');
          break;
        case 'projects':
          setResult({
            content: (
              <div>
                {result.content}
                <TerminalInput value={cmd} disable={true} type="history" />
                <Projects />
              </div>
            ),
          });
          setCmd('');
          break;
        case 'contact':
          setResult({
            content: (
              <div>
                {result.content}
                <TerminalInput value={cmd} disable={true} type="history" />
                <Contact />
              </div>
            ),
          });
          setCmd('');
          break;
        default:
          newContent = {
            content: (
              <div>
                {result.content}
                <TerminalInput value={cmd} disable={true} type="history" />
                <div>
                  <p className="text-rose-500">Invalid Command</p>
                  <p>Please try `help` to see the command</p>
                </div>
              </div>
            ),
          };
          setResult(newContent);
          setCmd('');

          break;
      }
    }
  }, [cmd]);
  return (
    <ScrollArea className="bg-black bg-opacity-70 border-1 border-gray-800 h-[60vh] w-full ">
      <div className="">
        <div className="px-4">{result.content}</div>
        <TerminalInput value="" disable={false} type="current" />
      </div>
      <div ref={scroll}></div>
    </ScrollArea>
  );
};
export default TerminalBody;
