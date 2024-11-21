import { routesObj } from '../router';

const Signup = () => {
  const handleSubmit = () => {
    console.log('Sign up');
  };

  return (
    <>
      <h1>Sign Up</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button onClick={handleSubmit}>Log in</button>
        <p>
          Already an User? <a href={routesObj.signin.path}>Click here</a>
        </p>
      </form>
    </>
  );
};

export default Signup;
