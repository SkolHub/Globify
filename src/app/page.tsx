'use client';

import LayersDropdown from '@/components/layers-dropdown';
import SidePanel from '@/components/side-panel';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { dunarea } from '../../data';
import MapDropdown from '@/components/map-dropdown';

const LazyMap = dynamic(() => import('@/components/map'), { ssr: false });

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selectedLayers, setSelectedLayers] = useState<string[]>([]);
  const [selectedMap, setSelectedMap] = useState<string>('default');
  const [data, setData] = useState<any>(dunarea);

  return (
    <main>
      <LazyMap
        setOpen={setOpen}
        setData={setData}
        selectedLayers={selectedLayers}
        selectedMap={selectedMap}
      />
      <SidePanel open={open} data={data} setOpen={setOpen} />
      <LayersDropdown
        selectedLayers={selectedLayers}
        setSelectedLayers={setSelectedLayers}
      />
      <MapDropdown selectedMap={selectedMap} setSelectedMap={setSelectedMap} />
    </main>
  );
}
