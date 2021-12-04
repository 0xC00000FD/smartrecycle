import '../../css/open.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        
        this.ref = React.createRef();
        this.state = {
            display: "none"
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    changeState = () => {
        if(this.state.display == 'block') {
            this.setState({display: "none"});
        } else {
            this.setState({display: "block"});
        }
    }

    render() {
        return (
            <>
                <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"></link>
                <div id="dropdown">
                    <span className="material-icons-outlined" id="dropbtn" ref={this.ref} onClick={() => this.changeState()}> more_vert </span>
                        <div className="dropdown-content" id="drop-content" style={{"display": this.state.display}}>
                            <div id="box-profile"> 
                                <Link to={ROUTES.PROFILE}>Profile</Link>
                            </div>
                            <div id="box-map"> 
                                <Link to={ROUTES.MAP}>Map</Link>
                            </div>
                            <div id="box-recycle"> 
                                <Link to={ROUTES.RECYCLE}>Why recycle?</Link>
                            </div>
                            <div id="box-login"> 
                                <Link to={ROUTES.LOGIN}>Login</Link>
                            </div>
                            <div id="box-signup"> 
                                <Link to={ROUTES.SIGNUP}>Signup</Link>
                            </div>
                            <div id="box-log-out"> 
                                LogOut
                            </div>
                        </div>
                </div>
            </>
        );
    }
}