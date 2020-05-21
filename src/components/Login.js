import React from "react";

const Login = () => {
  return (
    <div className="signIn">
      <i className="far fa-flower-tulip"></i>
      <h2>Login into your account</h2>
      <label>Username</label>
      <input type="text" placeholder="Username" />
      <label> Password</label>
      <input type="password" placeholder="Password" />
      <button>Log in</button>
      <a href="/">Forgot password</a>
      <a href="/">Create new account</a>
    </div>
  );
};

export default Login;
