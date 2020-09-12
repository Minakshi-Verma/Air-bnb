import React, {useState} from 'react';
import Modal from "./Modal"

const Rental = ({rental, deleteItems, setBool}) => {

const [isShow, setIsShow] = useState(false)

const remove =()=>{
deleteItems(rental.id).then(res=>setBool(bool=>!bool)) 
}
    return(        
            <div className = "myrental">
                <div className = "cover"> 
                    <p><strong>City</strong>: {rental.city}</p>
                    <p><strong>Zip</strong>: {rental.zip}</p>
                    <p><strong>Address</strong>: {rental.address}</p>
                    <p><strong>Bedrooms</strong>: {rental.bed_number}</p>
                    <p><strong>Baths</strong>: {rental.bath_number}</p>
                    <p><strong>State</strong>: {rental.state}</p>
                    <p><strong>Price</strong>: ${rental.price}/night</p>
                    <p><strong>Area</strong>: {rental.sqft} sqft</p>
                    <p><strong>Email</strong>: {rental.email}</p>
                    <p><strong>Date</strong>: {rental.date}</p>                    
                    <button className = "butn btn" onClick = {() => setIsShow((isShow)=>!isShow)} >Edit</button>
                    <button className = "butn btn" onClick = {remove}>Delete</button>
                    {/* <button onClick = {() =>{deleteItems(rental.id, rental.planner_id)></button> */}
                </div>
                {isShow && <Modal  rental= {rental}/>}               
            </div>      
    )
}
export default Rental
