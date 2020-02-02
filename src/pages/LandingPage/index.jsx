import React, {Component, useEffect, useState} from 'react'; 
import { connect } from 'react-redux'; 
import './style.css'; 

const LandingPage = ({isSignUp}) => { 
    return(
            <div className='LandingPage'>
                <div className='titleContainer'>
                    <h1 className='title'>Coming Soon</h1>
                    <h2 className='subTitle'>The Future of Innovation</h2>
                    <div className="earth"></div>
                </div>
            </div>
        )
}

const mapStateToProps = (state) => ({
    isSignUp: state.isSignUp, 
})

const mapDispatchToProps = (dispatch) => {
    return {
        signUpInActive: dispatch({type: 'SIGNUP_INACTIVE'}), 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)