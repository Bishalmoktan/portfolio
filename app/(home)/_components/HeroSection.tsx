"use client"
import React from 'react';
import { ContactDialog } from './ContactDialog';
import Confetti from "react-confetti"
import { useAppContext } from '@/hooks/useAppContext';

const HeroSection = () => {
  const { showConfetti } = useAppContext();
  return (
    <>
    <div className="min-h-[60vh] flex flex-col-reverse gap-16 lg:gap-0 lg:flex-row items-center justify-between  animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-white text-4xl lg:text-7xl font-bold">
          Nice to meet you! 👋 <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Bishal Moktan"}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in Kathmandu, I'm a aspiring fullstack developer learning and building the modern web application."
          }
        </p>
        <ContactDialog />
      </div>
      <div className="relative">
        <div className="size-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="size-32 rounded-2xl bg-green-500"></div>
            <div className="size-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="size-32 rounded-2xl bg-indigo-500"></div>
            <div className="size-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div>
    </div>
    {showConfetti && <Confetti gravity={0.5} />}

    </>
  );
};
export default HeroSection;
