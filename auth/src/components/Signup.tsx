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
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />

        <div style={{ display: 'flex' }}>
          <input
            type="checkbox"
            id="latestnews"
            style={{ width: 'min-content' }}
          />
          <label htmlFor="latestnews">Subscribe to latest news</label>
        </div>

        <button onClick={handleSubmit}>Log in</button>
        <p>
          Already an User? <a href={routesObj.signin.path}>Click here</a>
        </p>
      </form>
    </>
  );
};

export default Signup;
