import { PerspectiveCamera } from '@react-three/drei';
import { Canvas as R3FCanvas } from '@react-three/fiber';

import PictureContainer from '../Picture';

import style from './style.module.scss';
import { CanvasContentProps, CanvasContainerProps } from './types';

const CanvasContent = ({ pictures, scaleFactor }: CanvasContentProps) => {
  return (
    <>
      <PerspectiveCamera position={[0, 0, 6]} makeDefault />
      <ambientLight />

      {pictures.map(({ id, position, rotation, overlayOpacity }) => (
        <PictureContainer
          key={id}
          url={`./img/${id}.jpeg`}
          scaleFactor={scaleFactor}
          position={position}
          rotation={rotation}
          overlayOpacity={overlayOpacity}
        />
      ))}
    </>
  );
};

const CanvasContainer = ({
  className,
  pictures,
  scaleFactor,
}: CanvasContainerProps) => {
  return (
    <div className={className}>
      <R3FCanvas className={style.canvas}>
        <CanvasContent pictures={pictures} scaleFactor={scaleFactor} />
      </R3FCanvas>
    </div>
  );
};

export default CanvasContainer;
