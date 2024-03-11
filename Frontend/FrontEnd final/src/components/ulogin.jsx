import React, { useState } from 'react';
import '../assets/ulogin.css';

function Ulogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email.trim()) {
      setEmailError('Please enter your email.');
      return;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      alert('Please enter your password.');
      return;
    }

    // If validation passes, you can proceed with form submission or other actions
    console.log('Form submitted:', { email, password, rememberMe });
  };

  return (
    <div className="container">
    {/* Other JSX elements */}
    <img
      src="https://png.pngtree.com/png-clipart/20230917/original/pngtree-meditation-person-in-the-lotus-meditating-in-the-yoga-zen-yoga-png-image_12282556.png"
      alt="Image"
      style={{
        left:'500px',
        width: '450px', // Adjust the width as needed
        height: '450px', // Adjust the height as needed
        borderRadius: '100%', // Apply border-radius for rounded corners
        // Add other CSS properties as needed
      }}
    />

      <div className="form">
        <div className="sign-in-section">
          <h1>Log in</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="email">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input 
                id="email" 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <span className="error">{emailError}</span>}
            </div>
            <div className="form-field">
              <label htmlFor="password">Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input 
                id="password" 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-options">
              <div className="checkbox-field">
                
                
              </div>
              <a href="#">Forgot Password?</a>
            </div>
            <div className="form-field">
            <input
                type="submit"
                className="ulogin btn btn-signin"
                value="Submit"
             />
            </div>
          </form>
          <div className="links">
            <a href="#">Don't have an account?</a>
            <a href="/login">Register</a>
          </div>
        </div>
      </div>
    </div>
    

  );
}

export default Ulogin;
