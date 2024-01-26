import { FC } from 'react';

import Picture from '../../components/Picture';

import usePicture from './hooks';
import { PictureContainerProps } from './types';

const PictureContainer: FC<PictureContainerProps> = ({
  picture,
  scaleFactor,
}) => {
  const { pictureProps } = usePicture(picture, scaleFactor);

  return <Picture {...pictureProps} />;
};

export default PictureContainer;
