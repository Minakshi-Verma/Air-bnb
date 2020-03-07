import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Register from "./components/Register";
import Login from './components/Login';
import Home from './components/Home';
import AllEvents from './components/AllEvents';
import Banner from './components/Banner';


function App() {
  return (
    <div className="App">
      
     

      <Route exact path = "/">
        <Login />
       </Route>

      <Route path = "/register">
        <Register />
      </Route>    

      <Route path = "/api/:id">
        <Banner />
        <AllEvents />
      </Route>

     
      
    </div>
  );
}

export default App;
