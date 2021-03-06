import React, {Component} from 'react';
import { connect } from 'react-redux';
import Logo from '../../images/logo.png';
import history from '../../history';
import './style.css'; 

const NavBar = ({isSignUp, isLogin}) => {      
    const isActive = isSignUp || isLogin; 
        return ( 
            <React.Fragment>
           
            <div className='NavBar'>
                <img className='logo' src={Logo}></img>
                        <div className='navLinks'>
                        <div className='linkItem'>How it Works?</div>
                        <div className='linkItem'>Our Services</div>
                        {!isActive ?
                            <div className='button' onClick={() => history.push('/signUp')}>Join the Community</div>
                            : <div className='button' onClick={() => history.push('/')}>Back To Landing</div>}
                            <div className='linkItem' onClick={() => history.push('/login')}>Login</div>
                        </div>  
                    </div>
                </React.Fragment>
        )
    }

const mapStateToProps = (state) => ({
    isSignUp: state.isSignUp,
    isLogin: state.isLoginPage
})

const mapDispatchToProps = (dispatch) => {
    return {
       // TODO
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar); 