'use client';

import '@/lib/fontawesome/css/fa.css';
import LayersDropdown from '@/components/layers-dropdown';
import SidePanel from '@/components/side-panel';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { dunarea } from '../../data';
import MapDropdown from '@/components/globe-dropdown';

const LazyMap = dynamic(() => import('@/components/map'), { ssr: false });

export default function Home() {
  const [open, setOpen] = useState(false);
  const [layers, setLayers] = useState<string[]>([]);
  const [map, setMap] = useState<string[]>(['clima']);
  const [data, setData] = useState<any>(dunarea);

  return (
    <>
      <main>
        <LazyMap setOpen={setOpen} setData={setData} layers={layers} map={map[0] ?? 'clima'} />
        <SidePanel open={open} data={data} setOpen={setOpen} />
        <LayersDropdown layers={layers} setLayers={setLayers} />
        <MapDropdown layers={map} setLayers={setMap} />
      </main>
    </>
  );
}
