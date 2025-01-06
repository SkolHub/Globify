import Globe from 'react-globe.gl';
import useResizeHook from '@/lib/hooks/use-resize-hook';
import fauna from '@/lib/data/fauna-zones.json';
import climate from '@/lib/data/climate-zones.json';
import hydrography from '@/lib/data/rivers.json';
import { useState } from 'react';
import { maps } from '@/lib/data/maps';
import { useDictionary } from '@/dictionaries/use-dictionary';

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
  const dictionary = useDictionary();

  const [width, height] = useResizeHook();

  const [hoveredP, setHoveredP] = useState<object | null>(null);

  const data =
    selectedMap !== 'moon'
      ? [
          ...(selectedLayers.includes('vegetation') ? (fauna as any[]) : []),
          ...(selectedLayers.includes('climate') ? (climate as any[]) : []),
          ...(selectedLayers.includes('hydrography')
            ? (hydrography as any[])
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
          setData(dictionary.dataFluvii[pol.properties.index]);
        } else {
          setData(dictionary.dataFauna[pol.properties.index]);
        }
        setOpen(true);
      }}
    />
  );
}
