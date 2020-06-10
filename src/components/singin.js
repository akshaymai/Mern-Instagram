import React, { useState ,useContext} from 'react';
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
import {Usercontext} from '../App'

const Singin = (props) => {
const {dispatch}=useContext(Usercontext)

 const history=useHistory()
 const [email,setEmail]=useState()
 const [password,setPassword]=useState()
 const postData=()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
    {
       M.toast({html:'invalide email',classes:"#d50000 red accent-4"})
       return 
    }
    fetch('/api/login',{

        method:'post',
        
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
        email:email,
        password:password
        })
    }).then((res)=>res.json())
    .then((data)=>{ 
         localStorage.setItem("jwt",data.token)
         localStorage.setItem("user",JSON.stringify(data.user))
         dispatch({type:"USER",payload:data.user})
        if(data.error){
            
         M.toast({html: data.error,classes:'#dd2c00 deep-orange accent-4'})
        }
        else{
            M.toast({html: data.message,classes:'#00c853 green accent-4'})
        history.push('/')
        }
    }).catch((err)=>{
        console.log(err)  
      })

 }

    return (
      <div className="mycard">
      <div className="card auth-card input-field">
      <h2>Instagram</h2>
          <input 
          type="text"
          placeholder="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
           <input 
          type="password"
          placeholder="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          />
             <button onClick={()=>postData()} className="btn waves-effect waves-light #0d47a1 blue darken-4">
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