import { useAspect, useTexture } from '@react-three/drei';
import { DoubleSide } from 'three';

type PictureProps = {
  position: [number, number, number];
  imgURL: string;
  scaleFactor: number;
};

const Picture = ({ position, imgURL, scaleFactor }: PictureProps) => {
  const texture = useTexture(imgURL);
  const { width, height } = texture.source.data;
  const scale = useAspect(width, height, scaleFactor);

  return (
    <mesh position={position} scale={scale}>
      <planeGeometry />
      <meshStandardMaterial side={DoubleSide} map={texture} />
    </mesh>
  );
};

export default Picture;
