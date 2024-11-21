import Signin from './components/Signin';
import Signup from './components/Signup';

export const routesObj = {
  signin: {
    path: '/auth/signin',
    element: <Signin />,
  },
  signup: {
    path: '/auth/signup',
    element: <Signup />,
  },
} as const;
