import { useNavigate } from 'react-router';
import { routesObj } from '../router';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome to the Todo List App</h1>
      <p>Click on the Todolist link to get started</p>
      <button
        type="button"
        onClick={() => navigate(routesObj['todolist'].path)}
      >
        Go to Todo List
      </button>
    </>
  );
};

export default Home;
