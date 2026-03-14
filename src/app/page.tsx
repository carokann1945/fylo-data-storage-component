import Fylo from '@/components/Fylo';
import Usage from '@/components/Usage';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main
      className={cn(
        'w-full max-w-[540px] xl:max-w-[922px]',
        'flex flex-col xl:flex-row gap-[16px] xl:gap-[32px] xl:items-end',
      )}>
      <Fylo />
      <Usage />
    </main>
  );
}
