import React from 'react'; 
import { connect } from 'react-redux'; 
import './style.css'; 


const ServicesPage = () => {
    return (
        <div className='ServicesPage'>
            <h1 className='pageTitle'>What We Offer...</h1>
            <div className='servicesContainer'>

            </div>
        </div>
    )
}

const mapStateToProps = () => ({
    //TODO
})



const mapDispatchToProps = () => {
    return {
        //TODO
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ServicesPage); 