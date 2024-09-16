import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { FaCode } from 'react-icons/fa6';
import { MovingBorderBtn } from '@/components/ui/moving-border';

const Navbar = ({
  className,
  isFooter,
}: {
  className?: string;
  isFooter: boolean;
}) => {
  const socials = [
    {
      link: 'https://www.linkedin.com/in/bishalmoktan/',
      label: 'Linkedin',
      Icon: SiLinkedin,
    },
    {
      link: 'https://github.com/bishalmoktan',
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
        'flex animate-move-down items-center justify-between py-8',
        className
      )}
    >
      <h1 className='-rotate-2 text-2xl font-bold text-white underline decoration-green-500 underline-offset-8'>
        Bishal Moktan 👨🏻‍💻
      </h1>

      {!isFooter && (
        <Link
          href={'/developer'}
          className='flex flex-col items-center justify-center gap-1'
        >
          <FaCode className='size-8 text-white' />
          <MovingBorderBtn
            borderRadius='0.5rem'
            className='hidden p-3 font-semibold md:block'
          >
            <p>Dev Mode</p>
          </MovingBorderBtn>
        </Link>
      )}

      <div className='flex items-center gap-5'>
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} aria-label={social.label} key={index}>
              <Icon className='size-5 transition-all hover:scale-125' />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Navbar;
