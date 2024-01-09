import Background from '../../components/Background';

import useBackground from './hooks';
import { BackgroundContainerProps } from './types';

const BackgroundContainer = ({ picture }: BackgroundContainerProps) => {
  const { transitions } = useBackground(picture);

  return transitions(({ backgroundColor }, { id }) => (
    <Background
      backgroundImage={`url("./img/${id}.jpeg")`}
      backgroundColor={backgroundColor}
    />
  ));
};

export default BackgroundContainer;
