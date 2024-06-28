import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { projectsCommand } from '@/app/data';

const Projects = () => {
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-4">
        {projectsCommand.map((project, index) => {
          return (
            <Link href={project.link} key={index} target="_blank">
              <div className={cn('p-5 rounded-md ', project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full h-[40vh]"
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
