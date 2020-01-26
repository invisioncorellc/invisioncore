import React, {Component} from 'react'; 
import './style.css'; 


class Footer extends Component {
    constructor() {
        super(); 
        this.state = {}; 
    }

    componentDidMount() {
        console.log('Component: Footer has mounted'); 
    }

    render() {
        return (
            <div className='Footer'>
                <div className='footerNav'></div>
                <div className='termsAndConditions'></div>
                <div className='copyright'></div>
            </div>
        )
    }
}

export default Footer; 