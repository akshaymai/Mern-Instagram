import React, { useContext,useEffect,useState} from 'react';
import {Usercontext} from '../App'

const Home = (props) => {
    
   const [data,setData]=useState([])
   const {state,dispatch}=useContext(Usercontext)
useEffect(()=>{
  
   fetch('/api/getallpost',{
      headers:{
      'Authorization':localStorage.getItem('jwt') 
      }
   }).then((res)=>res.json())
   .then((reg)=>{
   
     setData(reg.data)
   }).catch((err)=>{
      console.log(err)
   })

},[])


const likeData=(id)=>{

   fetch('/api/like',{
      method:'put',
      headers:{
         'Content-Type':'application/json',
         'Authorization':localStorage.getItem('jwt') 
      },
      body:JSON.stringify({
         postId:id
      })
   }).then((res)=>res.json())
   .then((result)=>{
      const newdata=data.map((item)=>{
         if(item._id == result._id){
            return result
         }else{
            return item
         }
        
      })
        setData(newdata)

   }).catch((err)=>{
      console.log(err)
   })
}
const unlikeData=(id)=>{

   fetch('/api/unlike',{
      method:'put',
      headers:{
         'Content-Type':'application/json',
         'Authorization':localStorage.getItem('jwt') 
      },
      body:JSON.stringify({
         postId:id
      })
   }).then((res)=>res.json())
   .then((result)=>{

    const newdata=data.map((item)=>{
       if(item._id == result._id){
          return result
       }else{
          return item
       }
      
    })
      setData(newdata)
   }).catch((err)=>{
      console.log(err)
   })
}






    return (
 <div className="home">
    {data.map((item)=>{

  return(
<div className="card home-card" key={item._id}>
    <h5>{item.postedBy.name}</h5>
<div className="card-image">
   <img src={item.photo}/>
</div>  
<div className="card-content">
    
<i className=" material-icons " style={{color:'red'}}>favorite</i>
 {item.likes.includes(state._id)
 ? 
<i className="material-icons" onClick={()=>unlikeData(item._id)}>thumb_down</i>
 :
 <i className="material-icons"  onClick={()=>likeData(item._id)}>thumb_up</i>
 }


  <h6>{item.likes.length} Likes</h6>
  <h6>{item.title}</h6>
  <p>{item.body}</p>
  <input type="text"  placeholder="enter comment"/>
</div>
  
</div>

  )


    })}
 </div>
)
}
export default Home;