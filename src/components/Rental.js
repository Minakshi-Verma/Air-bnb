import React, {useEffect} from 'react';

const Rental = ({rental, deleteItems, setBool}) => {
console.log("hi")
 const remove =()=>{
 deleteItems(rental.id).then(res=>setBool(bool=>!bool))
 
 }

    return(
        
            <div className = "myrental">
                <div className = "cover"> 
                    <p>City: {rental.city}</p>
                    <p>Zip: {rental.zip}</p>
                    <p>Address: {rental.address}</p>
                    <p>Bednumber: {rental.bednumber}</p>
                    <p>Bathnumber: {rental.bathnumber}</p>
                    <p>State: {rental.state}</p>
                    <p>Price: {rental.price}</p>
                    <p>Sqft: {rental.sqft}</p>
                    <p>Email: {rental.email}</p>
                    <p>Date: {rental.date}</p>
                    <button className ="butn">Edit</button>
                    <button className ="butn" onClick = {remove}>Delete</button>
                    {/* <button onClick = {() =>{deleteItems(rental.id, rental.planner_id)></button> */}
                </div>
            </div>
      
    )
}
export default Rental