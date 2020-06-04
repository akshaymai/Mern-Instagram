import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const Singup = (props) => {
    return (
    <div className="mycard">
      
        <div className="card auth-card input-field">
         <h2>Instagram</h2>
        <input 
            type="text"
            placeholder="name"
            />
            <input 
            type="text"
            placeholder="email"
            />
             <input 
            type="text"
            placeholder="password"
            />
        
        <button class="btn waves-effect waves-light  #0d47a1 blue darken-4">Submit
      </button>
   <h5>
   <Link to="/singin">Already Have Account</Link>
  </h5>
    </div>
    </div>
    );
}
export default Singup;