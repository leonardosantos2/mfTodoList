import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();

  const { userToken, setUserToken } = useContext(AuthContext);

  const handleLoginLogout = () => {
    if (userToken) {
      // Logout
      setUserToken(null);
    } else {
      // Login
      navigate('/auth/signin');
    }
  };

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

      <button onClick={handleLoginLogout}>
        {userToken ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Header;
