import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { Picture as TPicture } from '../../types';
import Picture from '../Picture';

const SCALE_FACTOR = 0.15;

type CanvasContentProps = {
  pictures: TPicture[];
};

const CanvasContent = ({ pictures }: CanvasContentProps) => {
  return (
    <>
      {import.meta.env.DEV && (
        <>
          <gridHelper />
          <axesHelper args={[5]} />
          <OrbitControls />
        </>
      )}

      <PerspectiveCamera position={[0, 0, 6]} makeDefault />
      <ambientLight />

      {pictures.map(({ id, from, to }) => (
        <Picture
          key={id}
          url={`./img/${id}.jpeg`}
          scaleFactor={SCALE_FACTOR}
          from={from}
          to={to}
        />
      ))}
    </>
  );
};

const ThreeCanvas = (props: CanvasContentProps) => {
  return (
    <Canvas>
      <CanvasContent {...props} />
    </Canvas>
  );
};

export default ThreeCanvas;
