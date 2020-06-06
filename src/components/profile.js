import React, { Component } from 'react';


const Profile = (props) => {
    return (
    <div style={{maxWidth:"950px" ,margin:"0px auto"}}>
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
         <h4>akshay maity</h4>
         <div style={{justifyContent:"space-around",display:"flex",width:"108%"}}>
             <h6>20 post</h6>
             <h6>20 post</h6>
             <h6>20 post</h6>
             </div>
             </div>
         </div>  


         <div className="gallery">

         <img className="item" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/> 
         <img className="item" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/> 
         <img className="item" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/> 
        
        <img className="item" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/> 
         </div> 
     </div>
    );
}
export default Profile;