import {REGISTER, LOGIN, GET_ALL_ITEMS, ADD_USER_RENTALS, DELETE_USER_RENTALS} from '../actions'

const initialState = {
    user:{},
    rentals: []
}

//reducer function takes current state and action type 
//and emits new updated state based on dispatched action
const reducer = (state = initialState, action) => {
    console.log("action.type:" + action.type);
    switch (action.type) {
      case REGISTER:
        return{
          ...state,
          user: action.payload
        }
      case LOGIN:
          return{
            ...state,
            user: action.payload
          }  
      case GET_ALL_ITEMS:
          return{
              ...state,
              rentals: action.payload
          } 
      case ADD_USER_RENTALS:
          return{
              ...state,
              rentals: action.payload
          } 
      case DELETE_USER_RENTALS:
          return{
              ...state,
              // rentals: action.payload
            }          
      default:
        return state;
    }
  };
  export default reducer;
  