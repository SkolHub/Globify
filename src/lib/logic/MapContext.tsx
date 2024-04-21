import {
  createContext,
  MutableRefObject,
  ReactNode,
  RefObject,
  useContext,
  useRef
} from 'react';
import { PointDilationInterface } from '@/lib/logic/types';

interface MapContextProps {
  canvasRef: RefObject<HTMLCanvasElement>;
  pointDilationRef: MutableRefObject<PointDilationInterface>;
}

const mapContext = createContext<MapContextProps | null>(null);

export function useMapContext() {
  return useContext(mapContext)!;
}

interface props {
  children: ReactNode;
}

export function MapContextProvider({ children }: props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const pointDilationRef = useRef<PointDilationInterface>({
    x: 0,
    y: 0,
    zoom: 0
  });

  return (
    <mapContext.Provider
      value={{
        canvasRef,
        pointDilationRef
      }}
    >
      {children}
    </mapContext.Provider>
  );
}
