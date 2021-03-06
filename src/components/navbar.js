import React ,{useContext}from 'react';
import {Link,useHistory} from 'react-router-dom'
import '../App.css'
import {Usercontext} from '../App'
const Navbar = (props) => {
const {state,dispatch}=useContext(Usercontext);
const history=useHistory()
const fetchCondition=()=>{

  if(state){
    return [
      <li><b><Link to="/profile">profile</Link></b></li>,
      <li><b><Link to="/createpost">createpost</Link></b></li>,
      <li>
      <button  
      onClick={()=>{
        localStorage.clear()
        dispatch({type:"CLEAR"})
        history.push('/singin')
      }}
      className="btn waves-effect waves-light #dd2c00 deep-orange accent-4">
              Logout
        </button>
        </li>
    ]
  }else{
    return[
      <li><b><Link to="/singup">Singup</Link></b></li>,
      <li><b><Link to="/singin">singin</Link></b></li>
    ]

  }
}


    return (
        <nav>
        <div className="nav-wrapper white">
          <Link   to={state ? "/":"/singin"} className="brand-logo left">Instagram</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {fetchCondition()}
   
          </ul>
        </div>
      </nav>
            
    );
}
export default Navbar;