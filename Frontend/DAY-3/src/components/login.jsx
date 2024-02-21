  import React , {useState} from 'react';
import '../assets/login.css';

function SignInUpForm() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Perform validation
    if (!loginEmail || !loginPassword) {
      alert('Please enter both email and password.');
      return;
    }
    // Proceed with login
    // Your login logic here
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Perform validation
    if (!signupName || !signupEmail || !signupPassword) {
      alert('Please fill in all fields.');
      return;
    }
    if (!isValidEmail(signupEmail)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (signupPassword.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
    // Proceed with signup
    // Your signup logic here
  };

  const isValidEmail = (email) => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      {/* Coding by CodingLab | www.codinglabweb.com*/}
      <meta charSet="UTF-8" />
      {/*<title> Login and Registration Form in HTML & CSS | CodingLab </title>*/}
      <link rel="stylesheet" href="style.css" />
      {/* Fontawesome CDN Link */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            {/*<img src="images/frontImg.jpg" alt="">*/}
            <div className="text">
              <span className="text-1">
               
              </span>
              <span className="text-2"></span>
              
            </div>
          </div>
          <div className="back">
            {/*<img class="backImg" src="images/backImg.jpg" alt="">*/}
            <div className="text">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input type="text" placeholder="Enter your email" required="" />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required=""
                    />
                  </div>
                  <div className="text">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="button input-box">
                    <input type="submit" defaultValue="Submit" />
                  </div>
                  <div className="text sign-up-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Don't have an account?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <label htmlFor="flip">Signup now&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user" />
                    <input type="text" placeholder="Enter your name" required="" />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input type="text" placeholder="Enter your email" required="@" />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required=""
                    />
                  </div>
                  <div className="button input-box">
                    <input type="submit" defaultValue="Submit" />
                  </div>
                  <div className="text sign-up-text">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Already have an account?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label htmlFor="flip"> Login now&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInUpForm;
