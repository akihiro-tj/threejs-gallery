import { Picture, PictureAttributes } from '../types';
import { radian } from '../utils';

export const RADIUS = 1.8;
export const SCALE_FACTOR = 0.23;

export const PICTURE_ATTRIBUTES: PictureAttributes = {
  RIGHT: {
    id: 'right',
    position: [RADIUS * Math.cos(0), 0, 0],
    rotation: [0, radian(-30), 0],
  },
  CENTER: {
    id: 'center',
    position: [0, 0, RADIUS * Math.sin(Math.PI / 2)],
    rotation: [0, 0, 0],
  },
  LEFT: {
    id: 'left',
    position: [RADIUS * Math.cos(Math.PI), 0, 0],
    rotation: [0, radian(30), 0],
  },
};

export const INITIAL_PICTURES: Picture[] = [
  {
    id: 'morning',
    from: PICTURE_ATTRIBUTES.LEFT,
    to: PICTURE_ATTRIBUTES.RIGHT,
  },
  {
    id: 'noon',
    from: PICTURE_ATTRIBUTES.RIGHT,
    to: PICTURE_ATTRIBUTES.CENTER,
  },
  {
    id: 'sunset',
    from: PICTURE_ATTRIBUTES.CENTER,
    to: PICTURE_ATTRIBUTES.LEFT,
  },
];
