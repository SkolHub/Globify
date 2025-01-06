'use client';

import LayersDropdown from '@/components/layers-dropdown';
import SidePanel from '@/components/side-panel';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import MapDropdown from '@/components/map-dropdown';
import { useDictionary } from '@/dictionaries/use-dictionary';

const LazyMap = dynamic(() => import('@/components/map'), { ssr: false });

export default function () {
  const dictionary = useDictionary();

  const [open, setOpen] = useState(false);
  const [selectedLayers, setSelectedLayers] = useState<string[]>([]);
  const [selectedMap, setSelectedMap] = useState<string>('default');
  const [data, setData] = useState<any>(dictionary.dunarea);

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
        visible={selectedMap !== 'moon'}
        selectedLayers={selectedLayers}
        setSelectedLayers={setSelectedLayers}
      />
      <MapDropdown selectedMap={selectedMap} setSelectedMap={setSelectedMap} />
    </main>
  );
}
