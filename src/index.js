import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Router, Switch, Route, Redirect} from 'react-router-dom'; 
import LandingPage from './pages/LandingPage'; 
import NavBar from './components/NavBar'; 
import Footer from './components/Footer';
import SignUpPage from './pages/SignUpPage'; 
import history from './history';


ReactDOM.render(
<React.Fragment>
    <NavBar/>
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={LandingPage}
                />
                <Route
                    exact
                    path='/signUp'
                    component={SignUpPage}
                />
            </Switch>
        </Router>
        <Footer/>
</React.Fragment>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

