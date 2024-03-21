'use client';
import { MovingBorderBtn } from '@/components/ui/moving-border';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { SiGithub, SiX } from 'react-icons/si';
import BioLoading from './bio-loading';

const Bio = () => {
  const [data, setData] = useState<GithubResponse | null>(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getBio = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          'https://api.github.com/users/bishalmoktan'
        );
        setData(res.data);
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBio();
  }, []);

  if (loading) {
    return <BioLoading />;
  }

  return (
    <div>
      {data && (
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <MovingBorderBtn borderRadius="100%">
              <Image
                src={data.avatar_url}
                alt="bishal moktan"
                width={'150'}
                height={'150'}
                className="rounded-full"
              />
            </MovingBorderBtn>
            <div>
              <div className="flex gap-2">
                <div>
                  <p className="text-2xl">{data.name}</p>
                  <p className="text-zinc-300">A fullstack developer</p>
                </div>
                <BsFillPatchCheckFill className="size-8 text-blue-500" />
              </div>
            </div>
          </div>
          <div className="text-xl">{data.bio}</div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2">
            <div className="flex gap-2 text-yellow-500">
              <SiGithub className="size-6" />
              <span className="text-lg"> Github</span>
              <Link
                href={data.html_url}
                className="text-xl text-blue-500"
                target="_blank"
              >
                @{data.login}
              </Link>
            </div>
            <div className="flex gap-2 text-yellow-500">
              <SiX className="size-6" />
              <span className="text-lg"> Twitter</span>
              <Link
                href={'https://twitter.com/bshalmoktan'}
                className="text-xl text-blue-500"
                target="_blank"
              >
                @{data.twitter_username}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Bio;
