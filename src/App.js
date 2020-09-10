import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Register from "./components/Register";
import Login from './components/Login';
import AllEvents from './components/AllEvents';
import Banner from './components/Banner';
import Form from './components/Form';
import MyRentals from './components/MyRentals'


function App() {
  return (
    <div className="App">      
      <Route path = "/">
        <Banner />
      </Route>

      <Route exact path = "/">
        <Login />
      </Route>      

      <Route path = "/register">
        <Register />
      </Route>    

      <Route path = "/allevents">       
        <AllEvents /> 
      </Route>

      <Route path = "/form/:id">       
        <Form />
      </Route> 

      <Route path = "/myrentals/:id">       
        <MyRentals />
      </Route>      
    </div>
  );
}

export default App;
