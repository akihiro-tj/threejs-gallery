import { useSpring } from '@react-spring/web';
import { useAspect, useTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';

import { PictureAttribute } from '../../types';

const usePicture = (
  url: string,
  scaleFactor: number,
  from: PictureAttribute,
  to: PictureAttribute,
) => {
  const texture = useTexture(url);
  const { width, height } = texture.source.data;
  const scale = useAspect(width, height, scaleFactor);

  const hasInitialized = useRef(false);
  const [{ position }, api] = useSpring<PictureAttribute>(() => ({}));

  useEffect(() => {
    api.start({
      immediate: !hasInitialized.current,
      from,
      to,
    });
    hasInitialized.current = true;
  }, [api, from, to]);

  return { texture, scale, position };
};

export default usePicture;
