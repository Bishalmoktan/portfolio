'use client';

import { FaCanadianMapleLeaf } from 'react-icons/fa6';
import { BiGitBranch } from 'react-icons/bi';
import { CornerDownRight, Folder } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useAppContext } from '@/hooks/useAppContext';
import { cn } from '@/lib/utils';

interface TerminalInputProps {
  value: string;
  disable: boolean;
  type: 'history' | 'current';
}

const TerminalInput = ({ value, disable, type }: TerminalInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState(value);
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
    <div className={cn('pt-4', type == 'current' && 'px-4')}>
      <div className='flex items-center'>
        <div className='z-20 flex gap-2 rounded-full bg-green-500 px-4 py-1'>
          <FaCanadianMapleLeaf className='size-5' />
          <p>bishal</p>
        </div>
        <div className='z-10 -ml-5 flex gap-2 rounded-full bg-blue-500 px-4 py-1 pl-6'>
          <Folder className='size-5' />
          <p>portfolio</p>
        </div>
        {value && (
          <div className='-ml-5 flex gap-2 rounded-full bg-rose-400 px-4 py-1 pl-6'>
            <BiGitBranch className='size-5' />
            <p>{value}</p>
          </div>
        )}
      </div>
      <div className='flex items-center gap-2'>
        <CornerDownRight className='size-6 text-blue-600' />
        <input
          type='text'
          className='w-full bg-transparent p-2 text-white focus:outline-none'
          placeholder='try `help` for viewing all commands'
          ref={inputRef}
          onKeyDown={handleKeyDown}
          value={type == 'current' ? input : value === 'greet' ? ' ' : value}
          onChange={(e) => setInput(e.target.value)}
          disabled={disable}
        />
      </div>
    </div>
  );
};
export default TerminalInput;
