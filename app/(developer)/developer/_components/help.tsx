import { helpCommand } from '@/app/data';

const Help = () => {
  return (
    <div>
      {helpCommand.map((item, index) => (
        <div key={index} className="flex">
          <p className="text-yellow-500 min-w-32">{item.title}</p>
          <p>{item.info}</p>
        </div>
      ))}
    </div>
  );
};
export default Help;
