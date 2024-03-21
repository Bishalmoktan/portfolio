'use client';

import { skillsCommand } from '@/app/data';
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skillsCommand} />
    </div>
  );
};
export default Skills;
