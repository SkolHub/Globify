'use client';

import '@/lib/fontawesome/css/fa.css';
import Map from '@/components/map';
import LayersDropdown from '@/components/layers-dropdown';
import SidePanel from '@/components/side-panel';
import { useState } from 'react';
import { SidebarData } from '@/lib/types';
import dynamic from 'next/dynamic';
import { dunarea, paduri_de_conifere, paduri_ecuatoriale } from '../../data';

const LazyMap = dynamic(() => import('@/components/map'), { ssr: false });

export default function Home() {
  const [open, setOpen] = useState(true);
  const [layers, setLayers] = useState<string[]>([]);

  return (
    <>
      <main>
        <LazyMap />
        <SidePanel open={open} data={dunarea} setOpen={setOpen} />
        <LayersDropdown layers={layers} setLayers={setLayers} />
      </main>
    </>
  );
}
