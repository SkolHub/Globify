'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import '@/lib/fontawesome/css/fa.css';
import {
  DropdownMenu, DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <nav className='fixed flex h-20 w-screen p-4'>
        <Image
          src='/schoolhub-globify.png'
          alt='logo'
          width='350'
          height='80'
          className='object-contain'
        />
      </nav>
      <main>
        <img
          onClick={() => {
            setOpen(!open);
          }}
          src='/map.png'
          className='h-screen w-screen object-cover'
        />
        <div
          className={cn(
            'fixed right-0 top-4 mr-4 h-[calc(100%-2rem)] w-1/3 rounded-3xl bg-white/50 shadow-[0_0_20px_-6px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-transform duration-200',
            open ? 'translate-x-0' : 'translate-x-[110%]'
          )}
        ></div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className='fixed bottom-4 left-4 focus:outline-0 flex items-center justify-center gap-2 rounded-2xl bg-white/50 px-4 py-3 text-[0.875rem] font-medium text-neutral-600 shadow-[0_0_20px_-6px_rgba(0,0,0,0.25)] backdrop-blur-2xl active:bg-neutral-400/70'>
              <i className='fa fa-layer-group text-2xl'></i>
              Straturi
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='start' sideOffset={10}>
            <DropdownMenuCheckboxItem checked>
              <div className='flex items-center justify-start gap-2'>
                <i className='fa fa-sun-cloud text-lg text-neutral-600'></i>
                <label className='text-sm font-medium text-neutral-600'>
                  Clima
                </label>
              </div>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>
              <div className='flex items-center justify-start gap-2'>
                <i className='fa fa-leaf text-lg text-neutral-600'></i>
                <label className='text-sm font-medium text-neutral-600'>
                  Vegetatie
                </label>
              </div>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>
              <div className='flex items-center justify-start gap-2'>
                <i className='fa fa-water text-lg text-neutral-600'></i>
                <label className='text-sm font-medium text-neutral-600'>
                  Hidrografie
                </label>
              </div>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>
              <div className='flex items-center justify-start gap-2'>
                <i className='fa fa-mountain text-lg text-neutral-600'></i>
                <label className='text-sm font-medium text-neutral-600'>
                  Relief
                </label>
              </div>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>
              <div className='flex items-center justify-start gap-2'>
                <i className='fa fa-earth text-lg text-neutral-600'></i>
                <label className='text-sm font-medium text-neutral-600'>
                  Placi tectonice
                </label>
              </div>
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </main>
    </>
  );
}
