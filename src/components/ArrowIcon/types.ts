import { MouseEventHandler } from 'react';

import { Direction } from '../../types';

export type ArrowIconProps = {
  className?: string;
  direction: Direction;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
