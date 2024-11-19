import { createRoot } from 'react-dom/client';
import { createMemoryRouter, RouterProviderProps } from 'react-router';

import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import { routesObj } from './router';

const mount = (
  el: HTMLElement,
  {
    defaultHistory,
    onNavigate,
  }: {
    defaultHistory: RouterProviderProps['router'];
    onNavigate?: (nextPathname: string) => void;
  },
) => {
  const router = defaultHistory || createMemoryRouter(Object.values(routesObj));

  if (onNavigate) {
    router.subscribe(({ location }) => onNavigate(location.pathname));
  }

  const root = createRoot(el);
  root.render(<App router={router} />);

  return {
    onParentNavigate: (nextPathname?: string) => {
      if (nextPathname && router.state.location.pathname !== nextPathname) {
        router.navigate(nextPathname);
      }
    },
  };
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
