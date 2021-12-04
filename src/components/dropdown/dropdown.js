import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import '../../css/open.css';

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        
        this.ref = React.createRef();
        this.state({dropDownHidden: true});

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    changeState = () => {
        if(this.state.display === 'block') {
            this.setState({display: "none"});
        } else {
            this.setState({display: "block"});
        }
    }
    
    handleClick = () => {
        let value = !this.state.dropDownHidden;
        this.setState({dropDownHidden: !value});
    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"></link>
                <div id="dropdown">
                    <span className="material-icons-outlined" id="dropbtn" ref={this.ref} onClick={() => this.changeState()}> more_vert </span>
                        <div className="dropdown-content" id="drop-content" style={{"display": this.state.display}}>
                            <Link to={ROUTES.PROFILE}>
                                <div id="box-profile"> 
                                    Profile
                                </div>
                            </Link>
                            <Link to={ROUTES.MAP}>
                                <div id="box-map"> 
                                    Map
                                </div>
                            </Link>
                            <Link to={ROUTES.RECYCLE}>
                                <div id="box-recycle"> 
                                    Why recycle?
                                </div>
                            </Link>
                            <Link to={ROUTES.LOGIN}>
                                <div id="box-login"> 
                                    Login
                                </div>
                            </Link>
                            <Link to={ROUTES.SIGNUP}>
                                <div id="box-signup"> 
                                    Signup
                                </div>
                            </Link>
                            <div id="box-log-out"> 
                                LogOut
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}