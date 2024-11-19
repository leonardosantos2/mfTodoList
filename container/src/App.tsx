import { BrowserRouter } from 'react-router-dom';
import TodoListApp from './components/TodoApp';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <TodoListApp />
    </BrowserRouter>
  );
};

export default App;
