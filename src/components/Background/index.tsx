import { useTransition, animated, useSpringRef } from '@react-spring/web';
import { useEffect, useRef } from 'react';

import { Picture } from '../../types';

import style from './style.module.scss';

type BackgroundProps = {
  picture: Picture;
};

const Background = ({ picture }: BackgroundProps) => {
  const hasInitialized = useRef(false);
  const transRef = useSpringRef();

  const transitions = useTransition(picture, {
    ref: transRef,
    immediate: !hasInitialized.current,
    from: { backgroundColor: 'rgb(0 0 0 / 90%)' },
    enter: { backgroundColor: 'rgb(0 0 0 / 80%)' },
    leave: { backgroundColor: 'rgb(0 0 0 / 90%)' },
  });

  useEffect(() => {
    transRef.start();
    hasInitialized.current = true;
  }, [transRef, picture]);

  return transitions(({ backgroundColor }, { id }) => (
    <animated.div
      className={style.background}
      style={{
        backgroundColor,
        backgroundImage: `url("./img/${id}.jpeg")`,
      }}
    />
  ));
};

export default Background;
