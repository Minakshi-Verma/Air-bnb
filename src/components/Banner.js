import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import Form from "../components/Form"



export default function Banner(){
    const history = useHistory()
    const id = localStorage.getItem(`id`)

    const logout =()=>{
        localStorage.removeItem("token")        
        localStorage.removeItem("id")
        history.push("/")
    }
    return(
        <div className = "banner">            
            {localStorage.getItem("token") ? 
            <>
            <button onClick = {logout}>Log out</button>
            <Link className = "link"to = {`/api`}>All rentals</Link>
            <Link className = "link"to = {`/form/${id}`}>Add rentals</Link>
            <Link className = "link"to = {`/myrentals/${id}`}>My rentals</Link>
            </> : null            
            }          
           
          <h1>Welcome to Air bnb</h1>

        </div>
    )
}

