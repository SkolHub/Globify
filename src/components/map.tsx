'use client';

import Globe from 'react-globe.gl';
import useResizeHook from '@/lib/hooks/useResizeHook';
import fauna from '@/lib/data/fauna-zones.json';
import climate from '@/lib/data/climate-zones.json';
import hidrografie from '@/lib/data/rivers.json';
import { useState } from 'react';
import { dataFauna, dataFluvii } from '../../data';

const maps: any = {clima: 'earth-blue-marble.jpg', vegetatie: 'lunar_surface.jpg', hidrografie: 'night.png'};

function Map({ layers, map, setData, setOpen }: any) {
  const [width, height] = useResizeHook();

  const [hoveredP, setHoveredP] = useState<object | null>(null);

  const x = [
    ...(layers.includes('vegetatie') ? (fauna as any[]) : []),
    ...(layers.includes('clima') ? (climate as any[]) : []),
    ...(layers.includes('hidrografie') ? (hidrografie as any[]) : [])
  ];

  return (
    <Globe
      globeImageUrl={`/${maps[map]}`}
      backgroundImageUrl='/night-sky.png'
      polygonAltitude={(pol: any) =>
        pol === hoveredP ? 0.05 : pol.properties.elevation
      }
      onPolygonHover={(pol) => {
        setHoveredP(pol);
      }}
      polygonSideColor={() => '#00000000'}
      polygonCapColor={(pol: any) => {
        if (pol.properties.fill) {
          return pol.properties.fill + '80';
        }

        return '#000000';
      }}
      polygonStrokeColor={() => '#00000000'}
      polygonsData={x}
      polygonsTransitionDuration={100}
      width={width}
      height={height}
      onPolygonClick={(pol: any) => {
        if (pol.properties.elevation === 0.03) {
          setData(dataFluvii[pol.properties.index]);
        } else {
          setData(dataFauna[pol.properties.index]);
        }
        setOpen(true);
      }}
    />
  );
}

export default Map;
