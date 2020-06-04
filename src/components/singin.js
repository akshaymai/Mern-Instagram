import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const Singin = (props) => {
    return (
   
          <div className="mycard">
      
      <div className="card auth-card input-field">
      <h2>Instagram</h2>
          <input 
          type="text"
          placeholder="email"
          />
           <input 
          type="text"
          placeholder="password"
          />
             <button className="btn waves-effect waves-light #0d47a1 blue darken-4">
            Submit
      </button>
      <h5>
      <Link to="/singup">Don't Have Account</Link>
      </h5>
      </div>
    
  </div>
        
  
    );
}
export default Singin;