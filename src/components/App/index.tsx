import { MouseEventHandler, useCallback, useState } from 'react';

import { Direction, Picture, Position } from '../../types';
import ArrowIcon from '../ArrowIcon';
import ThreeCanvas from '../ThreeCanvas';

import style from './style.module.scss';

const RADIUS = 2;
const SCALE_FACTOR = 0.15;

const POSITIONS = [
  [RADIUS * Math.cos(0), 0, 0],
  [0, 0, RADIUS * 1.5 * Math.sin(Math.PI / 2)],
  [RADIUS * Math.cos(Math.PI), 0, 0],
] as Position[];

const PICTURES: Picture[] = [
  {
    id: 'morning',
    from: { position: POSITIONS[2] },
    to: { position: POSITIONS[0] },
  },
  {
    id: 'noon',
    from: { position: POSITIONS[0] },
    to: { position: POSITIONS[1] },
  },
  {
    id: 'sunset',
    from: { position: POSITIONS[1] },
    to: { position: POSITIONS[2] },
  },
];

const calcPosition = (currentPosition: Position, direction: Direction) => {
  const fromIndex = POSITIONS.findIndex(
    position => position === currentPosition,
  );

  let toIndex: number;
  switch (direction) {
    case 'left': {
      toIndex = fromIndex + 1 < POSITIONS.length ? fromIndex + 1 : 0;
      break;
    }
    case 'right': {
      toIndex = fromIndex - 1 > -1 ? fromIndex - 1 : POSITIONS.length - 1;
      break;
    }
    default: {
      toIndex = NaN;
      break;
    }
  }

  return {
    from: { position: POSITIONS[fromIndex] },
    to: { position: POSITIONS[toIndex] },
  };
};

const App = () => {
  const [pictures, setPictures] = useState(PICTURES);

  const transformPosition = useCallback((direction: Direction) => {
    setPictures(prev =>
      prev.map(picture => ({
        ...picture,
        ...calcPosition(picture.to.position, direction),
      })),
    );
  }, []);

  const handleArrowLeftClick: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      transformPosition('left');
    }, [transformPosition]);

  const handleArrowRightClick: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      transformPosition('right');
    }, [transformPosition]);

  return (
    <div className={style.app}>
      <ThreeCanvas pictures={pictures} scaleFactor={SCALE_FACTOR} />
      <ArrowIcon className={style.arrowLeft} onClick={handleArrowLeftClick} />
      <ArrowIcon className={style.arrowRight} onClick={handleArrowRightClick} />
    </div>
  );
};

export default App;
