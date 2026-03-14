import Fylo from '@/components/Fylo';
import Usage from '@/components/Usage';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <main className={cn('px-[25px] py-[128px]', 'flex flex-col gap-[16px]')}>
      <Fylo />
      <Usage />
    </main>
  );
}
