// import { RouterProvider } from 'react-router-dom';
// import { router } from './router';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routesObj } from './router';

const App = () => {
  // return <RouterProvider router={router} />;

  return (
    <BrowserRouter>
      <Routes>
        {Object.values(routesObj).map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
