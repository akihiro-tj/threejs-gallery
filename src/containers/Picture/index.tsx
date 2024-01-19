import Picture from '../../components/Picture';

import usePicture from './hooks';
import { PictureContainerProps } from './types';

const PictureContainer = ({ picture, scaleFactor }: PictureContainerProps) => {
  const { pictureProps } = usePicture(picture, scaleFactor);

  return <Picture {...pictureProps} />;
};

export default PictureContainer;
