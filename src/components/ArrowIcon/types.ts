import { MouseEventHandler } from 'react';

export type ArrowIconProps = {
  className?: string;
  direction: Direction;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type Direction = 'left' | 'right';
