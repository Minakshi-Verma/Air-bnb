import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {registration} from '../actions';

const Register = (props) => {    

    const [creds, setCreds] = useState({})
   
   const handleChanges = (e) => {
       setCreds({...creds,[e.target.name]:e.target.value})
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    props.registration(creds)  
  }
    
    return(
   
        
        <div className = "login">
            {console.log("I am creds", creds)}
            <Link to = "/">Already have an account?</Link>         
        <form onSubmit = {handleSubmit}>           
            <div>
                <input 
                type ="text"
                name = "username"
                placeholder ="username"
                value= {creds.username}
                onChange = {handleChanges}
                />
            </div>
            <div>
                <input 
                type ="password"
                name = "password"
                placeholder ="password"
                value= {creds.password}
                onChange = {handleChanges}                
                />
            </div>
            <div>
                <input 
                type ="text"
                name = "email"
                placeholder ="email"
                value= {creds.email}
                onChange = {handleChanges}
                />
            </div>            
            <button className = "buttn" type = "submit">Register here</button>                
        </form>        
    </div> 

    )
}
export default connect(null, {registration})(Register)