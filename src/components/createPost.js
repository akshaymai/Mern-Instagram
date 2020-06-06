import React, { useState ,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'




const CreatePost = (props) => {

  
  const history=useHistory()
  const [title,setTitle]=useState("")
  const [body,setBody]=useState("")
  const [image,setImage]=useState("")
  const [url,setUrl]=useState("")

  
useEffect(()=>{
  if(url){
  fetch('/api/createpost',{
    method:'post',
    headers:{
     'Content-Type':'application/json',
     'Authorization':localStorage.getItem("jwt")
    },
    body:JSON.stringify({
     title:title,
     body:body,
     photo:url
    })
  }).then((res)=>res.json())
  .then((data)=>{


   if(data.error){
       
    M.toast({html: data.error,classes:'#dd2c00 deep-orange accent-4'})
   }
   else{
       M.toast({html: 'create posted sucessfully',classes:'#00c853 green accent-4'})
   history.push('/')
   }
  }).catch((err)=>{
    console.log(err)
  })
}
},[url])


  


  const PostData=()=>{
   
    const data=new FormData()
    data.append('file',image)
    data.append('upload_preset','akshay-mern-stack')
    data.append('cloud_name','demlvvssn')

   fetch('https://api.cloudinary.com/v1_1/demlvvssn/image/upload',{
     method:'post',
     body:data
   }).then((res)=>res.json())
   .then((data)=>{

     setUrl(data.url)
   }).catch((err)=>{
     console.log(err)
   })


   
   

  }
   
    return (
    <div>
        <div className="card input-field"
         style={{
           margin:"30px auto",
           maxWidth:"500px",
           padding:"20px",
           textAlign:"center"}}>
            <input
             type="text"
              placeholder="Eneter title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              />
            <input type="text"
             placeholder="Eneter body"
             value={body}
             onChange={(e)=>setBody(e.target.value)}
             />
            <div className="file-field input-field">
      <div className="btn">
        <span>Upload image</span>
        <input type="file"
    
         onChange={(e)=>setImage(e.target.files[0])}
        />
      </div>
      <div className="file-path-wrapper">
        <input 
        className="file-path validate"
         type="text"

         />
      </div>
    </div>
    <button 
    onClick={()=>PostData()} 
    className="btn waves-effect waves-light #0d47a1 blue darken-4">
            Submit
      </button>

          </div>  


    </div>
    );
}
export default CreatePost;