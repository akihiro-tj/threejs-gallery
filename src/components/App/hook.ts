import { MouseEventHandler, useCallback, useMemo, useState } from 'react';

import { Picture, PictureAttributes } from '../../types';

const useApp = (
  initialPictures: Picture[],
  pictureAttributes: PictureAttributes,
) => {
  const [pictures, setPictures] = useState(initialPictures);

  const attributeValues = useMemo(
    () => Object.values(pictureAttributes),
    [pictureAttributes],
  );

  const backgroundPicture = useMemo(() => {
    return pictures.find(
      ({ to: { id } }) => id === pictureAttributes.CENTER.id,
    ) as Picture;
  }, [pictures, pictureAttributes]);

  const updatePosition: MouseEventHandler<HTMLButtonElement> = useCallback(
    event => {
      const direction = event.currentTarget.getAttribute('data-direction');

      setPictures(pictures => {
        return pictures.map(picture => {
          const fromIndex = attributeValues.findIndex(
            ({ id }) => id === picture.to.id,
          );
          const toIndex =
            direction === 'left'
              ? fromIndex + 1 < attributeValues.length
                ? fromIndex + 1
                : 0
              : fromIndex - 1 > -1
                ? fromIndex - 1
                : attributeValues.length - 1;

          return {
            ...picture,
            from: attributeValues[fromIndex],
            to: attributeValues[toIndex],
          };
        });
      });
    },
    [attributeValues],
  );

  return { pictures, backgroundPicture, updatePosition };
};

export default useApp;
