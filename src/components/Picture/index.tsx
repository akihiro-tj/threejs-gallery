import { animated, useSpring } from '@react-spring/three';
import { useAspect, useTexture } from '@react-three/drei';
import { useEffect } from 'react';
import { DoubleSide } from 'three';

import { Attribute } from '../../types';

type PictureProps = {
  url: string;
  scaleFactor: number;
  from: Attribute;
  to: Attribute;
};

const Picture = ({ url, scaleFactor, from, to }: PictureProps) => {
  const texture = useTexture(url);
  const { width, height } = texture.source.data;
  const scale = useAspect(width, height, scaleFactor);

  const [{ position }, api] = useSpring<Attribute>(() => ({}));

  useEffect(() => {
    api.start({ from, to });
  }, [api, from, to]);

  return (
    <animated.mesh position={position} scale={scale}>
      <planeGeometry />
      <meshStandardMaterial side={DoubleSide} map={texture} />
    </animated.mesh>
  );
};

export default Picture;
