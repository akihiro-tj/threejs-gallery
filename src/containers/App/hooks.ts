import { MouseEventHandler, useCallback, useMemo, useState } from 'react';

import { Direction } from '../../components/ArrowIcon/types';
import { Picture } from '../../types';

import { PICTURE_PROPS } from './configs';

const useApp = (
  initialPictures: Picture[],
  pictureProps: typeof PICTURE_PROPS,
) => {
  const [pictures, setPictures] = useState(initialPictures);

  const backgroundPicture = useMemo(() => {
    return pictures.find(
      ({ positionID }) => positionID === pictureProps.CENTER.positionID,
    ) as Picture;
  }, [pictures, pictureProps]);

  const transformPictures: MouseEventHandler<HTMLButtonElement> = useCallback(
    event => {
      const direction = event.currentTarget.getAttribute(
        'data-direction',
      ) as Direction;
      const picturePropValues = Object.values(pictureProps);

      setPictures(pictures =>
        pictures.map((picture): Picture => {
          const prevIndex = picturePropValues.findIndex(
            ({ positionID }) => positionID === picture.positionID,
          );
          let nextIndex = -1;
          if (direction === 'left') {
            nextIndex = prevIndex + 1 < pictures.length ? prevIndex + 1 : 0;
          }
          if (direction === 'right') {
            nextIndex =
              prevIndex - 1 > -1 ? prevIndex - 1 : pictures.length - 1;
          }
          return { ...picture, ...picturePropValues[nextIndex] };
        }),
      );
    },
    [pictureProps],
  );

  return { pictures, backgroundPicture, transformPictures };
};

export default useApp;
