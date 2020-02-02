import React from 'react'; 
import { connect } from 'react-redux'; 
import './style.css'; 


const OptionsPage = () => {
    return ( 
        <div className='OptionsPage'>
        <h1 className='optionTitle'></h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
   
})

const mapDispatchToProps = (dispatch) => {
    return {
        signUpActive: dispatch({type: 'SIGNUP_ACTIVE'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OptionsPage)