'use client';

import { FaCanadianMapleLeaf } from 'react-icons/fa6';
import { BiGitBranch } from 'react-icons/bi';
import { CornerDownRight, Folder } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useAppContext } from '@/app/hooks/useAppContext';

const TerminalInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState('');
  const { setCmd } = useAppContext();

  useEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setCmd(input);
      setInput('');
    }
  };
  return (
    <div className="p-4">
      <div className="flex  items-center">
        <div className="bg-green-500 py-1 px-4 rounded-full z-20 flex gap-2">
          <FaCanadianMapleLeaf className="size-5" />
          <p>bishal</p>
        </div>
        <div className="bg-blue-500 py-1 px-4 pl-6 rounded-full -ml-5 z-10 flex gap-2">
          <Folder className="size-5" />
          <p>portfolio</p>
        </div>
        <div className="bg-rose-400 py-1 px-4 pl-6 rounded-full -ml-5 flex gap-2">
          <BiGitBranch className="size-5" />
          <p>ls</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <CornerDownRight className="size-6 text-blue-600" />
        <input
          type="text"
          className="bg-transparent p-2 text-white  focus:outline-none w-full"
          placeholder="try help for viewing all commands"
          ref={inputRef}
          onKeyDown={handleKeyDown}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};
export default TerminalInput;
