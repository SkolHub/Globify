'use client';

import Globe from 'react-globe.gl';
import useResizeHook from '@/lib/hooks/useResizeHook';
import data from '@/lib/data/climate-zones.json';
import { useState } from 'react';

function Map() {
  const [width, height] = useResizeHook();

  const [hoveredP, setHoveredP] = useState<object | null>(null);

  let i = 0,
    j = 0;

  return (
    <Globe
      globeImageUrl='/earth-blue-marble.jpg'
      backgroundImageUrl='/night-sky.png'
      polygonAltitude={(pol) => (pol === hoveredP ? 0.05 : 0.01)}
      // polygonCapColor={(pol) => {
      //   i++;
      //   if (colors[i] && pol !== hoveredP) {
      //     return colors[i] + '50';
      //   }
      //
      //   return colors[i];
      // }}
      // polygonSideColor={() => {
      //   j++;
      //
      //   if (colors[j]) {
      //     return colors[j] + '20';
      //   }
      //
      //   return colors[j];
      // }}
      onPolygonHover={(pol) => {
        setHoveredP(pol);
      }}
      polygonSideColor={() => '#00000000'}
      polygonCapColor={(pol) => (pol === data[0] as any ? '#F0000020': '#0000F020')}
      polygonStrokeColor={(pol) => (pol === data[0] as any ? '#F0000020': '#0000F020')}
      polygonsData={data as any}
      polygonsTransitionDuration={100}
      // polygonLabel={(pol) => (pol as any).properties.admin}
      width={width}
      height={height}
    />
  );
}

export default Map;
