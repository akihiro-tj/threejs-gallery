import { SpringValue } from '@react-spring/web';
import { Texture } from 'three';

export type PictureProps = {
  texture: Texture;
  scale: [number, number, number];
  position: SpringValue<Position>;
  rotation: SpringValue<Rotation>;
  overlayOpacity: SpringValue<number>;
};

export type Position = [x: number, y: number, z: number];
export type Rotation = [x: number, y: number, z: number];
