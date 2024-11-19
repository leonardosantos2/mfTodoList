import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoListApp from './components/TodoApp';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<TodoListApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
