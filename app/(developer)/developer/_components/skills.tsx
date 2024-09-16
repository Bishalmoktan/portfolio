import { skillsCommand } from '@/app/data';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  return (
    <div className='mx-auto w-[90%] space-y-8'>
      {skillsCommand.map((skill, index) => {
        const Icon = skill.Icon;
        return (
          <div key={index} className='space-y-1'>
            <div className='flex justify-between'>
              <div className='flex gap-2'>
                <Icon className='size-8' />
                <p className='text-xl'>{skill.title}</p>
              </div>
              <div className='text-xl'>{skill.level}%</div>
            </div>
            <div>
              <Progress value={skill.level} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Skills;
