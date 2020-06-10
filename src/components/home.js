import React, { useContext,useEffect,useState} from 'react';
import {Usercontext} from '../App'
import {Link} from 'react-router-dom' 

const Home = (props) => {
    
   const [data,setData]=useState([])
   const {state}=useContext(Usercontext)
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

   console.log("liked s jknsgbnmnndf",result)
      const newdata=data.map((item)=>{
         if(item._id === result._id){
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


const deleteData=(postid)=>{

   fetch(`/api/deletepost/${postid}`,{
      method:'delete',
      headers:{
         'Authorization':localStorage.getItem('jwt')
      }
   }).then((res)=>res.json()).then((reult)=>{
       
      const newdata=data.filter((item)=>{
         return item._id !== reult._id
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
       if(item._id === result._id){
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


const commentData=(text,postId)=>{

fetch('/api/comment',{


 method:"put",
 headers:{
   'Content-Type':'application/json',
   'Authorization':localStorage.getItem('jwt') 
 },
 body:JSON.stringify({

   text:text,
   postId:postId
 })
}).then((data)=>data.json())
.then((res)=>{
   console.log("res comment",res)
   const newdata=data.map((item)=>{
      if(item._id === res._id){
         return res
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
   
    <h5><Link to= {item.postedBy._id !== state._id ? "/profile/"+item.postedBy._id :"/profile"} >{item.postedBy.name}</Link>
    
    {item.postedBy._id === state._id  
    
    && 
    <i className="material-icons" onClick={(e)=>deleteData(item._id)} style={{float:"right"}}>delete</i>
    }
    
    </h5>
   
<div className="card-image">
   <img alt={item._id} src={item.photo}/>
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
  <strong>Comments</strong>
  {item.comments.map((items)=>{
    console.log(items)
       return (
 
      <h6 key={items._id}><span style={{fontWeight:"500"}}>{items.postedBy.name}</span> 
         {items.text} {items.time} {items.date}<span>
            
         <i className="material-icons" onClick={(e)=>deleteData(item._id)} style={{float:"right"}}>delete</i>
             </span> </h6> 



   )


  })}
  <form onSubmit={(e)=>{
     e.preventDefault()
     commentData(e.target[0].value,item._id)
  }}>
  <input type="text" 
   placeholder="enter comment"
   onChange={(e)=>e.target.value}
   />

   </form>
</div>
  
</div>

  )


    })}
 </div>
)
}
export default Home;