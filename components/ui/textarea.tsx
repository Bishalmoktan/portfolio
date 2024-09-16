'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100;
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className='group/input rounded-lg p-[2px] transition duration-300'
      >
        <textarea
          className={cn(
            `placeholder-text-neutral-600 duration-400 flex h-24 w-full rounded-md border-none bg-zinc-800 px-3 py-2 text-sm text-white shadow-[0px_0px_1px_1px_var(--neutral-700)] shadow-input transition file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none`,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
TextArea.displayName = 'TextArea';

export { TextArea };
