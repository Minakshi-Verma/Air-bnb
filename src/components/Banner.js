import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {getItems} from '../actions';

function Banner(props){    
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
            <h1 className = "welcome">Hello {props.user.username} !!!</h1>
            </> : null            
            }            
          <h1>Welcome to AirBnB</h1>
        </div> 
    )
}

const mapStateToProps = (state)=>{
    return{        
    user: state.user    
    }
  }
  
  export default connect(mapStateToProps, {getItems})(Banner)

