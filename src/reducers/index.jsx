import {combineReducers} from 'redux'; // combines all the reducers
import isSignUpReducer from './isSignUpReducer'; 

const allReducers = combineReducers(
    {
        // Add Reducers 
        isSignUp: isSignUpReducer, 
    }
)

export default allReducers; 