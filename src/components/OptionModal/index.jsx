import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import history from '../../history'; 
import './style.css'; 


class OptionModal extends Component {

    componentDidMount() {
        const getRole = localStorage.getItem('Role'); 
        if (getRole) {
            localStorage.removeItem('Role'); 
        }
    }
   
    sendToLocalStorage(value) {
        const role = localStorage.setItem('Role', value)
        history.push('/signUpComplete'); 
        return role; 
    }

    render() {
        return( 
            <div className={`${this.props.modal}`} >
            <h1 className='optionTitle'>{`${this.props.optionTitle}`}</h1>
            <div className={`${this.props.optionPicture}`}></div>
            <div className='button option' onClick={() => this.sendToLocalStorage(this.props.optionTitle)}>Select Option</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // TODO 
}) 

const mapDispatchToProps = dispatch => {
    return {
        //TODO
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OptionModal);