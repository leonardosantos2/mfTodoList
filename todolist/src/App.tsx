import { RouterProvider, RouterProviderProps } from 'react-router-dom';

type AppProps = {
  router: RouterProviderProps['router'];
};

const App = ({ router }: AppProps) => {
  return (
    <div style={{ backgroundColor: '#e1f1ff' }}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
