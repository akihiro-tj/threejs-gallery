import { DoubleSide } from 'three';

const Picture = () => {
  return (
    <mesh>
      <boxGeometry />
      <meshNormalMaterial side={DoubleSide} />
    </mesh>
  );
};

export default Picture;
