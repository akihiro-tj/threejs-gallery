import { Position, Rotation } from '../../components/Picture/types';

export type Picture = {
  id: string;
  from: PictureAttribute;
  to: PictureAttribute;
};

export type PictureAttribute = {
  positionID: 'right' | 'center' | 'left';
  position: Position;
  rotation: Rotation;
  overlayOpacity: number;
};

export type PictureAttributes = {
  RIGHT: PictureAttribute;
  CENTER: PictureAttribute;
  LEFT: PictureAttribute;
};
