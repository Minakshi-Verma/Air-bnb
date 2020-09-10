import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import history from '../utils/history';

export const REGISTER = "REGISTER"
export const LOGIN = "LOGIN"
export const GET_ALL_ITEMS = "GET_ALL_ITEMS"
export const ADD_USER_RENTALS = "ADD_USER_RENTALS"
export const DELETE_USER_RENTALS = "DELETE_USER_RENTALS"
export const UPDATE_USER_RENTALS = "UPDATE_USER_RENTALS"
const baseUrl = "https://airbnbclonedevin.herokuapp.com" 

const registerEndPoint = `${baseUrl}/auth/register`
const loginEndPoint = `${baseUrl}/auth/login`
const getAllEndPoint =`${baseUrl}/api/`
const addUserRentalEndPoint =`${baseUrl}/api/`
const getUserRentalEndPoint = `${baseUrl}/api/`
const deleteUserRentalEndPoint = `${baseUrl}/api/`
const updateUserRentalEndPoint = `${baseUrl}/api/`


//Registration actionCreator
export const registration = (user) => {
    return dispatch => {     
        axios        
          .post(registerEndPoint, user)
          .then(res => { 
            dispatch({ type: REGISTER , payload:res.data});  
            history.push(`/`)                  
          })
          .catch(error => {
              console.log(error)           
          });
      };
    };

//Login actionCreator
export const login = (user) =>{
    return dispatch => {     
        axios        
          .post(loginEndPoint, user)
          .then(res => { 
            dispatch({ type: LOGIN , payload:res.data});  
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("id", res.data.id)
            history.push(`/api/${res.data.id}`)     
                         
          })
          .catch(error => {
              console.log(error)           
          });
      };
    };

//actionCreator that dispatches payload to get all the rentals from the server
export const getItems = () =>{
        return dispatch => {     
            axiosWithAuth()        
              .get(getAllEndPoint)
              .then(res => { 
                  console.log("I am the action something", res)
                dispatch({ type:GET_ALL_ITEMS, payload:res.data});                 
                     
              })
              .catch(error => {
                  console.log(error)           
              });
          };
        };
 
// actionCreator that dispatches payload to add a new rental to the server
export const addItems = (rental,id) => {
        return dispatch =>{
            axiosWithAuth()
            .post(`${addUserRentalEndPoint + id}`, rental)
            .then (res => {
                console.log("I am the action from add items", rental)
                history.push(`/api/${id}`)
            })
            .catch (error=> {
                console.log(error)
            })
        }
    }

//actionCreator that dispatches payload to get all rentals belonging to specific user
export const getUserItems = (planner_id) => {
        return dispatch =>{
            axiosWithAuth()
            .get(`${getUserRentalEndPoint + planner_id}`)
            .then (res => {
                dispatch({type:GET_ALL_ITEMS, payload:res.data})                
            })
            .catch (error=> {
                console.log(error)
            })
        }
    }

//actionCreator that dispatches payload to delete a specific rental
export const deleteItems = (id) =>{
    return dispatch =>{
        return axiosWithAuth()
        .delete(`${deleteUserRentalEndPoint + id}`)
        
        .then(res=>{
           console.log("I am res", res)
        })
        .catch(error=>{
            console.log(error)
        })
    }
}

// actionCreator that dispatches payload to update a rental based on the id
export const updateItems = (id, rental) => {
    return dispatch =>{
        return axiosWithAuth()
        .put(`${updateUserRentalEndPoint + id} `, rental)
        .then(res=>{
            console.log("I am res from update", res)
            history.push(`/api/${id}`)
        })
    }
}