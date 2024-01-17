import { Position, Rotation } from '../../components/Picture/types';

export type PictureContainerProps = {
  url: string;
  scaleFactor: number;
  position: Position;
  rotation: Rotation;
  overlayOpacity: number;
};
