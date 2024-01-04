import { Picture, Position } from '../types';

export const RADIUS = 2;
export const SCALE_FACTOR = 0.23;

export const POSITIONS = {
  RIGHT: [RADIUS * Math.cos(0), 0, 0] as Position,
  CENTER: [0, 0, RADIUS * Math.sin(Math.PI / 2)] as Position,
  LEFT: [RADIUS * Math.cos(Math.PI), 0, 0] as Position,
};

export const INITIAL_PICTURES: Picture[] = [
  {
    id: 'morning',
    from: { position: POSITIONS.LEFT },
    to: { position: POSITIONS.RIGHT },
  },
  {
    id: 'noon',
    from: { position: POSITIONS.RIGHT },
    to: { position: POSITIONS.CENTER },
  },
  {
    id: 'sunset',
    from: { position: POSITIONS.CENTER },
    to: { position: POSITIONS.LEFT },
  },
];
