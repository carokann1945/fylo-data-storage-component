import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Fylo() {
  return (
    <div
      className={cn('max-w-[326px] h-[201px]', 'p-[40px]', 'bg-blue-850-custom', 'rounded-[10px] rounded-tr-[100px]')}>
      <div className={cn('max-w-[176px] h-[119.27px]', 'flex flex-col gap-[32px]')}>
        <figure className={cn('max-w-[135px] h-[39.27px]', 'relative')}>
          <Image src="/images/logo.svg" alt="logo image" fill className="object-cover" />
        </figure>
        <div className={cn('flex gap-[16px]')}>
          <figure
            className={cn(
              'w-[48px] h-[48px]',
              'flex justify-center items-center',
              'bg-blue-950-custom rounded-[10px]',
            )}>
            <Image src="/images/icon-document.svg" alt="document icon" width={19.18} height={23.98} />
          </figure>
          <figure
            className={cn(
              'w-[48px] h-[48px]',
              'flex justify-center items-center',
              'bg-blue-950-custom rounded-[10px]',
            )}>
            <Image src="/images/icon-folder.svg" alt="folder icon" width={24} height={19.2} />
          </figure>
          <figure
            className={cn(
              'w-[48px] h-[48px]',
              'flex justify-center items-center',
              'bg-blue-950-custom rounded-[10px]',
            )}>
            <Image src="/images/icon-upload.svg" alt="upload icon" width={24} height={16} />
          </figure>
        </div>
      </div>
    </div>
  );
}
