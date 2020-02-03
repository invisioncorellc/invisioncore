import React from 'react'; 
import { connect } from 'react-redux'; 
import './style.css'; 


const ProductsPage = () => {
        return (
            <div className='ProductsPage'>
             <h1 className='pageTitle'>Our Inventions...</h1>
            </div>
        )
}

const mapStateToProps = (state) => ({
    //TODO
}) 

const mapDispatchToProps = () => {
    return {
        // TODO
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage); 