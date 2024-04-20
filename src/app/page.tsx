'use client';

import { useState } from 'react';
import '@/lib/fontawesome/css/fa.css';
import LayersDropdown from '@/components/layers-dropdown';
import SidePanel from '@/components/side-panel';
import Navbar from '@/components/navbar';
import Map from '@/components/map';

export default function Home() {
  const [open, setOpen] = useState(true);
  const [layers, setLayers] = useState<string[]>([]);

  return (
    <>
      <Navbar />
      <main>
        <Map open={open} setOpen={setOpen} />
        <SidePanel open={open} />
        <LayersDropdown layers={layers} setLayers={setLayers} />
      </main>
    </>
  );
}
