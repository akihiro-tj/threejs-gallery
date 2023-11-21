import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Picture from '../Picture';

const CanvasContent = () => {
  return (
    <>
      <Picture />

      <gridHelper />
      <OrbitControls />
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
