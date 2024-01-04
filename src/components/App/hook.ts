import { MouseEventHandler, useCallback, useMemo, useState } from 'react';

import { Picture, Positions } from '../../types';

const useApp = (initialPictures: Picture[], positions: Positions) => {
  const [pictures, setPictures] = useState(initialPictures);

  const positionValues = useMemo(() => Object.values(positions), [positions]);

  const backgroundPicture = useMemo(() => {
    return pictures.find(
      ({ to: { position } }) => position === positions.CENTER,
    ) as Picture;
  }, [pictures, positions]);

  const updatePosition: MouseEventHandler<HTMLButtonElement> = useCallback(
    event => {
      const direction = event.currentTarget.getAttribute('data-direction');

      setPictures(pictures => {
        return pictures.map(picture => {
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
    },
    [positionValues],
  );

  return { pictures, backgroundPicture, updatePosition };
};

export default useApp;
