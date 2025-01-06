import InformationCard from '@/components/information-card';
import { SidebarData } from '@/lib/types';
import { cn } from '@/lib/utils';

export default function ({
  open,
  setOpen,
  data
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: SidebarData;
}) {
  return (
    <div
      className={cn(
        'fixed right-auto top-[20rem] mx-2 flex h-[calc(100%-20rem)] flex-col rounded-b-none rounded-t-3xl bg-[#2E2E2E]/70 shadow-[0_0_20px_-6px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-transform duration-200 md:right-0 md:top-4 md:mx-4 md:h-[calc(100%-2rem)] md:w-auto md:flex-row md:rounded-3xl',
        open
          ? 'translate-y-0 md:translate-x-0'
          : 'translate-x-0 translate-y-[200%] md:translate-x-[200%] md:translate-y-0'
      )}
    >
      <div className='flex items-center justify-end md:justify-center'>
        <span
          className='cursor-pointer p-4 pb-2 pl-2 text-2xl text-neutral-400 hover:text-neutral-900 md:pl-6'
          onClick={() => {
            setOpen(false);
          }}
        >
          <i className='fa fa-chevron-right !hidden md:!block' />
          <i className='fa fa-xmark-circle !block md:!hidden' />
        </span>
      </div>
      <div className='w-full overflow-y-auto px-4 pb-8 md:w-[550px] md:pt-8'>
        <h1 className='pb-1 text-2xl font-black text-neutral-300 md:text-4xl'>
          {data.title}
        </h1>
        {data.subtitle && (
          <h2 className={`text-xl font-bold text-neutral-300 md:text-3xl`}>
            {data.subtitle}
          </h2>
        )}
        {data.categories.map((category, index) => {
          if (category['content-type'] === 'text') {
            return (
              <div key={index} className='mt-4'>
                <h3 className='text-lg font-black text-neutral-300 md:text-2xl'>
                  {category.title}
                </h3>
                <p className='pt-4 text-sm font-semibold text-neutral-300 md:text-base'>
                  {category.text}
                </p>
                <div className='flex flex-wrap pt-4'>
                  {category.images.map((photo, index) => (
                    <div key={index} className='grow basis-1/2 p-2'>
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className='w-full rounded-2xl'
                      />
                      {photo?.title && (
                        <label className='text-xs md:text-sm font-semibold text-neutral-400'>
                          {photo.title}
                        </label>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          return (
            <div key={index} className='mt-4 flex flex-col gap-4'>
              <h3 className='text-lg font-black text-neutral-300 md:text-2xl'>
                {category.title}
              </h3>
              <div className='grid grid-cols-2 gap-y-8'>
                {category.items.map((item, index) => (
                  <InformationCard
                    key={index}
                    title={item.title}
                    description={item.text}
                    icon={item.icon}
                    textClassName={item['text-color']}
                    border={index % 2 === 0}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
