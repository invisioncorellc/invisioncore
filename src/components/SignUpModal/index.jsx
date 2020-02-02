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
        <form className='LoginModal'>
            <input type='text' className='input username' placeholder={'Username'} />
            <input type='password' className='input password' placeholder={'Password'} />
            <input type='password' className='input password' placeholder={'Confirm Password'} />
            <input type='text' className='input email' placeholder={'Email'} />
            <button className='joinNowButton' onClick={(e) => submit(e)}>Get Started ></button>
        </form>
    )
}

const mapStateToProps = (state) => ({

}) 


const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)

