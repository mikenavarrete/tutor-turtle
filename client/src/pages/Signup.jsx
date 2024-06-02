import React from 'react';
import 'bulma/css/bulma.css';

export default function Signup() {
  return (
    <div className="container">
      <input
        className="input is-info mb-3"
        type="text"
        placeholder="Info input"
      />
      <input 
        className="input is-rounded mb-3"
        type="text"
        placeholder="Rounded input"
      />
    </div>
  );
}
