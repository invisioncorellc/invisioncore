import React from 'react'; 
import { connect } from 'react-redux';  
import './style.css'; 




const AccountCompletePage = () => {
    const Role = localStorage.getItem('Role'); 
    console.log(Role); 
    return (
        <div className='AccountCompletePage'>
            <div className='completeContainer'>
                <div className='completeModal'>
                    <h1 className='completeTitle'>Complete your Registration</h1>
                    <div className='completeInfoContainer'>
                        <input type='text' className='input first' placeholder={'First Name'} />
                        <input type='text' className='input last' placeholder={'Last Name'} />
                        <input type='password' className='input password' placeholder={'Password'} />
                        <input type='password' className='input cpassword' placeholder={'Confirm Password'} />
                    </div>
                    <div className='button'>Create My Account</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isSignUp: state.isSignUp
})

const mapDispatchToProps = (dispatch) => {
    return {
        signUpActive: dispatch({ type: 'SIGNUP_ACTIVE' })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AccountCompletePage);