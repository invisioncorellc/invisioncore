/* 
    *
    * @author Conan Mafnas
    *
*/

const isSignUpReducer = (state = false, action) => {
    switch(action.type) {
        case 'SIGNUP_ACTIVE': 
            return state = true; 
        case 'SIGNUP_INACTIVE': 
            return state = false
        default: 
            return state; 
    }
}

export default isSignUpReducer; 