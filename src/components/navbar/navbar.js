/*<div id="top-flex">
            <img src="recycle.png" id="icon">
            <div id="site-name"> SmartRecycle </div>
        </div>*/
import React, {Component} from 'react';
import '../../css/open.css';
import DropDown from '../dropdown/dropdown'
import Leaves from '../../images/recycle.png'

export default class NavBar extends Component {
    render() {
        return (
            <div id="top-flex">
                <img src={Leaves} id="icon" alt="logo"/>
                <div id="site-name">SmartRecycle</div>
                <DropDown />
            </div>
        )
    }
}