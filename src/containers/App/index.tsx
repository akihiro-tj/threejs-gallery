import { FunctionComponent } from 'react';

import ArrowIcon from '../../components/ArrowIcon';
import Background from '../Background';
import Canvas from '../Canvas';

import { INITIAL_PICTURES, PICTURE_PROPS, SCALE_FACTOR } from './constants';
import useApp from './hooks';
import styles from './style.module.scss';

const App: FunctionComponent = () => {
  const { pictures, backgroundPicture, transformPictures } = useApp(
    INITIAL_PICTURES,
    PICTURE_PROPS,
  );

  return (
    <div className={styles.app}>
      <Background picture={backgroundPicture} />
      <Canvas
        className={styles.canvas}
        pictures={pictures}
        scaleFactor={SCALE_FACTOR}
      />
      <ArrowIcon
        className={styles.arrowLeft}
        direction="left"
        onClick={transformPictures}
      />
      <ArrowIcon
        className={styles.arrowRight}
        direction="right"
        onClick={transformPictures}
      />
    </div>
  );
};

export default App;
