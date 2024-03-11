import React from 'react';
import '../assets/welcome.css';

function    Welcome() {
  return (
    <>
    <header className="v-header welcome container">
      <div className="fullscreen-video-wrap">
        {/*  https://www.videvo.net/video/typing-on-computer-white-bg/4475/ */}
        {/* DO NOT USE THIS VIDEO, I JUST NEEDED A HOSTED VIDEO FOR THIS CODEPEN> USE THE ONE ABOVE */}
       
      </div>
      <div className="header-overlay" />
      <div className="header-content text-md-center">
       &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  <h1>ZEN YOGA ACADEMY</h1>
       <a href="/ulogin">
        <i className="btn" />
       USER LOGIN
      </a>
      <a href="/ad">
        <i className="btn" />
      ADMIN LOGIN
      </a>
    
      </div>
    </header>
    
    
  </>
  
  );
}

export default Welcome;
