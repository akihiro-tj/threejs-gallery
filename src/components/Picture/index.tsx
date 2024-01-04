import { animated } from '@react-spring/three';
import { DoubleSide } from 'three';

import { PictureAttribute } from '../../types';

import usePicture from './hook';

type PictureProps = {
  url: string;
  scaleFactor: number;
  from: PictureAttribute;
  to: PictureAttribute;
};

const Picture = ({ url, scaleFactor, from, to }: PictureProps) => {
  const { texture, scale, position } = usePicture(url, scaleFactor, from, to);

  return (
    <animated.mesh position={position} scale={scale}>
      <planeGeometry />
      <meshStandardMaterial side={DoubleSide} map={texture} />
    </animated.mesh>
  );
};

export default Picture;
