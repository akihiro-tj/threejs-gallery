import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Picture from '../Picture';

const RADIUS = 1.5;

const CanvasContent = () => {
  return (
    <>
      <PerspectiveCamera position={[0, 0, 6]} makeDefault />
      <OrbitControls />

      <Picture position={[0, 0, RADIUS * Math.sin(Math.PI / 2)]} />
      <Picture position={[RADIUS * Math.cos(0), 0, 0]} />
      <Picture position={[RADIUS * Math.cos(Math.PI), 0, 0]} />

      <gridHelper />
      <axesHelper args={[5]} />
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
