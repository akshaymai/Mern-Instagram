import React from 'react';
import './App.css';
import NavBar from './components/navbar'
import Home from './components/home'
import Profile from './components/profile'
import Singin from './components/singin'
import Singup from './components/singup'
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <NavBar/>
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

     </BrowserRouter>
    </div>
  );
}

export default App;
