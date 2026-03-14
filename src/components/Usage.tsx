import { cn } from '@/lib/utils';

export default function Usage() {
  return (
    <div
      className={cn(
        'w-full max-w-[540px] h-[154px]',
        'relative flex justify-center items-center',
        'px-[32px]',
        'bg-blue-850-custom rounded-[10px]',
      )}>
      <div className={cn('w-full h-[74px]', 'flex flex-col gap-[16px]')}>
        <h1 className={cn('w-full text-center md:text-start typo-2-regular text-blue-200-custom')}>
          You’ve used <b>815 GB</b> of your storage
        </h1>
        <div className={cn('w-full h-[42px]', 'flex flex-col gap-[8px]')}>
          <div className={cn('w-full h-[20px]', 'relative', 'bg-blue-900-custom rounded-[10px]')}>
            <div className={cn('w-[81.5%] h-[14px]', 'absolute left-1 top-[3.5px]', 'gradient-2 rounded-[8px]')}>
              <div
                className={cn('w-[10px] h-[10px]', 'absolute right-[3px] top-[1.7px]', 'bg-white rounded-full')}></div>
            </div>
          </div>
          <div className={cn('w-full h-[14px]', 'flex justify-between items-center')}>
            <span className={cn('typo-3-extrabold text-blue-200-custom')}>0 GB</span>
            <span className={cn('typo-3-extrabold text-blue-200-custom')}>1000 GB</span>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'w-[179px] h-[72px]',
          'flex justify-center items-center',
          'bg-white rounded-[10px]',
          'absolute bottom-[-40px] left-1/2 -translate-x-1/2',
          'xl:left-auto xl:translate-x-0 xl:top-[-50px] xl:right-[35px]',
        )}>
        <div className={cn('flex gap-[8px] items-center')}>
          <span className={cn('typo-1 text-blue-950-custom')}>185</span>
          <span className={cn('typo-3-bold text-blue-950-custom/50')}>GB LEFT</span>
        </div>
        {/* 데스크탑 때 아래쪽 꼬리 */}
        <div
          className={cn(
            'hidden xl:block',
            'xl:absolute xl:top-[63px] xl:right-0',
            'xl:w-0 xl:h-0',
            'xl:border-t-[30px] xl:border-t-white',
            'xl:border-l-[30px] xl:border-l-transparent',
          )}></div>
      </div>
    </div>
  );
}
