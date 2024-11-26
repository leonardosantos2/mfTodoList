import { routesObj } from '../router';

const Singin = () => {
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

        <button onClick={() => console.log('Signin clicked')}>Log in</button>
        <p>
          New User? <a href={routesObj.signup.path}>Click here</a>
        </p>
      </form>
    </>
  );
};

export default Singin;
