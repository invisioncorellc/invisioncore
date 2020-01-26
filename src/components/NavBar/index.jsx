import React, {Component} from 'react'
import Logo from '../../images/logo.png'
import history from '../../history';
import './style.css'; 


class NavBar extends Component {
    constructor() {
        super(); 
        this.state = {}
    }

    componentDidMount() {
        console.log('Component:  NavBar has mounted!');
    }

    

    render() {
        return ( 
            <div className='NavBar'>
                <img className='logo' src={Logo}></img>
                <div className='navLinks'>
                    <button className='joinNowButton' onClick={() => history.push('/signUp')}>Join Now</button>
                    <div className='linkItem'>Login</div>
                </div>
            </div>
        )
    }
}

export default NavBar; 