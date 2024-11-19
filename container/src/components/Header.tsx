import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        borderBottom: 'solid 1px gray',
        padding: '0 0 16px',
      }}
    >
      <h1>My Container App</h1>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  );
};

export default Header;
