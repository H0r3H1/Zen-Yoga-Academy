import React from 'react';
import '../assets/admin.css';

function    Admin() {
  return (
<div className="login-box">
  <h2>Admin Login</h2>
  <form>
    
    <div className="user-box">
      <input type="text" name="" required="" />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name="" required="" />
      <label>Password</label>
    </div>
    <a href="/land">
      <span />
      <span />
      <span />
      <span />
      Submit
    </a>
  </form>
</div>

  
  );
}

export default Admin;
