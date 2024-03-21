import { projectsCommand } from '@/app/data';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="space-y-8">
      {projectsCommand.map((project, index) => (
        <div key={index} className="flex gap-4">
          <div>
            <Image
              src={project.cover}
              alt=""
              width={'300'}
              height={'150'}
              className="rounded-md"
            />
          </div>
          <div className="space-y-2">
            <Link href={project.link} className="text-3xl" target="_blank">
              {project.title}
            </Link>
            <div className="flex gap-2">
              {project.tech.map((Icon, idx) => (
                <Icon key={idx} className="size-8" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Projects;
