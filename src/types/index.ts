export type Position = [number, number, number];

export type Positions = {
  RIGHT: Position;
  CENTER: Position;
  LEFT: Position;
};

export type Direction = 'left' | 'right';

export type PictureAttribute = {
  position: Position;
};

export type Picture = {
  id: string;
  from: PictureAttribute;
  to: PictureAttribute;
};
