import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../actions';

 const Login = (props) => {
   
    const [creds, setCreds] = useState({})
     
    const handleChanges = e => {
    setCreds({...creds,[e.target.name]:e.target.value})
   }

    const handleSubmit = e => {
        e.preventDefault()
        props.login(creds)
    }
   
    return(        
        
        <div  className = "login">
          <h1>hi</h1>
            <Link className ="reg" to = "/register">Need an account?</Link>
            <p>Please login!</p>
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
            <button className = "buttn" type = "submit">Login</button>                
        </form>

    </div> 

    )
}
export default connect(null,{login})(Login)