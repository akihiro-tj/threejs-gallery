export type Direction = 'left' | 'right';

export type Position = [x: number, y: number, z: number];
export type Rotation = [x: number, y: number, z: number];

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

export type Picture = {
  id: string;
  from: PictureAttribute;
  to: PictureAttribute;
};
