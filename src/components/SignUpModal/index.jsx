import React from 'react'; 
import { connect } from 'react-redux'; 
import history from '../../history'
import './style.css'; 


const submit = (e) => {
    e.preventDefault();
    // console.log(e.target.value);  
    // localStorage.setItem('Email', e.target.name={})
    history.push('/options')
}

const changeEmailValue = (e, value) => {
    value = e.target.value; 
    return value; 
}

const LoginModal = ({emailValue, emailValueChange}) => {
    return (
        <React.Fragment>
        <form className='LoginModal'>
            <div className='signUpTitleContainer'>
                <h1 className='signUpTitle'>Account Registration</h1>
            </div>
            <div className='googleSignIn'>Sign In with Google</div>
            <div className=''></div>
           {/* <input type='text' className='input username' placeholder={'Username'} />
            <input type='password' className='input password' placeholder={'Password'} />
            <input type='password' className='input password' placeholder={'Confirm Password'} /> */}
            <input type='text' className='input email' placeholder={'Email'} onChange={(e) => e.target.value}/>
            <div className='emailSignIn' onClick={() => history.push('/options')}>Sign up with Email</div>
        </form>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({
    emailValue: state.emailValue, 
}) 


const mapDispatchToProps = (dispatch) => {
    return {
        emailValueChange: dispatch({type: 'EMAIL_VALUE'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)

