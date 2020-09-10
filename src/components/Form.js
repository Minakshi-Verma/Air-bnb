import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addItems} from '../actions'
import {useParams} from 'react-router-dom';


const Form = ({addItems}) =>{
const[form, setForm] = useState({})
const {id} = useParams()

//onClick handler to update form input
const handleChanges =(e)=>{
setForm({...form, [e.target.name]: e.target.value})
}

//handleSubmit function
const handleSubmit = (e) =>{
     e.preventDefault()
     addItems(form, id)
     setForm({})
}
    return(        
         <div>            
            <form className ="form" onSubmit ={handleSubmit}>     
                <input className= "input"
                    type ="text"
                    name = "city"
                    placeholder ="city"
                    value= {form.city}
                    onChange = {handleChanges}           
                />            
                <input className= "input"
                    type ="text"
                    name = "zip"
                    placeholder ="zip"
                    value= {form.zip}
                    onChange = {handleChanges}           
                />            
                <input className= "input"
                    type ="text"
                    name = "address"
                    placeholder ="address"
                    value= {form.address}
                    onChange = {handleChanges}           
                />           
                <input className= "input"
                    type ="text"
                    name = "bed_number"
                    placeholder ="bednumber"
                    value= {form.bed_number}
                    onChange = {handleChanges}           
                />
               <input className= "input"
                    type ="text"
                    name = "bath_number"
                    placeholder ="bathnumber"
                    value= {form.bath_number}
                    onChange = {handleChanges}           
                />
                <input className= "input" 
                    type ="text"
                    name = "state"
                    placeholder ="state"
                    value= {form.state}
                    onChange = {handleChanges}           
                />
                <input className= "input"
                    type ="text"
                    name = "price"
                    placeholder ="price"
                    value= {form.price}
                    onChange = {handleChanges}           
                />
                <input className= "input"
                    type ="text"
                    name = "sqft"
                    placeholder ="sqft"
                    value= {form.sqft}
                    onChange = {handleChanges}           
                />
                <input className= "input"
                    type ="text"
                    name = "email"
                    placeholder ="email"
                    value= {form.email}
                    onChange = {handleChanges}           
                />
                <input className= "input"
                    type ="text"
                    name = "date"
                    placeholder ="date"
                    value= {form.date}
                    onChange = {handleChanges}           
                />           
            <button className="butn btn">Add new rental</button>
            </form>
        </div>
    )
}
export default connect(null,{addItems})(Form)
            