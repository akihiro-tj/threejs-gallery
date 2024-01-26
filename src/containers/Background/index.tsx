import { FunctionComponent } from 'react';

import Background from '../../components/Background';

import useBackground from './hooks';
import { BackgroundContainerProps } from './types';

const BackgroundContainer: FunctionComponent<BackgroundContainerProps> = ({
  picture,
}) => {
  const { transitions } = useBackground(picture);

  return transitions(({ backgroundColor }, { id }) => (
    <Background imgURL={`url("./img/${id}.jpeg")`} color={backgroundColor} />
  ));
};

export default BackgroundContainer;
