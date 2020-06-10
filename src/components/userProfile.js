import React, { useState,useEffect,useContext } from 'react';
import {Usercontext} from '../App';
import '../App.css'
import {useParams} from 'react-router-dom'

const Profileuser = (props) => {
   
   const [userprofile,setuserProfile]=useState(null)
   const [showfollw,setshowfollow]=useState(true)
   const {state,dispatch}=useContext(Usercontext);
   
   const {userId}=useParams()

   
   useEffect(()=>{
    
    fetch(`/api/users/${userId}`,{
        headers:{
            'Authorization':localStorage.getItem('jwt')
        }
    
    }).then((data)=>data.json())
    .then((res)=>{
    
       setuserProfile(res)
    })
   },[])

const follwuser=()=>{
    fetch('/api/follow',{
   method:'put',
   headers:{
    'Content-Type':'application/json',
    'Authorization':localStorage.getItem("jwt")

   },
   body:JSON.stringify({
    followId:userId
   })
    }).then((data)=>data.json())
    .then((res)=>{
dispatch({type:'UPDATE',payload:{following:res.following,followers:res.followers}})
localStorage.setItem("user",JSON.stringify(res))
setuserProfile((previousstate)=>{
   return{
    ...previousstate,
    user:{
        ...previousstate.user,
        followers:[...previousstate.user.followers,res._id]
    }
   }


})
setshowfollow(false)
    })
}
const unfollwuser=()=>{
    fetch('/api/unfollow',{
   method:'put',
   headers:{
    'Content-Type':'application/json',
    'Authorization':localStorage.getItem("jwt")

   },
   body:JSON.stringify({
    unfollowId:userId
   })
    }).then((data)=>data.json())
    .then((res)=>{
dispatch({type:'UPDATE',payload:{following:res.following,followers:res.followers}})
localStorage.setItem("user",JSON.stringify(res))
setuserProfile((previousstate)=>{
    let newfollwers=previousstate.user.followers.filter((item)=> item != res._id)
   return{
    ...previousstate,
    user:{
        ...previousstate.user,
        followers:newfollwers
    }
   }

})

setshowfollow(true)

    })
}


    return (
        <div>            
        {userprofile   ?
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
     
         <h4>{userprofile.user.name}</h4>
         <h4>{userprofile.user.email}</h4>


        <div style={{justifyContent:"space-around",display:"flex",width:"108%"}}>
        <h6>{userprofile.posts.length} posts</h6>
             <h6>{userprofile.user.followers.length} followers</h6>
        <h6>{userprofile.user.following.length}follwing</h6>
             </div>
             {showfollw ?
                  <button style={{margin:"10px"}} onClick={()=>follwuser()} className="btn waves-effect waves-light #0d47a1 blue darken-4">
                  Follw
            </button>:
    <button style={{margin:"10px"}} onClick={()=>unfollwuser()} className="btn waves-effect waves-light #0d47a1 blue darken-4">
    unFollw
</button>
            
            }
         

  
             </div>
         </div>  
    <div className="gallery">
    
      {userprofile.posts.map((item)=>{
          
           return(
<img  key={item._id} className="item" src={item.photo} alt={Math.random(2*7)}/> 

           )
       })} 
 </div>
 </div> 
         :  <h2>Loading......</h2>} 
        </div>
    )
      
    
}
export default Profileuser;

