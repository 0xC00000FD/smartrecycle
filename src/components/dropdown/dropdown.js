import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import '../../css/open.css';

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        
        this.ref = React.createRef();
        this.state = {
            display: "none",
            isLogged: false
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    isLog = () => {
        try {
            if(this.props.firebase.auth.currentUser !== null) {
                return true;
            }
        } catch {
            return false;
        }
    }

    logOut = () => {
        try {
            this.props.firebase.doSignOut();
            this.props.setState({isLogged: false});
        } catch(err) {
            alert(err.message);
        }
    }
    handleClickOutside = (evt) => {
        if(this.ref.current.contains(evt.target)) {
            if(this.state.display === 'block') {
                this.setState({display: "none", isLogged: this.isLog()});
            } else {
                this.setState({display: "block", isLogged: this.isLog()});
            }
        } else {
            this.setState({display: "none", isLogged: this.isLog()})
        }
    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"></link>
                <div id="dropdown">
                    <span className="material-icons-outlined" id="dropbtn" ref={this.ref}> more_vert </span>
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
                            {
                                !this.state.isLogged && (
                                    <>
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
                                    </>
                                )
                            }
                            
                            {
                                this.state.isLogged && (
                                    <div id="box-log-out" onClick={() => this.logOut()}> 
                                        Log Out
                                    </div>
                                )
                            }
                        </div>
                </div>
            </div>
        );
    }
}