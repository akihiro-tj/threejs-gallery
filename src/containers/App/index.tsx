import ArrowIcon from '../../components/ArrowIcon';
import Background from '../Background';
import Canvas from '../Canvas';

import { INITIAL_PICTURES, PICTURE_PROPS, SCALE_FACTOR } from './configs';
import useApp from './hooks';
import style from './style.module.scss';

const App = () => {
  const { pictures, backgroundPicture, transformPictures } = useApp(
    INITIAL_PICTURES,
    PICTURE_PROPS,
  );

  return (
    <div className={style.app}>
      <Background picture={backgroundPicture} />
      <Canvas
        className={style.canvas}
        pictures={pictures}
        scaleFactor={SCALE_FACTOR}
      />
      <ArrowIcon
        className={style.arrowLeft}
        direction="left"
        onClick={transformPictures}
      />
      <ArrowIcon
        className={style.arrowRight}
        direction="right"
        onClick={transformPictures}
      />
    </div>
  );
};

export default App;
