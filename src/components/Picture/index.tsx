import { animated } from '@react-spring/three';
import { FunctionComponent } from 'react';
import { Color, DoubleSide } from 'three';

import { PictureProps } from './types';

const Picture: FunctionComponent<PictureProps> = ({
  texture,
  scale,
  position,
  rotation,
  overlayOpacity,
}) => {
  return (
    <>
      <animated.mesh
        scale={scale}
        position={position}
        rotation={rotation as any}
      >
        <planeGeometry />
        <meshStandardMaterial side={DoubleSide} map={texture} />
      </animated.mesh>

      <animated.mesh
        scale={scale}
        position={position}
        rotation={rotation as any}
      >
        <planeGeometry />
        {/* @ts-ignore */}
        <animated.meshStandardMaterial
          side={DoubleSide}
          color={Color.NAMES.black}
          transparent
          opacity={overlayOpacity}
        />
      </animated.mesh>
    </>
  );
};

export default Picture;
