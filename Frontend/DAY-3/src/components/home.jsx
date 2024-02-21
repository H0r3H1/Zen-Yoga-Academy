import React from 'react';
import SignInUpForm from './login';
import '../assets/home.css';

function Home() {
  return (
    <>
 
  <header className="header">
    <div className="logo clear-fix">
      <div className="logo-header">
        <img src="https://i.imgur.com/9daMu3X.png" alt="" />
        <a href="">
          <span className="logo-title">ZEN</span>
        </a>
      </div>
      <div className="search">
        <i className="fa fa-search" />
        <input
          type="text"
          className="search-box"
          placeholder="What are you searching for?"
        />
      </div>
    </div>
  </header>
  <div className="content clear-fix">
    <div className="side-bar">
      <ul>
        <li>
          <i className="fa fa-tachometer" />
          <a href="/SignInUpForm">LOGIN</a>
        </li>
        <li className="active">
          <i className="fa fa-line-chart" />
          <a href="">Admissions</a>
        </li>
        <li>
          <i className="fa fa-paper-plane" />
          <a href="">Research</a>
        </li>
        <li>
          <i className="fa fa-file-text" />
          <a href="">Events</a>
        </li>
        <li>
          <i className="fa fa-user" />
          <a href="">Logout</a>
        </li>
      </ul>
    </div>
    <div className="itens">
      <div className="title">YOGA ACADEMY</div>
      <div className="item">
        <div className="titulo">Physical Health</div>
        <div className="description">
        Yoga postures (asanas) improve flexibility by stretching and lengthening muscles, which can help prevent injuries and improve overall mobility.
        </div>
      </div>
      <div className="item">
        <div className="titulo">Mental Well-being</div>
        <div className="description">
        Practicing yoga promotes relaxation and reduces stress by activating the parasympathetic nervous system, which helps counteract the effects of the body's stress response.        </div>
      </div>
      <div className="item">
        <div className="titulo">Emotional Health</div>
        <div className="description">
          Lorem ipsum dolor sit amet, eat your ass and pussy consectetur
          adipisicing elit. Reprehenderit, aperiam.
        </div>
      </div>
      
      <div className="item">
        <div className="titulo">My Business</div>
        <div className="description">
          Lorem ipsum dolor sit amet, eat your ass and pussy consectetur
          adipisicing elit. Reprehenderit, aperiam.
        </div>
      </div>
      </div>
  </div>
</>

     
  );
}

export default Home;
