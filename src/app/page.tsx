'use client';

import '@/lib/fontawesome/css/fa.css';
import { MapContextProvider } from '@/lib/logic/MapContext';
import Map from '@/components/map';

export default function Home() {
  return (
    <>
      {/*<Navbar />*/}
      <MapContextProvider>
        <main className='overflow-hidden'>
          <Map />
          {/*<SidePanel data={data} />*/}
          {/*<LayersDropdown layers={layers} setLayers={setLayers} />*/}
        </main>
      </MapContextProvider>
    </>
  );
}
