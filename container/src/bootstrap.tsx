import { createRoot } from 'react-dom/client';

import App from './App';

const container = document.getElementById('container-root');

if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
