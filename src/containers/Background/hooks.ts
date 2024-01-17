import { useSpringRef, useTransition } from '@react-spring/web';
import { useEffect, useRef } from 'react';

import { Picture } from '../App/types';

const useBackground = (picture: Picture) => {
  const hasInitialized = useRef(false);
  const bgSpring = useSpringRef();

  const transitions = useTransition(picture, {
    ref: bgSpring,
    immediate: !hasInitialized.current,
    from: { backgroundColor: 'rgb(0 0 0 / 87.5%)' },
    enter: { backgroundColor: 'rgb(0 0 0 / 80%)' },
    leave: { backgroundColor: 'rgb(0 0 0 / 87.5%)' },
    config: { duration: 1000 },
  });

  useEffect(() => {
    bgSpring.start();
    hasInitialized.current = true;
  }, [bgSpring, picture]);

  return { transitions };
};

export default useBackground;
