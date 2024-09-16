import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { IconType } from 'react-icons';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    Icon: IconType;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn('grid grid-cols-2 py-10 lg:grid-cols-3', className)}>
      {items.map((item, idx) => {
        const Icon = item.Icon;
        return (
          <div
            key={idx}
            className='group relative block h-full w-full p-2'
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className='absolute inset-0 block h-full w-full rounded-lg bg-slate-800/[0.8]'
                  layoutId='hoverBackground'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className='relative z-20 w-full cursor-pointer overflow-hidden rounded-md bg-black ring-green-500 transition-all duration-500 group-hover:ring-2'>
              <div className='relative z-50 space-y-5 py-10'>
                <Icon className='mx-auto size-8' />
                <p className='text-center text-2xl font-bold text-gray-300'>
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
