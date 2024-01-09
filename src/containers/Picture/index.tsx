import Picture from '../../components/Picture';

import usePicture from './hooks';
import { PictureContainerProps } from './types';

const PictureContainer = ({
  url,
  scaleFactor,
  from,
  to,
}: PictureContainerProps) => {
  const pictureProps = usePicture(url, scaleFactor, from, to);

  return <Picture {...pictureProps} />;
};

export default PictureContainer;
