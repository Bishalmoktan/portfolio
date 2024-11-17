import { BiSolidEnvelope } from 'react-icons/bi';
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiX,
  SiSolana,
  SiHiveBlockchain,
  SiThreedotjs,
  SiGreensock,
} from 'react-icons/si';

export const helpCommand = [
  {
    title: 'bio',
    info: 'Show my bio information',
  },
  {
    title: 'skills',
    info: 'List out all my skills',
  },
  {
    title: 'projects',
    info: 'List out my projects',
  },
  {
    title: 'contact',
    info: 'Show my contact details',
  },
  {
    title: 'exit',
    info: 'Exit the terminal mode',
  },
  {
    title: 'clear',
    info: 'Clear the terminal',
  },
];

export const skillsCommand = [
  {
    title: 'React',
    Icon: SiReact,
    level: 80,
  },
  {
    title: 'Nextjs',
    Icon: SiNextdotjs,
    level: 90,
  },
  {
    title: 'Tailwind',
    Icon: SiTailwindcss,
    level: 85,
  },
  {
    title: 'MongoDB',
    Icon: SiMongodb,
    level: 70,
  },
  {
    title: 'Postgres',
    Icon: SiPostgresql,
    level: 75,
  },
  {
    title: 'Prisma',
    Icon: SiPrisma,
    level: 65,
  },
  {
    title: 'Nodejs',
    Icon: SiNodedotjs,
    level: 80,
  },
  {
    title: 'Git',
    Icon: SiGit,
    level: 85,
  },
  {
    title: 'Docker',
    Icon: SiDocker,
    level: 60,
  },
];

export const projectsCommand = [
  {
    title: 'Lyric Web App',
    tech: [SiNextdotjs, SiTailwindcss, SiPrisma, SiPostgresql],
    link: 'https://www.bisaric.com',
    cover: '/bisaric.png',
    background: 'bg-green-500',
  },
  {
    title: 'SyncCode',
    tech: [SiReact, SiTailwindcss, SiNodedotjs, SiSocketdotio, SiExpress],
    link: 'https://synccode-live.vercel.app',
    cover: '/sync-code.png',
    background: 'bg-indigo-500',
  },
  {
    title: 'Iphone Website',
    tech: [SiReact, SiTailwindcss, SiThreedotjs, SiGreensock],
    link: 'https://iphone-dashboard.vercel.app/',
    cover: '/iphone-website.png',
    background: 'bg-indigo-500',
  },
  {
    title: 'Solana Wallet Adapter',
    tech: [SiReact, SiTailwindcss, SiSolana, SiHiveBlockchain],
    link: 'https://web3-wallet-solana.vercel.app/',
    cover: '/wallet-adapter.png',
    background: 'bg-green-500',
  },
];

export const contactCommand = [
  {
    title: 'Github',
    icon: SiGithub,
    username: '@Bishalmoktan',
    link: 'https://github.com/Bishalmoktan',
  },
  {
    title: 'Twitter',
    icon: SiX,
    username: '@bshalmoktan',
    link: 'https://twitter.com/bshalmoktan',
  },
  {
    title: 'LinkedIn',
    icon: SiLinkedin,
    username: '@bishalmoktan',
    link: 'https://www.linkedin.com/in/bishalmoktan/',
  },
  {
    title: 'Email',
    icon: BiSolidEnvelope,
    username: 'bishalmoktan270@gmail.com',
    link: 'mailto:bishalmoktan270@gmail.com',
  },
];
