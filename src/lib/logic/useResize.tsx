import { useMapContext } from '@/lib/logic/MapContext';
import { useEffect } from 'react';

export function useResize() {
  const { canvasRef, pointDilationRef } = useMapContext();

  useEffect(() => {
    const map = canvasRef.current!;
    const pointDilation = pointDilationRef.current!;

    function onResize() {
      const zoom = window.devicePixelRatio;

      map.width = map.getBoundingClientRect().width * zoom;
      map.height = map.getBoundingClientRect().height * zoom;

      const rect = map.getBoundingClientRect();

      pointDilation.zoom = zoom;
      pointDilation.x = rect.left;
      pointDilation.y = rect.top;
    }

    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
}
