import {REGISTER, LOGIN, GETALLITEMS} from '../actions'

const initialState = {
    user:{},
    rentals: []
}


const reducer = (state = initialState, action) => {
    console.log("action.type: " + action.type);
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
      case GETALLITEMS:
          return{
              ...state,
              rentals: action.payload
            }    
      
      default:
        return state;
    }
  };
  export default reducer;
  