import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import history from '../utils/history';

export const REGISTER = "REGISTER"
export const LOGIN = "LOGIN"
export const GETALLITEMS = "GETALLITEMS"

const registerEndPoint = "https://airbnbclonedevin.herokuapp.com/auth/register"
const loginEndPoint = "https://airbnbclonedevin.herokuapp.com/auth/login"
const getAllEndPoint ="https://airbnbclonedevin.herokuapp.com/api/"

export const registration = (user) => {
    return dispatch => {     
        axios        
          .post(registerEndPoint, user)
          .then(res => { 
            dispatch({ type: REGISTER , payload:res.data});  
            history.push(`/api/${res.data.id}`)                  
          })
          .catch(error => {
              console.log(error)           
          });
      };
    };
    
export const login = (user) =>{
    return dispatch => {     
        axios        
          .post(loginEndPoint, user)
          .then(res => { 
            dispatch({ type: LOGIN , payload:res.data});  
            localStorage.setItem("token", res.data.token)
            history.push(`/api/${res.data.id}`)     
                         
          })
          .catch(error => {
              console.log(error)           
          });
      };
    };
    
    export const getItems = () =>{
        return dispatch => {     
            axiosWithAuth()        
              .get(getAllEndPoint)
              .then(res => { 
                dispatch({ type:GETALLITEMS, payload:res.data});                 
                     
              })
              .catch(error => {
                  console.log(error)           
              });
          };
        };
        