import Picture from '../../components/Picture';

import usePicture from './hooks';
import { PictureContainerProps } from './types';

const PictureContainer = ({
  url,
  scaleFactor,
  position,
  rotation,
  overlayOpacity,
}: PictureContainerProps) => {
  const { pictureProps } = usePicture(
    url,
    scaleFactor,
    position,
    rotation,
    overlayOpacity,
  );

  return <Picture {...pictureProps} />;
};

export default PictureContainer;
