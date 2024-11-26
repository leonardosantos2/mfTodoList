import { createRoot } from 'react-dom/client';
import { createMemoryRouter, RouterProviderProps } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import { routesObj } from './router';

const mount = (
  el: HTMLElement,
  {
    defaultHistory,
    initialPath,
    onNavigate,
    ...props
  }: {
    defaultHistory?: RouterProviderProps['router'];
    initialPath?: string;
    onNavigate?: (nextPathname: string) => void;
  },
) => {
  const router =
    defaultHistory ||
    createMemoryRouter(Object.values(routesObj), {
      initialEntries: initialPath ? [initialPath] : undefined,
    });

  if (onNavigate) {
    router.subscribe(({ location }) => onNavigate(location.pathname));
  }

  const root = createRoot(el);
  root.render(<App {...props} router={router} />);

  return {
    onParentNavigate: (nextPathname?: string) => {
      if (nextPathname && router.state.location.pathname !== nextPathname) {
        router.navigate(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const container = document.getElementById('auth-root');

  if (container) {
    mount(container, {
      defaultHistory: createBrowserRouter(Object.values(routesObj)),
    });
  }
}

export { mount };
