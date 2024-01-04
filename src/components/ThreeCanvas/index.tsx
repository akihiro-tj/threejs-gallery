import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Picture as TPicture } from '../../types';
import Picture from '../Picture';

//
type CanvasContentProps = {
  pictures: TPicture[];
  scaleFactor: number;
};

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

//
type ThreeCanvasProps = {
  className?: string;
} & CanvasContentProps;

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
