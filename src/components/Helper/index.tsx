import { OrbitControls } from '@react-three/drei';
import { FC } from 'react';

const Helper: FC = () => {
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
