import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';
import Link from 'next/link';

const MobileViewAlert = () => {
  return (
    <Alert className="bg-yellow-500 bg-opacity-70 text-white">
      <Info className="h-4 w-4" />
      <AlertTitle>Hey, Mobile Users!</AlertTitle>
      <AlertDescription>
        For better experience please use desktop OR use{' '}
        <Link className="underline underline-offset-2" href={'/'}>
          {' '}
          Normal
        </Link>{' '}
        mode
      </AlertDescription>
    </Alert>
  );
};
export default MobileViewAlert;
