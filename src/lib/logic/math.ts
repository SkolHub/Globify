import { Point, PointDilationInterface } from '@/lib/logic/types';

export function createPoint(): Point {
  return { x: 0, y: 0 };
}

export function getClick(e: MouseEvent, pointDilation: PointDilationInterface) {
  const { x, y, zoom } = pointDilation;

  return {
    x: (e.clientX - x) * zoom,
    y: (e.clientY - y) * zoom
  };
}
