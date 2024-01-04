import { OrbitControls } from '@react-three/drei';

const Helper = () => {
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
