import { useSpringRef, useTransition } from '@react-spring/web';
import { useEffect, useRef } from 'react';

import { Picture } from '../App/types';

const useBackground = (picture: Picture) => {
  const hasInitialized = useRef(false);
  const transRef = useSpringRef();

  const transitions = useTransition(picture, {
    ref: transRef,
    immediate: !hasInitialized.current,
    from: { backgroundColor: 'rgb(0 0 0 / 90%)' },
    enter: { backgroundColor: 'rgb(0 0 0 / 80%)' },
    leave: { backgroundColor: 'rgb(0 0 0 / 90%)' },
    config: { duration: 500 },
  });

  useEffect(() => {
    transRef.start();
    hasInitialized.current = true;
  }, [transRef, picture]);

  return { transitions };
};

export default useBackground;
