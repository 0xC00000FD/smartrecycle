import React, { Component } from 'react';

import NavBar from '../navbar/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import '../../css/open.css';
import Map from '../map';
import { FirebaseContext } from '../firebase';

export default class App extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <Router>
                <NavBar />

                <Routes>
                    <Route exact path={ROUTES.MAP} element={<Map />} />
                </Routes>
            </Router>
        );
    }
}

/*
<Route path={ROUTES.PROFILE} component={Profile} />
<Route path={ROUTES.RECYCLE} component={Recycle} />
<Route path={ROUTES.SIGNUP} component={signUp} />
<Route path={ROUTES.LOGIN} component={logIn} />
*/