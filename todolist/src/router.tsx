import { createBrowserRouter } from 'react-router-dom';

import TodoListView from './view/TodoListView';
import Home from './view/Home';
import ErrorPage from './view/ErrorPage';

export const routesObj = {
  home: {
    path: '/',
    element: <Home />,
  },
  todolist: {
    path: '/todolist',
    element: <TodoListView />,
    errorElement: <ErrorPage />,
  },
  '404': {
    path: '/404',
    element: <ErrorPage />,
  },
} as const;

export const router = createBrowserRouter(Object.values(routesObj));
