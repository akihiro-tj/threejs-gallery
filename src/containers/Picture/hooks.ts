import { config, useSpring } from '@react-spring/web';
import { useAspect, useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';

import { Position, Rotation } from '../../components/Picture/types';
import { Picture } from '../../types';

const usePicture = (picture: Picture, scaleFactor: number) => {
  const { id, position, rotation, overlayOpacity } = picture;

  const texture = useTexture(`img/${id}.jpeg`);
  const { width, height } = texture.source.data;
  const scale = useAspect(width, height, scaleFactor);

  const hasInitialized = useRef(false);
  const [pictureProps, pictureSpring] = useSpring<{
    position: Position;
    rotation: Rotation;
    overlayOpacity: number;
  }>(() => ({}));

  useEffect(() => {
    pictureSpring.start({
      immediate: !hasInitialized.current,
      position,
      rotation,
      overlayOpacity,
      config: config.slow,
    });
    hasInitialized.current = true;
  }, [pictureSpring, position, rotation, overlayOpacity]);

  return { pictureProps: { texture, scale, ...pictureProps } };
};

export default usePicture;
