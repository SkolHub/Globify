import Globe from 'react-globe.gl';
import useResizeHook from '@/lib/hooks/useResizeHook';

export default function Map() {
  const [width, height] = useResizeHook();

  return (
    <Globe
      globeImageUrl='/02c32a7f118f69842a3bfa3a02bd5b12.webp'
      backgroundImageUrl='/night-sky.png'
      width={width}
      height={height}
    />
  );
}
