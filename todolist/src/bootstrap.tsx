import { createRoot } from 'react-dom/client';

import App from './App';

const mount = (el: HTMLElement) => {
  const root = createRoot(el);
  root.render(<App />);
};

if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('todolist-root');

  if (container) {
    mount(container);
  }
}

export { mount };
