import {
  INITIAL_PICTURES,
  PICTURE_ATTRIBUTES,
  SCALE_FACTOR,
} from '../../configs';
import ArrowIcon from '../ArrowIcon';
import Background from '../Background';
import ThreeCanvas from '../ThreeCanvas';

import useApp from './hook';
import style from './style.module.scss';

const App = () => {
  const { pictures, backgroundPicture, updatePosition } = useApp(
    INITIAL_PICTURES,
    PICTURE_ATTRIBUTES,
  );

  return (
    <div className={style.app}>
      <Background picture={backgroundPicture} />

      <div className={style.canvasContainer}>
        <ThreeCanvas
          className={style.threeCanvas}
          pictures={pictures}
          scaleFactor={SCALE_FACTOR}
        />
      </div>

      <ArrowIcon
        className={style.arrowLeft}
        direction="left"
        onClick={updatePosition}
      />
      <ArrowIcon
        className={style.arrowRight}
        direction="right"
        onClick={updatePosition}
      />
    </div>
  );
};

export default App;
