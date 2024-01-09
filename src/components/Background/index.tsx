import { animated } from '@react-spring/web';

import useBackground from './hooks';
import style from './style.module.scss';
import { BackgroundProps } from './types';

const Background = ({ picture }: BackgroundProps) => {
  const { transitions } = useBackground(picture);

  return transitions(({ backgroundColor }, { id }) => (
    <animated.div
      className={style.background}
      style={{ backgroundImage: `url("./img/${id}.jpeg")` }}
    >
      <animated.div className={style.overlay} style={{ backgroundColor }} />
    </animated.div>
  ));
};

export default Background;
