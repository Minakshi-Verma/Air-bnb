import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {getItems} from '../actions';
import AllCard from './AllCard'

function Test(props){



    useEffect(()=>{
       props.getItems()
    },[])

    return(
        <>
        <h1>All Rentals</h1>     
        {props.rentals.map(item=>(
            <><h1>{item.city}</h1>
            <h1>{item.zip}</h1>
            <h1>{item.address}</h1>
            <h1>{item.email}</h1></>
            
        ))}

        </>
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