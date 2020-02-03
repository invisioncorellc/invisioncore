import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Router, Switch, Route, Redirect} from 'react-router-dom'; 
import LandingPage from './pages/LandingPage'; 
import NavBar from './components/NavBar'; 
import Footer from './components/Footer';
import SignUpPage from './pages/SignUpPage'; 
import OptionsPage from './pages/OptionsPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage'; 
import AccountCompletePage from './pages/AccountCompletePage'; 
import history from './history';
import {Provider} from 'react-redux'; 
import store from  './store'; 

ReactDOM.render(
<React.Fragment>
    <Provider store={store}>
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
                <Route 
                    exact 
                    path='/options'
                    component={OptionsPage}
                /> 
                <Route
                    exact 
                    path='/products'
                    component={ProductsPage}
                />
                <Route 
                    exact 
                    path='/services'
                    component={ServicesPage}
                />
                <Route
                    exact
                    path='/signUpComplete'
                    component={AccountCompletePage}
                />
            </Switch>
        </Router>
        <Footer/>
        </Provider>
</React.Fragment>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

