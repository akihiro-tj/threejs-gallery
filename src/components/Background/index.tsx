import { animated } from '@react-spring/web';

import style from './style.module.scss';
import { BackgroundProps } from './types';

const Background = ({ backgroundImage, backgroundColor }: BackgroundProps) => {
  return (
    <animated.div className={style.background} style={{ backgroundImage }}>
      <animated.div className={style.overlay} style={{ backgroundColor }} />
    </animated.div>
  );
};

export default Background;
