'use client';

import {
  SiDocker,
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';
import Title from './Title';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const Skills = () => {
  const skills = [
    {
      title: 'React',
      Icon: SiReact,
    },
    {
      title: 'Nextjs',
      Icon: SiNextdotjs,
    },
    {
      title: 'Tailwind',
      Icon: SiTailwindcss,
    },
    {
      title: 'MongoDB',
      Icon: SiMongodb,
    },
    {
      title: 'Postgres',
      Icon: SiPostgresql,
    },
    {
      title: 'Prisma',
      Icon: SiPrisma,
    },
    {
      title: 'Nodejs',
      Icon: SiNodedotjs,
    },
    {
      title: 'Git',
      Icon: SiGit,
    },
    {
      title: 'Docker',
      Icon: SiDocker,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
};
export default Skills;
