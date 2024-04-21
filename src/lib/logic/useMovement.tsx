import { useEffect } from 'react';
import { useMapContext } from '@/lib/logic/MapContext';
import { createPoint, getClick } from '@/lib/logic/math';
import { useRender } from '@/lib/logic/useRender';

export function useMovement() {
  const { canvasRef, pointDilationRef } = useMapContext();
  
  useEffect(() => {
    const map = canvasRef.current!;
    const pointDilation = pointDilationRef.current!;

    let moving = false;

    const origin = createPoint();

    function onMouseDown(e: MouseEvent) {
      const point = getClick(e);

      origin.x = point.x;
      origin.y = point.y;

      moving = true;
    }

    function onMouseUp() {
      moving = false;
    }

    function onMouseMove(e: MouseEvent) {
      if (moving) {
        const point = getClick(e);

        pointDilation.x += origin.x - point.x;
        pointDilation.y += origin.y - point.y;

        useRender();
        console.log(444);
      }
    }

    map.addEventListener('mousedown', onMouseDown);
    map.addEventListener('mouseup', onMouseUp);
    map.addEventListener('mousemove', onMouseMove);

    return () => {
      map.removeEventListener('mousedown', onMouseDown);
      map.removeEventListener('mouseup', onMouseUp);
      map.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
}
