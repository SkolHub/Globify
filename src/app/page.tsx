'use client';

import '@/lib/fontawesome/css/fa.css';
import Map from '@/components/map';
import { MapContextProvider } from '@/lib/logic/MapContext';

export default function Home() {
  return (
    <>
      {/*<Navbar />*/}
      <MapContextProvider>
        <main>
          <Map />
          {/*<SidePanel open={open} />
        <LayersDropdown layers={layers} setLayers={setLayers} />*/}
        </main>
      </MapContextProvider>
    </>
  );
}
