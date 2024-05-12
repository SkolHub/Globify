'use client';

import '@/lib/fontawesome/css/fa.css';
import { MapContextProvider } from '@/lib/logic/MapContext';
import SidePanel from '@/components/side-panel';
import { data } from '@/lib/data';

export default function Home() {
  return (
    <>
      {/*<Navbar />*/}
      <MapContextProvider>
        <main>
          {/*<Map />*/}
          <SidePanel data={data} />
          {/*<LayersDropdown layers={layers} setLayers={setLayers} />*/}
        </main>
      </MapContextProvider>
    </>
  );
}
