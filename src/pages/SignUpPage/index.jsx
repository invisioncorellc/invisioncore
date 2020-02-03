import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import LoginModal from '../../components/SignUpModal'; 
import Logo from '../../images/logo.png';
import './style.css'; 




const SignUpPage = ({isSignUp}) => {
       
        return (
            <div className='SignUpPage'>
            {/* <img className='loginLogo' src={Logo}></img> */}
                <LoginModal/>
            </div>
        )
    }

const mapStateToProps = (state) => ({
    isSignUp: state.isSignUp
}) 

const mapDispatchToProps = (dispatch) => {
    return {
        signUpActive: dispatch({type: 'SIGNUP_ACTIVE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage); 