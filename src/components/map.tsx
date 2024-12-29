import Globe from 'react-globe.gl';
import useResizeHook from '@/lib/hooks/useResizeHook';
import fauna from '@/lib/data/fauna-zones.json';
import climate from '@/lib/data/climate-zones.json';
import hidrografie from '@/lib/data/rivers.json';
import { useState } from 'react';
import { dataFauna, dataFluvii } from '../../data';
import { maps } from '@/lib/data/maps';

export default function ({
  selectedLayers,
  selectedMap,
  setData,
  setOpen
}: {
  selectedLayers: string[];
  selectedMap: string;
  setData: (data: any) => void;
  setOpen: (value: boolean) => void;
}) {
  const [width, height] = useResizeHook();

  const [hoveredP, setHoveredP] = useState<object | null>(null);

  const data =
    selectedMap !== 'moon'
      ? [
          ...(selectedLayers.includes('vegetation') ? (fauna as any[]) : []),
          ...(selectedLayers.includes('climate') ? (climate as any[]) : []),
          ...(selectedLayers.includes('hydrography')
            ? (hidrografie as any[])
            : [])
        ]
      : [];

  return (
    <Globe
      globeImageUrl={`/${maps.find((map) => map.key === selectedMap)!.image}`}
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
      polygonsData={data}
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
