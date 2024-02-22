import React from 'react';
import '../assets/welcome.css';

function    Welcome() {
  return (
    <>
    <div className="welcome-page">
      <div className="corner" />
      <div className="corner" />
      <div className="corner" />
      <div className="corner" />
      <div className="content">
        <p data-shadow="WELCOME">
          <span>W</span>
          <span>E</span>
          <span>L</span>
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>
        </p>
      </div>
      <div className="right-vert-line" />
      <div className="left-vert-line" />
      <div className="continue">Sneaky Button</div>
    </div>
    <div className="container">
      <div className="icons">
        <div className="icon fb">
          <a href="#2" target="_blank">
            FB
          </a>
        </div>
        <div className="icon git">
          <a href="#2" target="_blank">
            GIT
          </a>
        </div>
      </div>
    </div>
  </>
  

  

  );
}

export default Welcome;
