import React, { Component } from 'react';

import NavBar from '../navbar/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import styles from '../../css/open.css';
import Map from '../map';
import Recycle from '../Recycle/recycle';
import Firebase, { FirebaseContext } from '../firebase';
import SignUp from '../SignUp/signup';
import Login from '../login/login';
import Discounts from '../discounts/discounts';

export default class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            loggedIn: false
        }
    }
    
    render() {
        return (
            <div>
                <FirebaseContext.Consumer>
                    {
                        firebase => {
                            return (
                                <Router>
                                    <NavBar firebase={firebase}/>

                                    <Routes>
                                        <Route path={ROUTES.DISCOUNTS} element={<Discounts />} />
                                        <Route exact path={ROUTES.MAP} element={<Map firebase={firebase}/>} />
                                        <Route path={ROUTES.RECYCLE} element={<Recycle />} />
                                        <Route path={ROUTES.SIGNUP} element={<SignUp firebase={firebase}/>} />
                                        <Route path={ROUTES.LOGIN} element={<Login firebase={firebase}/>} />
                                    </Routes>
                                </Router>
                            )
                        }
                    }
                </FirebaseContext.Consumer>
            </div>
        );
    }
}

/*
<Route path={ROUTES.PROFILE} component={Profile} />
<Route path={ROUTES.RECYCLE} component={Recycle} />
<Route path={ROUTES.SIGNUP} component={signUp} />
<Route path={ROUTES.LOGIN} component={logIn} />
*/