
const isLoggedIn = (state = false, action) => {
    switch(action.type) {
        case 'IS_LOGGEDIN': 
            return !state; 
        default: 
            return state; 
    }
}