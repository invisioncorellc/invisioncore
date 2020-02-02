import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import './style.css'; 


class OptionModal extends Component {

    render() {
        return( 
            <div className={`OptionModal ${this.props.modalNum}`} >
            <h1 className='optionTitle'>{`${this.props.optionTitle}`}</h1>
            <div className=''></div>
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


export default OptionModal; 