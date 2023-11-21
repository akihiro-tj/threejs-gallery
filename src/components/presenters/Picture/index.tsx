import { DoubleSide } from 'three';

type PictureProps = {
  position: [number, number, number];
};

const Picture = ({ position }: PictureProps) => {
  return (
    <mesh position={position}>
      <planeGeometry />
      <meshNormalMaterial side={DoubleSide} />
    </mesh>
  );
};

export default Picture;
