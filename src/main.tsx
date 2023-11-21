import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import AppProvider from './providers/app/AppContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
);
