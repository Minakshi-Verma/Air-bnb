import axios from 'axios';

export const axiosWithAuth = () => {
    //created axios instance and added token to the authorization header
    //The instance: axiosWithAuth will be used for all http requests
 const token = window.localStorage.getItem('token')
    return axios.create({
        headers: {
            authorization: token
        },               
        
    });   
};