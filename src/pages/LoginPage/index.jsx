import React from 'react';
import { connect } from 'react-redux'; 
import './style.css'; 


const LoginPage = ({isLogin}) => {
    return (
        <div className='LoginPage'>
            <div className='loginContainer'></div>
            <div className='detailsContainer'></div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLogin: state.isLoginPage, 
})

const mapDispatchToProps = (dispatch) => {
    return {
        isLoginPage: dispatch({ type: 'IS_LOGINPAGE'}), 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage); 