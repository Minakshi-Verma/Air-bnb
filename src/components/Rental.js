import React from 'react';

const Rental = ({rental, deleteItems, setBool}) => {
console.log("hi")
 const remove =()=>{
 deleteItems(rental.id).then(res=>setBool(bool=>!bool))
 
 }

    return(
        
            <div className = "myrental">
                <div className = "cover"> 
                    <p><strong>City</strong>: {rental.city}</p>
                    <p><strong>Zip</strong>: {rental.zip}</p>
                    <p><strong>Address</strong>: {rental.address}</p>
                    {/* <p><strong>Bednumber</strong>: {rental.bednumber}</p>
                    <p><strong>Bathnumber</strong>: {rental.bathnumber}</p> */}
                    <p><strong>State</strong>: {rental.state}</p>
                    <p><strong>Price</strong>: {rental.price}</p>
                    <p><strong>Sqft</strong>: {rental.sqft}</p>
                    <p><strong>Email</strong>: {rental.email}</p>
                    <p><strong>Date</strong>: {rental.date}</p>
                    <button className ="butn">Edit</button>
                    <button className ="butn" onClick = {remove}>Delete</button>
                    {/* <button onClick = {() =>{deleteItems(rental.id, rental.planner_id)></button> */}
                </div>
            </div>
      
    )
}
export default Rental