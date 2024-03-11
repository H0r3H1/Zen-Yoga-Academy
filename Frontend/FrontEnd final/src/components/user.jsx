import React from 'react';
import '../assets/user.css';

function    User() {
  return (
    <>
    <title>Login Page</title>
    <link
      href="https://fonts.googleapis.com/css?family=Lato:100"
      rel="stylesheet"
      type="text/css"
    />
    <div className="container">
      <h1>Login now</h1>
      <div className="login__form">
        <form>
          <input
            type="text"
            name="username"
            className="form__control"
            id="signup__email"
            placeholder="Email address"
          />
          <input
            type="password"
            name="password"
            className="form__control"
            id="signup__password"
            placeholder="Password"
          />
          <div className="login__options">
            <label>
              <input type="checkbox" name="check" />
              <span className="label-text">Remeber me</span>
            </label>
            <a href="#" className="forgot__password">
              Forgot your password?
            </a>
          </div>
          <div className="form__group">
            <button className="btn btn__login">SIGN IN</button>
          </div>
          <div className="signup__link">
            <span>
              Not a member? <a href="#">Sign up</a>
            </span>
          </div>
          <h5>
            <span>Or sign in with</span>
          </h5>
          <div className="social__login">
            <a href="#" className="btn btn__google">
              <i className="fa fa-google" /> GOOGLE
            </a>
            <a href="#" className="btn btn__facebook">
              <i className="fa fa-facebook" /> FACEBOOK
            </a>
          </div>
        </form>
      </div>
    </div>
  </>
  


  );
}

export default User;
