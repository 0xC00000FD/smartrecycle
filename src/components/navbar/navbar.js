/*<div id="top-flex">
            <img src="recycle.png" id="icon">
            <div id="site-name"> SmartRecycle </div>
        </div>*/
import React, {Component} from 'react';
import '../../css/open.css';
import DropDown from '../dropdown/dropdown'

export default class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="top-flex">
                <img src="../images/recycle.png" id="icon" alt="logo"/>
                <DropDown />
            </div>
        )
    }
}