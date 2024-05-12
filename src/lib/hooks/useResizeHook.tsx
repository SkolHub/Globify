'use client';

import { useEffect, useState } from 'react';

export default function () {
  const [dimensions, setDimensions] = useState<[number, number]>([
    window.innerWidth,
    window.innerHeight
  ]);

  useEffect(() => {
    function onResize() {
      setDimensions([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return dimensions;
}
