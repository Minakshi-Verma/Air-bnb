import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getItems} from '../actions';

function Test(props){



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
            <p>{item.city}</p>
            <p>{item.zip}</p>
            <p>{item.address}</p>
            <p>{item.email}</p>
            </div>
            <div className ='fake'>
            </div>
            </div>            
        ))}        
        </div>
        </div>
    )
}

// {
//     "id": 2,
//     "planner_id": 2,
//     "bath_number": "8",
//     "zip": "56487",
//     "address": "135 oswald ln",
//     "city": "boston",
//     "state": "ma",
//     "email": "devin.gmail.com",
//     "sqft": "4567",
//     "price": 800,
//     "reserved": 1,
//     "date": "33/44/2312"
// },

const mapStateToProps = (state)=>{
    return{        
    user: state.user,
    rentals: state.rentals
    }
  }

export default connect(mapStateToProps, {getItems})(Test)