import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: 'solid 1px gray',
        padding: '0 0 16px',
      }}
    >
      <div style={{ display: 'flex' }}>
        <button onClick={() => navigate('/')}>Home</button>
        <p>
          <strong>Container App</strong>
        </p>
      </div>

      <button onClick={() => navigate('/auth/signin')}>Login</button>
    </div>
  );
};

export default Header;
