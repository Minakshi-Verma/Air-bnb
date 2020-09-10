import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getItems} from '../actions';

function AllEvents(props){    

    useEffect(()=>{
       props.getItems()
    },[])

     return(
        <div className ="allevents">
            <h2>All Rentals</h2> 
            <div className ="flex"> 
                {props.rentals.map(item=>(
                    <div className = "allCard">
                    <div className = 'innerbox'>
                    <p><strong>City</strong>: {item.city}</p>
                    <p><strong>Zip</strong>: {item.zip}</p>
                    <p><strong>Address</strong>: {item.address}</p>
                    <p><strong>Email</strong>: {item.email}</p>
                    {/* <p><strong>Reserved</strong>: {item.reserved}</p> */}
                    </div>
                    <div className ='fake'>
                    </div>
                    </div>            
                ))}        
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{        
    user: state.user,
    rentals: state.rentals
    }
  }

export default connect(mapStateToProps, {getItems})(AllEvents)