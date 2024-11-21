import { createRoot } from 'react-dom/client';
import { createMemoryRouter, RouterProviderProps } from 'react-router';

import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import { routesObj } from './router';

const mount = (
  el: HTMLElement,
  {
    defaultHistory,
  }: {
    defaultHistory: RouterProviderProps['router'];
  },
) => {
  const router = defaultHistory || createMemoryRouter(Object.values(routesObj));

  const root = createRoot(el);
  root.render(<App router={router} />);
};

if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('todolist-root');

  if (container) {
    mount(container, {
      defaultHistory: createBrowserRouter(Object.values(routesObj)),
    });
  }
}

export { mount };
