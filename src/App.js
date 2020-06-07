import React,{createContext,useReducer,useEffect, useContext} from 'react';
import './App.css';
import NavBar from './components/navbar'
import Home from './components/home'
import Profile from './components/profile'
import Singin from './components/singin'
import Createpost from './components/createPost'
import Singup from './components/singup'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import {initialState,reducer} from '../src/reducers/userReducer'


export const Usercontext=createContext()

const Routing=()=>{
const history=useHistory()
const {state,dispatch}=useContext(Usercontext)
useEffect(()=>{
const user=JSON.parse(localStorage.getItem("user"))
if(user){
dispatch({type:"USER",payload:user})
  // history.push('/')
}else{
  history.push('/singin')
}
},[])
return(
  <Switch>
          <Route exact path="/">
            <Home/>
            </Route>
            <Route path="/singup">
            <Singup/>
            </Route>
            <Route path="/singin">
            <Singin/>
            </Route>
            <Route path="/profile">
            <Profile/>
            </Route>
            <Route path="/profile">
            <Profile/>
            </Route>
            <Route path="/createpost">
            <Createpost/>
            </Route>
</Switch>
)

}

function App() {
  const [state,dispatch ]=useReducer(reducer,initialState)
  return (
   <Usercontext.Provider value={{state,dispatch}}>
      <BrowserRouter>
     <NavBar/>
     
     <Routing />
     </BrowserRouter>
     </Usercontext.Provider>
  
  );
}

export default App;
