'use client';
import React from 'react';
import { ContactDialog } from './ContactDialog';
import Confetti from 'react-confetti';
import { useAppContext } from '@/hooks/useAppContext';

const HeroSection = () => {
  const { showConfetti } = useAppContext();
  return (
    <>
      <div className='flex min-h-[60vh] animate-move-up flex-col-reverse items-center justify-between gap-16 lg:flex-row lg:gap-0'>
        <div className='space-y-10 text-center lg:text-left'>
          <h1 className='text-4xl font-bold text-white lg:text-7xl'>
            Nice to meet you! 👋 <br />
            <span className='underline decoration-green-500 underline-offset-8'>
              {"I'm Bishal Moktan"}
            </span>
          </h1>
          <p className='text-lg text-gray-300 md:w-96'>
            {
              "Based in Kathmandu, I'm a fullstack developer learning and building the modern web application."
            }
          </p>
          <ContactDialog />
        </div>
        <div className='relative'>
          <div className='relative size-72 -rotate-[30deg] space-y-3'>
            <div className='flex translate-x-8 gap-3'>
              <div className='size-32 rounded-2xl bg-green-500'></div>
              <div className='size-32 rounded-full bg-indigo-500'></div>
            </div>
            <div className='flex -translate-x-8 gap-3'>
              <div className='size-32 rounded-2xl bg-indigo-500'></div>
              <div className='size-32 rounded-full bg-green-500'></div>
            </div>
            <div className='glow absolute right-1/2 top-[40%] -z-10'></div>
          </div>
        </div>
      </div>
      {showConfetti && <Confetti gravity={0.5} />}
    </>
  );
};
export default HeroSection;
