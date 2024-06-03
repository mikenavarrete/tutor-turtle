
import '../styles/Navbar.css'
import React from 'react';


function Navbar () {
  return (
    
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
      <a href="/" class="navbar-item" id="logo-text">
        Tutor Turtle
      </a>


    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a href="/signup" class="button is-primary">
            <strong>Student Sign up</strong>
          </a>
          <a href="/tutorsignup" class="button is-primary">
            <strong>Tutor Sign up</strong>
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

