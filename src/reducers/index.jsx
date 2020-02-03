import {combineReducers} from 'redux'; // combines all the reducers
import isSignUpReducer from './isSignUpReducer'; 
import emailValueReducer from './emailValueReducer'; 


const allReducers = combineReducers(
    {
        // Add Reducers 
        isSignUp: isSignUpReducer, 
        emailValue: emailValueReducer, 
    }
)

export default allReducers; 