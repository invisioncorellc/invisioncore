
const isLoginPageReducer = (state = false, action) => {
    switch(action.type) {
        case 'IS_LOGINPAGE': 
            return !state;
        case 'IS_NOTLOGINPAGE': 
            return state = false; 
        default: 
            return state;  
    }
}

export default isLoginPageReducer;