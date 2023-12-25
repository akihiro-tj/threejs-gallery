import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';

import Picture from '../Picture';

const RADIUS = 2;
const SCALE_FACTOR = 0.15;

const POSITIONS = [
  [RADIUS * Math.cos(0), 0, 0],
  [0, 0, RADIUS * 1.5 * Math.sin(Math.PI / 2)],
  [RADIUS * Math.cos(Math.PI), 0, 0],
] as [number, number, number][];

const IMG_URLS = ['./img/morning.jpeg', './img/noon.jpeg', './img/sunset.jpeg'];

const CanvasContent = () => {
  const [imgURLs, setImgURLs] = useState(IMG_URLS);

  useEffect(() => {
    const intervalID = window.setInterval(() => {
      setImgURLs(prev => [prev.slice(-1)[0], ...prev.slice(0, -1)]);
    }, 2000);
    return () => window.clearInterval(intervalID);
  }, []);

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

      {imgURLs.map((url, index) => (
        <Picture
          key={index}
          url={url}
          scaleFactor={SCALE_FACTOR}
          position={{
            from: POSITIONS[index - 1 > -1 ? index - 1 : POSITIONS.length - 1],
            to: POSITIONS[index],
          }}
        />
      ))}
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
