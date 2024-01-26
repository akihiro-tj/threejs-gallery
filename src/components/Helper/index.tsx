import { OrbitControls } from '@react-three/drei';
import { FunctionComponent } from 'react';

const Helper: FunctionComponent = () => {
  return (
    <>
      {import.meta.env.DEV && (
        <>
          <gridHelper />
          <axesHelper args={[5]} />
          <OrbitControls />
        </>
      )}
    </>
  );
};

export default Helper;
