import React, { useState,useEffect,useContext } from 'react';
import {Usercontext} from '../App';
import '../App.css'

 


const Profile = (props) => {
   
   const [user,Setuser]=useState([])
   const {state,dispatch}=useContext(Usercontext);
   useEffect(()=>{
    
    fetch('/api/getpostbyme',{
        headers:{
            'Authorization':localStorage.getItem('jwt')
        }
    
    }).then((data)=>data.json())
    .then((res)=>{
        console.log('res',res)
        Setuser(res.data)
    })
   },[])

    return (
    <div style={{maxWidth:"550px" ,margin:"auto"}}>
         <div style={{
             justifyContent:"space-around",
             display:"flex",
             borderBottom:"1px solid gray",
             margin:"18px 0px"
         }}>
       
         <div>
         <img 
         src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" 
         style={{borderRadius:"80px",height:"160px",width:"160px"}}/>
         </div> 
         <div>   
        <h4>{state ? state.name : "Loading" }</h4>
         <div style={{justifyContent:"space-around",display:"flex",width:"108%"}}>
             <h6>20 post</h6>
             <h6>20 post</h6>
             <h6>20 post</h6>
             </div>
             </div>
         </div>  
    <div className="gallery">
    
       {user.map((item)=>{
           return(
<img  key={item._id} className="item" src={item.photo} alt={Math.random(2*7)}/> 

           )
       })}
 </div>
         </div> 
      
    );
}
export default Profile;

