import { Position, Rotation } from '../../components/Picture/types';

export type Picture = {
  id: string;
  positionID: string;
  position: Position;
  rotation: Rotation;
  overlayOpacity: number;
};
