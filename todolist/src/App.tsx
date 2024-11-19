import { RouterProvider, RouterProviderProps } from 'react-router-dom';

type AppProps = {
  router: RouterProviderProps['router'];
};

const App = ({ router }: AppProps) => {
  return <RouterProvider router={router} />;
};

export default App;
