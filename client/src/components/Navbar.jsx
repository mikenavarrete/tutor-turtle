// src/components/Navbar.js

import React from 'react';
// import '../styles/Navbar.css'; 

function Navbar () {
  return (
    
    // <nav className="navbar">
    //   <div className="navbar-logo">
    //     <a href="/">Tutor Turtle</a>
    //   </div>
    //   <ul className="navbar-links">
    //     <li><a href="/">Home</a></li>
    //     <li><a href="/signup">Sign up</a></li>
    //     <li><a href="/login">Log in</a></li>
  
    //   </ul>
    // </nav>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  
   

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item is-selected">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider"></hr>
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a href="/login" class="button is-light">
          Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
  );
}

export default Navbar;

