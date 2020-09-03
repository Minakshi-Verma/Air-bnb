import React from 'react';
import {Link, useHistory} from 'react-router-dom';




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
            <button className= "bt" onClick = {logout}>Logout</button>
            <Link className = "link"to = {`/allevents`}>All Rentals</Link>
            <Link className = "link"to = {`/form/${id}`}>Add Rentals</Link>
            <Link className = "link"to = {`/myrentals/${id}`}>My Rentals</Link>
            </> : null            
            }          
           
          <h1>Welcome to Air bnb</h1>

        </div>
    )
}

