import React from 'react'; 
import { connect } from 'react-redux'; 
import OptionsModal from '../../components/OptionModal'; 
import Logo from '../../images/logo.png';
import './style.css'; 


const OptionsPage = () => {
    
    const options = [ 
        {
            id: 1, 
            optionClassName: 'OptionModal one', 
            optionTitle: 'Investor', 
            optionPictureClass: 'optionPicture one',
            optionDesc: '', 
        }, 
        {
            id: 2,
            optionClassName: 'OptionModal two',
            optionTitle: 'Freelancer',
            optionPictureClass: 'optionPicture two',
            optionDesc: '',   
        }, 
        {
            id: 3,
            optionClassName: 'OptionModal three',
            optionTitle: 'Business Owner',
            optionPictureClass: 'optionPicture three',
            optionDesc: '', 
        }
    ]


    return ( 
        <div className='OptionsPage'>
        {/* <img className='loginLogo' src={Logo}></img> */}
        <div className='optionsModalContainer'>
        {
           options.map(m => {
               console.log(m);
               return (<OptionsModal key={m.id} modal={m.optionClassName} optionTitle={m.optionTitle} optionPicture={m.optionPictureClass}/> )
           }) 
        }
           
        </div> 
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