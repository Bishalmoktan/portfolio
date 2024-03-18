'use client';
import { useAppContext } from '@/app/hooks/useAppContext';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useRouter } from 'next/navigation';

interface ToggleButtonProps {
  id: string;
  text: string;
}

export function ToggleButton({ id, text }: ToggleButtonProps) {
  const { isDeveloperMode, setIsDeveloperMode } = useAppContext();
  const router = useRouter();
  const handleCheckedChange = () => {
    setIsDeveloperMode(!isDeveloperMode);
    router.replace('/developer');
  };
  return (
    <div className="flex items-center space-x-5">
      <Switch
        checked={isDeveloperMode}
        onCheckedChange={handleCheckedChange}
        id={id}
      />
      <Label htmlFor={id} className="text-xl">
        {text}
      </Label>
    </div>
  );
}
