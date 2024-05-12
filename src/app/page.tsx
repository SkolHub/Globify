'use client';

import '@/lib/fontawesome/css/fa.css';
import Map from '@/components/map';

export default function Home() {
  return (
    <>
      {/*<Navbar />*/}
      <main className='overflow-hidden'>
        <Map />
        {/*<SidePanel data={data} />*/}
        {/*<LayersDropdown layers={layers} setLayers={setLayers} />*/}
      </main>
    </>
  );
}
