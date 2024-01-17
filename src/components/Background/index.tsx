import { animated } from '@react-spring/web';

import style from './style.module.scss';
import { BackgroundProps } from './types';

const Background = ({ imgURL, color }: BackgroundProps) => {
  return (
    <animated.div
      className={style.background}
      style={{ backgroundImage: imgURL }}
    >
      <animated.div
        className={style.overlay}
        style={{ backgroundColor: color }}
      />
    </animated.div>
  );
};

export default Background;
