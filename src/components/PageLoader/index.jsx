import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 


class PageLoader extends Component {
    
}

const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = {

}

const connectToStore = connect (
    mapStateToProps, 
    mapDispatchToProps
)

const connectComponent = connectToStore(PageLoader); 


connect(
    mapStateToProps, 
    mapDispatchToProps
)(PageLoader)
