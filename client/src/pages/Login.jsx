import React from 'react';
import 'bulma/css/bulma.css';
import '../styles/Login.css';

export default function Login() {
    return (<div>
          <label className="label is-justify-content-left">Confirm Password</label>
            <div className="field is-flex flex-direction-row is-justify-content-center">
            <input 
            className="input is-info is-rounded mb-5 custom-width "
            type="text"
            placeholder="Rounded input"
            />
            <button class="button">Button</button>
            </div>

            <label className="label is-justify-content-left">Confirm Password</label>
            <div className="field is-flex flex-direction-row is-justify-content-center">
            <input 
            className="input is-info is-rounded mb-5 custom-width "
            type="text"
            placeholder="Rounded input"
            />
            <button class="button">Button</button>
            </div>


    </div>)
}