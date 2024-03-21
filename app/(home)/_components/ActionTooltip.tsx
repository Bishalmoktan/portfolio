'use client';

import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface ActionTooltipProps {
  label: string;
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  link: '/' | '/developer';
}

export const ActionTooltip = ({
  label,
  children,
  side,
  align,
  link,
}: ActionTooltipProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    let toastId = toast.success(
      `Initiating ${link === '/' ? 'Normal' : 'Developer'} mode`,
      {
        duration: 2000,
        position: 'top-center',
      }
    );
    setTimeout(() => {
      router.push(link);
    }, 500);
  };

  return (
    <div className="cursor-pointer" onClick={handleNavigation}>
      <TooltipProvider>
        <Tooltip delayDuration={50}>
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          <TooltipContent side={side} align={align}>
            <p className="font-semibold text-sm capitalize">
              {label.toLowerCase()}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
