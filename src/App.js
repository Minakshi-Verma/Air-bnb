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
      {/* <Route path = "/">
        <Banner />
      </Route>  */}
      <Route path="/" component={Banner} />      
      <Route path="/register" component={Register} />     
      <Route path="/allevents" component={AllEvents} />     
      <Route path="/form/:id" component={Form} />     
      <Route path="/myrentals/:id" component={MyRentals} />
      <Route exact path="/" component={Login} />     
    </div>
  );
}

export default App;
