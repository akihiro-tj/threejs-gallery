import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './containers/App';

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
