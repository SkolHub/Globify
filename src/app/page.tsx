'use client';

import '@/lib/fontawesome/css/fa.css';
import dynamic from 'next/dynamic';
import { data } from '@/lib/data';
import SidePanel from '@/components/side-panel';

const Map = dynamic(() => import('@/components/map'), { ssr: false });

export default function Home() {
  return (
    <>
      {/*<Navbar />*/}
      <main className='overflow-hidden'>
        <Map />
        <SidePanel data={data} />
        {/*<LayersDropdown layers={layers} setLayers={setLayers} />*/}
      </main>
    </>
  );
}
