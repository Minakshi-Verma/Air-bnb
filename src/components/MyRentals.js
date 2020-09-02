import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {getUserItems, deleteItems} from '../actions';
import {useParams} from 'react-router-dom';
import Rental from './Rental';

const MyRentals = ({rentals, getUserItems, deleteItems}) => {
    const {id} = useParams()
    const[bool,setBool] = useState(true)

    useEffect(()=>{
    getUserItems(id)
   }, [bool])
   
    return(
        <div className= "heading">       
            <h2>My rental listing</h2>
            <div className = "myrentals">
                    {rentals.map(rental=>(
                    <Rental 
                    key = {rental.id} rental = {rental} deleteItems = {deleteItems} setBool = {setBool}
                    />
                ))}
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{        
    rentals: state.rentals
    }
  }
export default connect(mapStateToProps,{getUserItems, deleteItems})(MyRentals)