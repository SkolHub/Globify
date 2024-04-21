import { useMapContext } from '@/lib/logic/MapContext';
import { useEffect, useMemo } from 'react';
import { createPoint, getClick } from '@/lib/logic/math';
import data from '../lib/logic/data.json';

function convertLatLonToXY(longitude: number, latitude: number) {
  const x = (1920 / 360.0) * (180 + longitude);
  const y = (1080 / 180.0) * (90 - latitude);

  return { x, y };
}

export default function Map() {
  const { canvasRef, pointDilationRef } = useMapContext();

  useEffect(() => {
    const map = canvasRef.current!;
    const pointDilation = pointDilationRef.current!;

    const ctx = map.getContext('2d')!;

    let moving = false;
    let zoom = 1;

    const origin = createPoint();

    function onMouseDown(e: MouseEvent) {
      const point = getClick(e, pointDilation);

      origin.x = point.x;
      origin.y = point.y;

      moving = true;
    }

    function onMouseUp() {
      moving = false;
    }

    function onMouseMove(e: MouseEvent) {
      if (moving) {
        const point = getClick(e, pointDilation);

        pointDilation.x -= origin.x - point.x;
        pointDilation.y -= origin.y - point.y;

        render();
      }
    }

    function onResize() {
      const zoom = window.devicePixelRatio;

      map.width = map.getBoundingClientRect().width * zoom;
      map.height = map.getBoundingClientRect().height * zoom;

      const rect = map.getBoundingClientRect();

      pointDilation.zoom = zoom;
      pointDilation.x = rect.left;
      pointDilation.y = rect.top;

      render();
    }

    function onScroll(e: WheelEvent) {
      pointDilation.x += e.deltaX / 20;
      pointDilation.y += e.deltaY / 20;

      zoom -= e.deltaY / 1000;

      render();
    }

    function render() {
      ctx.clearRect(0, 0, map.width, map.height);

      ctx.fillStyle = '#FF0000';
      ctx.strokeStyle = 'black';

      ctx.translate(pointDilation.x, pointDilation.y);

      for (const country of Object.keys(data)) {
        for (const region of (data as any)[country]) {
          if (typeof region[0][0] === 'number') {
            ctx.beginPath();

            for (const point of region) {
              const res = convertLatLonToXY(point[0], point[1]);
              ctx.lineTo(res.x * zoom, res.y * zoom);
            }

            ctx.closePath();

            ctx.fill();
            ctx.stroke();
          } else {
            for (const zone of region) {
              ctx.beginPath();

              for (const point of zone) {
                const res = convertLatLonToXY(point[0], point[1]);
                ctx.lineTo(res.x * zoom, res.y * zoom);
              }

              ctx.closePath();

              ctx.fill();
              ctx.stroke();
            }
          }
        }
      }

      ctx.translate(-pointDilation.x, -pointDilation.y);
    }

    onResize();

    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('wheel', onScroll);

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('wheel', onScroll);

      window.removeEventListener('resize', onResize);
    };
  }, []);

  return useMemo(
    () => (
      <canvas
        ref={canvasRef}
        id='map'
        className='h-screen w-screen select-none'
      />
    ),
    []
  );
}
