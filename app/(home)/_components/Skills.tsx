'use client';

import { skillsCommand } from '@/app/data';
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const Skills = () => {
  return (
    <div className='mx-auto max-w-5xl px-8'>
      <Title
        text='Skills 🔪'
        className='flex -rotate-6 flex-col items-center justify-center'
      />
      <HoverEffect items={skillsCommand} />
    </div>
  );
};
export default Skills;
