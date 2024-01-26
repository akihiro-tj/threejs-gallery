import { animated } from '@react-spring/web';
import { FC } from 'react';

import styles from './style.module.scss';
import { BackgroundProps } from './types';

const Background: FC<BackgroundProps> = ({ imgURL, color }) => {
  return (
    <animated.div
      className={styles.background}
      style={{ backgroundImage: imgURL }}
    >
      <animated.div
        className={styles.overlay}
        style={{ backgroundColor: color }}
      />
    </animated.div>
  );
};

export default Background;
