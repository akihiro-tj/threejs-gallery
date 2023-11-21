import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

import {
  AppState,
  initialAppState,
  appReducer,
  ActionType,
} from './appReducer';

type AppProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext<AppState>(initialAppState);
export const AppDispatchContext = createContext<Dispatch<ActionType>>(() => {
  return;
});

const AppProvider = ({ children }: AppProviderProps) => {
  const [appState, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={appState}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export const useAppDispatch = () => {
  return useContext(AppDispatchContext);
};

export default AppProvider;
