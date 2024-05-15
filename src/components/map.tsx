'use client';

import Globe from 'react-globe.gl';
import useResizeHook from '@/lib/hooks/useResizeHook';
import data from '@/lib/data/fauna-zones.json';
import data2 from '@/lib/data/climate-zones.json';
import data3 from '@/lib/data/rivers.json';
import { useState } from 'react';

function Map() {
  const [width, height] = useResizeHook();

  const [hoveredP, setHoveredP] = useState<object | null>(null);

  const x = [/*...data*/ /*...data2*/ ...data3];

  console.log(data3)

  return (
    <Globe
      globeImageUrl='/earth-blue-marble.jpg'
      backgroundImageUrl='/night-sky.png'
      polygonAltitude={(pol) => (pol === hoveredP ? 0.05 : pol.properties.elevation)}
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
      polygonCapColor={(pol) => {

        if (pol.properties.fill) {
          return pol.properties.fill + '80';
        }

        return '#000000';
      }}
      polygonStrokeColor={(pol) => (pol === data[0] as any ? '#F0000020': '#0000F020')}
      polygonsData={x}
      polygonsTransitionDuration={100}
      // polygonLabel={(pol) => (pol as any).properties.admin}
      width={width}
      height={height}
    />
  );
}

export default Map;
