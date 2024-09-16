import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { projectsCommand } from '@/app/data';

const Projects = () => {
  return (
    <div className='p-5 py-10 sm:p-0'>
      <Title
        text='Projects 🎨'
        className='flex rotate-6 flex-col items-center justify-center'
      />
      <div className='grid grid-cols-1 gap-4 pt-20 sm:grid-cols-2'>
        {projectsCommand.map((project, index) => {
          return (
            <Link href={project.link} key={index} target='_blank'>
              <div className={cn('rounded-md p-5', project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className='h-[40vh] w-full'
                >
                  <div className='space-y-4 bg-blend-darken'>
                    <h1 className='text-2xl font-bold'>{project.title}</h1>
                    <div className='flex items-center gap-5'>
                      {project.tech.map((Icon, index) => (
                        <Icon className='size-8' key={index} />
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
