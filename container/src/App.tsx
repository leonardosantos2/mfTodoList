import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';

const TodoListApp = lazy(() => import('./components/TodoApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));

const App = () => {
  return (
    <div style={{ backgroundColor: '#d2f8d2' }}>
      <BrowserRouter>
        <Header />

        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/auth/*" element={<AuthApp />} />
            <Route path="/*" element={<TodoListApp />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
