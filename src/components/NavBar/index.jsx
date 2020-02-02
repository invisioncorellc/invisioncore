import React, {Component} from 'react';
import { connect } from 'react-redux';
import Logo from '../../images/logo.png';
import history from '../../history';
import './style.css'; 



// Note use Selector can only be used inside of a fuctional componnt
const NavBar = ({isSignUp}) => {
        
    const isActive = isSignUp; 

        return ( 
            <React.Fragment>
            {!isActive ?
            <div className='NavBar'>
                <img className='logo' src={Logo}></img>
                        <div className='navLinks'>
                            <div className='joinNowButton' onClick={() => history.push('/signUp')}>Join the Community</div>
                            {/* <button className='joinNowButton' onClick={() => navigateSignUp()}>Post a Proposal</button> */}
                            <div className='linkItem'>Login</div>
                        </div>
                       
                    </div> : null }
                </React.Fragment>
        )
    }

const mapStateToProps = (state) => ({
    isSignUp: state.isSignUp
})

const mapDispatchToProps = (dispatch) => {
    return {
       // TODO
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar); 