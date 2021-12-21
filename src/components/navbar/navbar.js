import React, {Component} from 'react';
import DropDown from '../dropdown/dropdown'
import Leaves from '../../images/recycle.png'
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'
import '../../css/open.css';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <div id="top-flex">
                    <div className="logo">
                        <img src={Leaves} id="icon" alt="logo"/>
                        <Link to={ROUTES.MAP} style={{"textDecoration": "none"}}>
                            <div id="site-name" style={{"textDecoration": "none"}}>SmartRecycle</div>
                        </Link>
                    </div>
                    <DropDown firebase={this.props.firebase}/>
                </div>
            </div>
        )
    }
}