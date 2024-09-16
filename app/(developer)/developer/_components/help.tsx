import { helpCommand } from '@/app/data';

const Help = () => {
  return (
    <div>
      {helpCommand.map((item, index) => (
        <div key={index} className='flex'>
          <p className='min-w-32 text-yellow-500'>{item.title}</p>
          <p>{item.info}</p>
        </div>
      ))}
    </div>
  );
};
export default Help;
