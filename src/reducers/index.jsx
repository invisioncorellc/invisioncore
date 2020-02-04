import {combineReducers} from 'redux'; // combines all the reducers
import isSignUpReducer from './isSignUpReducer'; 
import emailValueReducer from './emailValueReducer'; 
import isLoginPageReducer from './isLoginPageReducer'; 


const allReducers = combineReducers(
    {
        // Add Reducers 
        isSignUp: isSignUpReducer, 
        emailValue: emailValueReducer,
        isLoginPage: isLoginPageReducer,  
    }
)

export default allReducers; 