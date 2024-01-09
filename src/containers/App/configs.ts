import { radian } from '../../utils';

import { Picture, PictureAttributes } from './types';

export const RADIUS = 2;
export const SCALE_FACTOR = 0.25;
export const OVERLAY_OPACITY = {
  VISIBLE: 0.3,
  HIDDEN: 0,
};

export const PICTURE_ATTRIBUTES: PictureAttributes = {
  RIGHT: {
    positionID: 'right',
    position: [RADIUS * Math.cos(0), 0, 0],
    rotation: [0, radian(-30), 0],
    overlayOpacity: OVERLAY_OPACITY.VISIBLE,
  },
  CENTER: {
    positionID: 'center',
    position: [0, 0, RADIUS * Math.sin(Math.PI / 2)],
    rotation: [0, 0, 0],
    overlayOpacity: OVERLAY_OPACITY.HIDDEN,
  },
  LEFT: {
    positionID: 'left',
    position: [RADIUS * Math.cos(Math.PI), 0, 0],
    rotation: [0, radian(30), 0],
    overlayOpacity: OVERLAY_OPACITY.VISIBLE,
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
