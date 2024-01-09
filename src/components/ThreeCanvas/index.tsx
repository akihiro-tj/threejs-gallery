import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Picture from '../Picture';

import { CanvasContentProps, ThreeCanvasProps } from './types';

const CanvasContent = ({ pictures, scaleFactor }: CanvasContentProps) => {
  return (
    <>
      <PerspectiveCamera position={[0, 0, 6]} makeDefault />
      <ambientLight />

      {pictures.map(({ id, from, to }) => (
        <Picture
          key={id}
          url={`./img/${id}.jpeg`}
          scaleFactor={scaleFactor}
          from={from}
          to={to}
        />
      ))}
    </>
  );
};

const ThreeCanvas = ({
  className,
  pictures,
  scaleFactor,
}: ThreeCanvasProps) => {
  return (
    <Canvas className={className}>
      <CanvasContent pictures={pictures} scaleFactor={scaleFactor} />
    </Canvas>
  );
};

export default ThreeCanvas;
