import { animated, useSpring } from '@react-spring/web';
import { useCallback, useMemo, useState } from 'react';

import { Direction, Picture, Position } from '../../types';
import ArrowIcon from '../ArrowIcon';
import ThreeCanvas from '../ThreeCanvas';

import style from './style.module.scss';

const RADIUS = 2;
const SCALE_FACTOR = 0.23;

const POSITIONS = {
  RIGHT: [RADIUS * Math.cos(0), 0, 0] as Position,
  CENTER: [0, 0, RADIUS * Math.sin(Math.PI / 2)] as Position,
  LEFT: [RADIUS * Math.cos(Math.PI), 0, 0] as Position,
};

const PICTURES: Picture[] = [
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

const positionValues = Object.values(POSITIONS);

const App = () => {
  const [pictures, setPictures] = useState(PICTURES);

  const [{ backgroundColor }, api] = useSpring<{ backgroundColor: string }>(
    () => ({}),
  );

  const backgroundPicture = useMemo(() => {
    return pictures.find(
      ({ to: { position } }) => position === POSITIONS.CENTER,
    ) as Picture;
  }, [pictures]);

  const updatePosition = useCallback(
    (direction: Direction) => {
      setPictures(prev => {
        return prev.map(picture => {
          const fromIndex = positionValues.findIndex(
            position => position === picture.to.position,
          );
          const toIndex =
            direction === 'left'
              ? fromIndex + 1 < positionValues.length
                ? fromIndex + 1
                : 0
              : fromIndex - 1 > -1
                ? fromIndex - 1
                : positionValues.length - 1;

          return {
            ...picture,
            from: { position: positionValues[fromIndex] },
            to: { position: positionValues[toIndex] },
          };
        });
      });

      api.start({
        from: { backgroundColor: 'rgb(0 0 0 / 100%)' },
        to: { backgroundColor: 'rgb(0 0 0 / 80%)' },
      });
    },
    [api],
  );

  return (
    <div className={style.app}>
      <animated.div
        className={style.background}
        style={{
          backgroundColor,
          backgroundImage: `url("./img/${backgroundPicture.id}.jpeg")`,
        }}
      />

      <div className={style.canvasContainer}>
        <ThreeCanvas
          className={style.threeCanvas}
          pictures={pictures}
          scaleFactor={SCALE_FACTOR}
        />
      </div>

      <ArrowIcon
        className={style.arrowLeft}
        onClick={() => updatePosition('left')}
      />
      <ArrowIcon
        className={style.arrowRight}
        onClick={() => updatePosition('right')}
      />
    </div>
  );
};

export default App;
