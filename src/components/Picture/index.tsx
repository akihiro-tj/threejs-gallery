import { animated, useSpring } from '@react-spring/three';
import { useAspect, useTexture } from '@react-three/drei';
import { useEffect } from 'react';
import { DoubleSide } from 'three';

type PictureProps = {
  url: string;
  scaleFactor: number;
  from: {
    position: [number, number, number];
  };
  to: {
    position: [number, number, number];
  };
};

const Picture = ({ url, scaleFactor, from, to }: PictureProps) => {
  const texture = useTexture(url);
  const { width, height } = texture.source.data;
  const scale = useAspect(width, height, scaleFactor);

  const [springs, api] = useSpring(() => ({}));

  useEffect(() => {
    api.start({ from, to });
  }, [api, from, to]);

  return (
    <animated.mesh position={springs.position} scale={scale}>
      <planeGeometry />
      <meshStandardMaterial side={DoubleSide} map={texture} />
    </animated.mesh>
  );
};

export default Picture;
