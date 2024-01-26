import { PerspectiveCamera } from '@react-three/drei';
import { Canvas as R3FCanvas } from '@react-three/fiber';

import Picture from '../Picture';

import styles from './style.module.scss';
import { CanvasContentProps, CanvasContainerProps } from './types';

const CanvasContent = ({ pictures, scaleFactor }: CanvasContentProps) => {
  return (
    <>
      <PerspectiveCamera position={[0, 0, 6]} makeDefault />
      <ambientLight />

      {pictures.map(picture => (
        <Picture key={picture.id} picture={picture} scaleFactor={scaleFactor} />
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
      <R3FCanvas className={styles.canvas}>
        <CanvasContent pictures={pictures} scaleFactor={scaleFactor} />
      </R3FCanvas>
    </div>
  );
};

export default CanvasContainer;
