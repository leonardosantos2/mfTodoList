import { RouterProvider, RouterProviderProps } from 'react-router-dom';
import { HostContext } from './context/host';

type AppProps = {
  router: RouterProviderProps['router'];
  onSignIn: (newUserToken: string) => void;
};

const App = ({ router, onSignIn }: AppProps) => {
  return (
    <div style={{ backgroundColor: '#ffefe1' }}>
      <HostContext.Provider value={{ onSignIn }}>
        <RouterProvider router={router} />
      </HostContext.Provider>
    </div>
  );
};

export default App;
