import { useContext } from 'react';
import { routesObj } from '../router';
import { HostContext } from '../context/host';

const Singin = () => {
  const { onSignIn } = useContext(HostContext);

  return (
    <>
      <h1>Sign In</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button
          onClick={() =>
            onSignIn((Math.random() + 1).toString(36).substring(2))
          }
        >
          Log in
        </button>
        <p>
          New User? <a href={routesObj.signup.path}>Click here</a>
        </p>
      </form>
    </>
  );
};

export default Singin;
