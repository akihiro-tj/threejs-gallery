import { animated, useSpring } from '@react-spring/three';
import { useAspect, useTexture } from '@react-three/drei';
import { useEffect } from 'react';
import { DoubleSide } from 'three';

type PictureProps = {
  url: string;
  position: {
    from: [number, number, number];
    to: [number, number, number];
  };
  scaleFactor: number;
};

const Picture = ({ url, position, scaleFactor }: PictureProps) => {
  const texture = useTexture(url);
  const { width, height } = texture.source.data;
  const scale = useAspect(width, height, scaleFactor);

  const [springs, api] = useSpring(() => ({}));

  useEffect(() => {
    api.start({
      from: {
        position: position.from,
      },
      to: {
        position: position.to,
      },
    });
  }, [api, position]);

  return (
    <animated.mesh position={springs.position} scale={scale}>
      <planeGeometry />
      <meshStandardMaterial side={DoubleSide} map={texture} />
    </animated.mesh>
  );
};

export default Picture;
