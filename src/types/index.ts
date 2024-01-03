export type Position = [number, number, number];
export type Direction = 'left' | 'right';

export type Attribute = {
  position: Position;
};

export type Picture = {
  id: string;
  from: Attribute;
  to: Attribute;
};
