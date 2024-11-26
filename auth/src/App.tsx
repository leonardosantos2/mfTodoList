import { RouterProvider, RouterProviderProps } from 'react-router-dom';

import { AuthContextProvider } from 'authContext/AuthContextIndex';

type AppProps = {
  router: RouterProviderProps['router'];
};

const App = ({ router }: AppProps) => {
  return (
    <div style={{ backgroundColor: '#ffefe1' }}>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </div>
  );
};

export default App;
