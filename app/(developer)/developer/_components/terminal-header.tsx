import { ActionTooltip } from '@/app/(home)/_components/ActionTooltip';
import { Undo2 } from 'lucide-react';
import Link from 'next/link';

const TerminalHeader = () => {
  return (
    <div>
      <div className='flex rounded-md bg-gray-800 px-4 py-2'>
        <div className='flex items-center gap-2'>
          <Link href={'/'} className='size-3 rounded-full bg-rose-500'></Link>
          <div className='size-3 rounded-full bg-yellow-500'></div>
          <div className='size-3 rounded-full bg-green-500'></div>
        </div>
        <div className='flex-1 text-center'>Bishal Moktan / Portfolio</div>
        <ActionTooltip label='normal mode' side='top' link='/'>
          <Undo2 />
        </ActionTooltip>
      </div>
    </div>
  );
};
export default TerminalHeader;
