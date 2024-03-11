import React from 'react';

import '../assets/home.css';

function Home() {
  return (
    <>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Simple Sidebar - Start Bootstrap Template</title>
    {/* Bootstrap core CSS */}
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
      crossOrigin="anonymous"
    />
    {/* Custom styles for this template */}
    <link href="css/simple-sidebar.css" rel="stylesheet" />
    <div className="d-flex" id="wrapper">
      {/* Sidebar */}
      <div className="bg-light border-right" id="sidebar-wrapper">
        {/*       <div class="sidebar-heading">Start Bootstrap </div> */}
        <div className="list-group list-group-flush">
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          />
          <a href="/login" className="list-group-item list-group-item-action bg-light">
            Login
          </a>
          <a href="/appl" className="list-group-item list-group-item-action bg-light">
            Admission
          </a>
          <a href="/Events" className="list-group-item list-group-item-action bg-light">
            About
          </a>
          <a href="/contact" className="list-group-item list-group-item-action bg-light">
            Contact
          </a>
          <a href="/price" className="list-group-item list-group-item-action bg-light">
            Course fee
          </a>
          <a href="/class" className="list-group-item list-group-item-action bg-light">
            class
          </a>
          <a href="/" className="list-group-item list-group-item-action bg-light">
            Logout
          </a>
        </div>
      </div>
      {/* /#sidebar-wrapper */}
      {/* Page Content */}
      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          
        <h1>ZEN YOGA ACADEMY</h1>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                
                <a className="nav-link" href="/profile">
                  Profile<span className="sr-only">(current)</span>
                </a>
              </li> <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
            </ul>
          </div>
          
        </nav>
        
        <div className="container-fluid">
          <h1>    </h1>
          <h3>Why You Should Try Yoga?
What is yoga, and why is it so popular? </h3>
<p>Yoga is a series of stretches and poses that you do with breathing techniques. It offers the powerful benefits of exercise. And since yoga is gentle, almost anyone can do it, regardless of your age or fitness level.

<br></br>Yoga is a 5,000-year-old discipline from India. It was developed as a practice to unite the mind and body. There are many branches of yoga. All yoga styles can help balance your body, mind, and spirit. But they achieve it in various ways.
            
          </p>
          <p>
         <h3>How to get started</h3> 
It’s easy to find all kinds of yoga classes. Check with your local community centers. Look at nearby gyms, dance studios, and health clubs. Or search online. You can also check out the Yoga Alliance website at www.zenyoga.org/directory to find yoga teachers and yoga classes near you.

<br></br>It is important to find the right yoga style for you and a teacher you like. It’s hard to know what a class is like until you attend it. Even when 2 teachers use the same terms to describe their classes, the classes may be quite different.
          </p>
        </div>
      </div>
      {/* /#page-content-wrapper */}
    </div>
    {/* /#wrapper */}
    {/* Bootstrap core JavaScript */}
    {/* Menu Toggle Script */}
  </>
  
     
  );
}

export default Home;