import { MouseEventHandler, useCallback } from 'react';

import Button from './components/Button';
import Panel from './components/Panel';
import { useAppContext, useAppDispatch } from './providers/app/AppContext';

const App = () => {
  const { count } = useAppContext();
  const dispatch = useAppDispatch();

  const handleDecrement: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      dispatch({ type: 'UPDATE_COUNT', payload: prev => prev - 1 });
    }, [dispatch]);

  const handleIncrement: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      dispatch({ type: 'UPDATE_COUNT', payload: prev => prev + 1 });
    }, [dispatch]);

  return (
    <>
      <Panel value={count} />
      <Button onClick={handleDecrement}>-</Button>
      <Button onClick={handleIncrement}>+</Button>
    </>
  );
};

export default App;
