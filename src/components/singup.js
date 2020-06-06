import React, { useState } from 'react';
import M from 'materialize-css'
import {Link,useHistory} from 'react-router-dom'

const Singup = (props) => {
   const history=useHistory()
   const [name,setName]=useState()
   const [email,setEmail]=useState()
   const [password,setPassword]=useState()

  const PostData=()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
     {
        M.toast({html:'invalide email',classes:"#d50000 red accent-4"})
        return 
     }

      fetch('/api/singup',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
          name:name,
          email:email,
          password:password
      })
      }).then((res)=>res.json()
      ).then((data)=>{
         if(data.error){
             M.toast({html:data.error,classes:"#d50000 red accent-4"})
         }else{
             M.toast({html:data.message,classes:"#1b5e20 green darken-4"})
             history.push('/singin')
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
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input 
            type="text"
            value={email}
            placeholder="email"
            onChange={(e)=>setEmail(e.target.value)}

            />
             <input 
            type="text"
            value={password}
            placeholder="password"
            onChange={(e)=>setPassword(e.target.value)}

            />
        
        <button onClick={()=>PostData()} className="btn waves-effect waves-light  #0d47a1 blue darken-4">Submit
      </button>
   <h5>
   <Link to="/singin">Already Have Account</Link>
  </h5>
    </div>
    </div>
    );
}
export default Singup;