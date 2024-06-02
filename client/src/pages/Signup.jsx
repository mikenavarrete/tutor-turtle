import React from 'react';
import 'bulma/css/bulma.css';
import '../styles/signup.css'

export default function Signup() {
  return (
    <div>
        <div className="Header">
            <h1>Welcome to Tutor Turtle! Please enter your user info</h1>
                <br></br>
        </div>

            <div className="container">
             <div class="field">
            <label class="label">Name</label>
              <div class="control">
             <input class="input  is-info is-rounded mb-5" type="text" placeholder="e.g Alex Smith"/>
             <button class="button">Button</button>
             </div>
            </div>
            
            <div class="field">
            <label class="label">Email</label>
            <div class="control">
          <input class="input  is-info is-rounded mb-5" type="email" placeholder="e.g. alexsmith@gmail.com"/>
            </div>
            </div>

            <label className="label is-justify-content-left">Password</label>
            <input
            className="input is-info is-rounded mb-5"
            type="text"
            placeholder="Info input"
            />

            <label className="label is-justify-content-left">Confirm Password</label>
            <input 
            className="input is-info is-rounded mb-5"
            type="text"
            placeholder="Rounded input"
            />
        </div>
    </div>

  );
}
