import ArrowIcon from '../../components/ArrowIcon';
import Background from '../../components/Background';
import ThreeCanvas from '../../components/ThreeCanvas';
import {
  INITIAL_PICTURES,
  PICTURE_ATTRIBUTES,
  SCALE_FACTOR,
} from '../../configs';

import useApp from './hooks';
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
