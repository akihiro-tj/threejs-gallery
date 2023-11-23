import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Picture from '../Picture';

const RADIUS = 2;
const PICTURE_SCALE = 0.15;

const CanvasContent = () => {
  return (
    <>
      <PerspectiveCamera position={[0, 0, 6]} makeDefault />
      <OrbitControls />

      <ambientLight />

      <Picture
        position={[0, 0, RADIUS * 1.5 * Math.sin(Math.PI / 2)]}
        imgURL="./img/morning.jpeg"
        scaleFactor={PICTURE_SCALE}
      />
      <Picture
        position={[RADIUS * Math.cos(0), 0, 0]}
        imgURL="./img/noon.jpeg"
        scaleFactor={PICTURE_SCALE}
      />
      <Picture
        position={[RADIUS * Math.cos(Math.PI), 0, 0]}
        imgURL="./img/sunset.jpeg"
        scaleFactor={PICTURE_SCALE}
      />

      {import.meta.env.DEV && (
        <>
          <gridHelper />
          <axesHelper args={[5]} />
        </>
      )}
    </>
  );
};

const ThreeCanvas = () => {
  return (
    <Canvas>
      <CanvasContent />
    </Canvas>
  );
};

export default ThreeCanvas;
