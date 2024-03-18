import {
  SiCloudflare,
  SiCss3,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
} from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio',
      tech: [SiNextdotjs, SiTailwindcss, SiPrisma, SiMongodb],
      link: '#',
      cover: '/project-1.png',
      background: 'bg-indigo-500',
    },
    {
      title: 'Blogging Website',
      tech: [SiReact, SiTailwindcss, SiPrisma, SiPostgresql, SiCloudflare],
      link: 'https://blog-serverless-backend.vercel.app/',
      cover: '/project-2.png',
      background: 'bg-green-500',
    },
    {
      title: 'Renewable Resource',
      tech: [SiNextdotjs, SiCss3],
      link: 'https://renewable-resources.vercel.app/',
      cover: '/project-3.png',
      background: 'bg-indigo-500',
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-4">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index} target="_blank">
              <div className={cn('p-5 rounded-md', project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full"
                >
                  <div className="space-y-4 bg-blend-darken">
                    <h1 className="font-bold text-2xl">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => (
                        <Icon className="size-8" key={index} />
                      ))}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
