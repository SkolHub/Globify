import { cn } from '@/lib/utils';
import { useState } from 'react';

export default function InformationCard({
  title,
  description,
  icon,
  textClassName,
  border
}: {
  title: string;
  description: string;
  icon: string;
  textClassName?: string;
  border?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-start px-4',
        border ? 'border-r border-r-white/15' : ''
      )}
    >
      <i className={cn('fa pb-2 text-3xl text-neutral-300', `fa-${icon}`)}></i>
      <h3 className='pb-1 text-sm font-semibold leading-tight text-neutral-300'>
        {title}
      </h3>
      <p
        className={cn(
          'text-center text-base font-semibold leading-tight text-neutral-300',
          textClassName
        )}
      >
        {description.length > 50 && !expanded
          ? description.slice(0, 50) + '...'
          : description}{' '}
        {description.length > 50 && !expanded && (
          <button
            onClick={() => setExpanded(!expanded)}
            className='text-sm font-semibold text-neutral-400 hover:underline'
          >
            Vezi mai mult
          </button>
        )}
      </p>
      {description.length > 50 && expanded && (
        <button
          onClick={() => setExpanded(!expanded)}
          className='text-sm font-semibold text-neutral-400 hover:underline'
        >
          Vezi mai puțin
        </button>
      )}
    </div>
  );
}
