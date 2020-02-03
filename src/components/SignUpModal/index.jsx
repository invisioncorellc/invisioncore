import React from 'react'; 
import { connect } from 'react-redux'; 
import history from '../../history'
import './style.css'; 


const submit = (e) => {
    e.preventDefault(); 
    history.push('/options')
}

const LoginModal = () => {
    return (
        <React.Fragment>
        <form className='LoginModal'>
            <div className='signUpTitleContainer'>
                <h1 className='signUpTitle'>Get Your Free Account</h1>
            </div>
            <div className='googleSignIn'>Sign In with Google</div>
            <div className=''></div>
           {/* <input type='text' className='input username' placeholder={'Username'} />
            <input type='password' className='input password' placeholder={'Password'} />
            <input type='password' className='input password' placeholder={'Confirm Password'} /> */}
            <input type='text' className='input email' placeholder={'Email'} />
            <div className='emailSignIn' onClick={() => history.push('/options')}>Sign up with Email</div>
        </form>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({

}) 


const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)

