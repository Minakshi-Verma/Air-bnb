import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../actions';

 const Login = (props) => {
   
    const [creds, setCreds] = useState({})
     
    //onclick handler to update input state
    const handleChanges = e => {
    setCreds({...creds,[e.target.name]:e.target.value})
   }
    //handleSubmit function
    const handleSubmit = e => {
        e.preventDefault()
        props.login(creds)
    }   
    return(             
        <div  className = "login">
            <p>For existing members!</p>
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
            <button className="butn" type = "submit">Login</button>                
        </form>
        <Link className ="loginlink" to = "/register">Need an account?</Link>
    </div> 
    )
}
export default connect(null,{login})(Login)