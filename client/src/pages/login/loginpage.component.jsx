import React from 'react';
import './loginpage.styles.scss';

const LoginPage = () => (
  <div className="login-page">
    <h2>LOGIN PAGE</h2>
    <form>
      <div className="form-input">
        <label htmlFor="email">Enter Your Email</label>
        <input type="email" name="email" />
      </div>
      <div className="form-input">
        <label htmlFor="email">Enter Your Password</label>
        <input type="password" name="password" />
      </div>
      <input
        type="button"
        name="submit"
        value="Login"
        // eslint-disable-next-line no-console
        onClick={() => console.log('button clicked')}
      />

    </form>
  </div>
);

export default LoginPage;
