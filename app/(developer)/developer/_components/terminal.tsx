import TerminalHeader from './terminal-header';
import TerminalBody from './terminal-body';

const Terminal = () => {
  return (
    <div className="w-full lg:w-[60vw]">
      <TerminalHeader />
      <TerminalBody />
    </div>
  );
};
export default Terminal;
