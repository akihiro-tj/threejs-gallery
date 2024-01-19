import { Picture } from '../../types';

export type CanvasContentProps = {
  pictures: Picture[];
  scaleFactor: number;
};

export type CanvasContainerProps = {
  className?: string;
} & CanvasContentProps;
