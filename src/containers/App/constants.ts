import { Position, Rotation } from '../../components/Picture/types';
import { Picture } from '../../types';
import { radian } from '../../utils';

export const RADIUS = 2;
export const SCALE_FACTOR = 0.25;

export const OVERLAY_OPACITIES = {
  VISIBLE: 0.3,
  HIDDEN: 0,
};

export const PICTURE_PROPS = {
  RIGHT: {
    positionID: 'right',
    position: [RADIUS * Math.cos(0), 0, 0] as Position,
    rotation: [0, radian(-30), 0] as Rotation,
    overlayOpacity: OVERLAY_OPACITIES.VISIBLE,
  },
  CENTER: {
    positionID: 'center',
    position: [0, 0, RADIUS * Math.sin(Math.PI / 2)] as Position,
    rotation: [0, 0, 0] as Rotation,
    overlayOpacity: OVERLAY_OPACITIES.HIDDEN,
  },
  LEFT: {
    positionID: 'left',
    position: [RADIUS * Math.cos(Math.PI), 0, 0] as Position,
    rotation: [0, radian(30), 0] as Rotation,
    overlayOpacity: OVERLAY_OPACITIES.VISIBLE,
  },
};

export const INITIAL_PICTURES: Picture[] = [
  {
    id: 'morning',
    ...PICTURE_PROPS.RIGHT,
  },
  {
    id: 'noon',
    ...PICTURE_PROPS.CENTER,
  },
  {
    id: 'sunset',
    ...PICTURE_PROPS.LEFT,
  },
];
