import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css'
const Navbar = (props) => {
    return (
        <nav>
        <div className="nav-wrapper white">
          <Link to="/" className="brand-logo left">Instagram</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/singup">Singup</Link></li>
            <li><Link to="/singin">singin</Link></li>
            <li><Link to="/profile">profile</Link></li>
          </ul>
        </div>
      </nav>
            
    );
}
export default Navbar;