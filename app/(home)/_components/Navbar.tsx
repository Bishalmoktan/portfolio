import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ActionTooltip } from './ActionTooltip';
import { FaCode } from 'react-icons/fa6';

const Navbar = ({ className }: { className?: string }) => {
  const socials = [
    {
      link: 'https://www.linkedin.com/in/bishalmoktan/',
      label: 'Linkedin',
      Icon: SiLinkedin,
    },
    {
      link: 'https://github.com/bishal-moktan',
      label: 'Github',
      Icon: SiGithub,
    },
    {
      link: 'https://twitter.com/bshalmoktan',
      label: 'X',
      Icon: SiX,
    },
  ];
  return (
    <nav
      className={cn(
        'py-8 flex items-center justify-between animate-move-down',
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Bishal Moktan 👨🏻‍💻
      </h1>
      <ActionTooltip label="developer mode" side="bottom" link="/developer">
        <FaCode className="size-8" />
      </ActionTooltip>

      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} aria-label={social.label} key={index}>
              <Icon className="size-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Navbar;
