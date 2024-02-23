import React from 'react';
import '../assets/home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container" id="page">
  <div className="header">
    <div className="personal-card">
      
      <div className="me-info">
        <h3>Hey</h3>
        <h3>Stranger</h3>
      </div>
    </div>
    <div className="contact">
    <div className="me-image">
        <img
          src="https://github.com/mouatezbenariba/Elzero-Frontend-Challenges/blob/main/advanced-user-card/images/task-advanced-card-image-01.png?raw=true"
          alt="Website Owner Image Illustration" sizes='20px'
        />
      </div>
      <a href="" className="home-link">
        <i className="fa-solid fa-house-chimney" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;profile
      </a>
      <div className="links">
      
        <a href="#page">
          <i className="fa-brands fa-facebook-f" />
        </a>
        <a href="#page">
          <i className="fa-brands fa-twitter" />
        </a>
        <a href="#page">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="#page">
          <i className="fa-brands fa-dribbble" />
        </a>
        <a href="#page">
          <i className="fa-brands fa-behance" />
        </a>
      </div>
    </div>
  </div>
  <div className="main-content">
    <div className="side-bar">
      <span className="menu">
        <i className="fa-solid fa-bars" />{" "}
      </span>
      <a href="" className="home-link">
        <i className="fa-solid fa-house-chimney" />
       <Link to = "/">Home</Link>
      </a>
      <a href="">
        <i className="fa-solid fa-user-tie" />
        <Link to = "/events">About</Link>
      </a>
      <a href="">
        <i className="fa-solid fa-graduation-cap" />
        Resume
      </a>
      <a href="">
        <i className="fa-solid fa-gears" />
        Services
      </a>
      <a href="">
        <i className="fa-solid fa-briefcase" />
        Portfolio
      </a>
      <a href="">
        <i className="fa-solid fa-ticket" />
        Blog
      </a>
    <a href="">
        <i className="fa-solid fa-envelope" />
        <Link to = "/contact">Contact us</Link>
      </a>
    </div>
    <div className="main-section">
      <div className="main-image">
        <img
          src="https://github.com/mouatezbenariba/Elzero-Frontend-Challenges/blob/main/advanced-user-card/images/task-advanced-card-image-02.png?raw=true"
          alt="a man sitting in his desk"
        />
      </div>
      <div className="main-info">
        <h4>Who I Am</h4>
        <p>
          Hello, Iam Someone, working as Front-End Developer based on Paris. I
          Have amazing Experience in Front-End Development and Website Creation
        </p>
        <p>
          <span>Phone : </span> + 113-123-9955
        </p>
        <p>
          <span>Email : </span> me@website.com
        </p>
        <p>
          <span>Adresse : </span>Home Number 6, Testing st.
        </p>
        <p>
          <span>Freelancer : </span>Available
        </p>
        <a href="">
          <i className="fa-solid fa-user" />
          More About Me
        </a>
      </div>
    </div>
  </div>
</div>

  
     
  );
}

export default Home;
