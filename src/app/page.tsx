'use client';

import '@/lib/fontawesome/css/fa.css';
import dynamic from 'next/dynamic';

const LazyMap = dynamic(() => import('@/components/map'), { ssr: false });

export default function Home() {
  return (
    <>
      {/*<Navbar />*/}
      <main className='overflow-hidden'>
        <LazyMap />
        {/*<SidePanel data={data} />*/}
        {/*<LayersDropdown layers={layers} setLayers={setLayers} />*/}
      </main>
    </>
  );
}
