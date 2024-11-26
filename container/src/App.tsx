import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import { AuthContextProvider } from './context/AuthContext';

const TodoListAppLazy = lazy(() => import('./components/TodoApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));

const App = () => {
  return (
    <div style={{ backgroundColor: '#d2f8d2' }}>
      <BrowserRouter>
        <AuthContextProvider>
          <Header />

          <Suspense fallback={<p>Loading...</p>}>
            <Routes>
              <Route path="/auth/*" element={<AuthAppLazy />} />
              <Route path="/*" element={<TodoListAppLazy />} />
            </Routes>
          </Suspense>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
