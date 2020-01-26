import React, {Component} from 'react'; 
import NavBar from '../../components/NavBar'
import './style.css'; 


class LandingPage extends Component {
    constructor() {
        super(); 
        this.state = {}; 
    }

    componentDidMount() {
        console.log('Component: Landing Page has mounted'); 
    }

    render() {
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
}

export default LandingPage; 