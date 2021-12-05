import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import '../../css/open.css';
import { ref, onValue } from "firebase/database";


export default class DropDown extends Component {
    constructor(props) {
        super(props);
        
        this.ref = React.createRef();
        this.tokens = 0;
        this.state = {
            display: "none",
            isLogged: false,
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
                try{
                    let uid = this.props.firebase.auth.currentUser.uid;
                    let tokenRef = ref(this.props.firebase.database, `Users/${uid}`);
                    onValue(tokenRef, (snapshot) => {
                        try{
                            const data = snapshot.val();
                            this.tokens = data.tokens;
                        } catch {
                            
                        }
                    }, {
                        onlyOnce: true
                    });
                } catch(error) {
                    console.log(error.message);
                }
                return true;
            }
        } catch {
            return false;
        }
    }

    logOut = () => {
        try {
            this.props.firebase.doSignOut();
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
                            {
                                this.isLog() && (
                                    <div>
                                        <div id="homie-name"> @{this.props.firebase.auth.currentUser.displayName}</div>
                                    </div>
                                )
                            }
                            <Link to={ROUTES.DISCOUNTS} className="txt">
                                <div id="box-tokens"> Tokens </div>
                            </Link>
                            <Link to={ROUTES.MAP} className="txt">
                                <div id="box-map"> 
                                    Map
                                </div>
                            </Link>
                            <Link to={ROUTES.RECYCLE} className="txt">
                                <div id="box-recycle"> 
                                    Why recycle?
                                </div>
                            </Link>
                            {
                                !this.state.isLogged && (
                                    <>
                                        <Link to={ROUTES.LOGIN} className="txt">
                                            <div id="box-login"> 
                                                Login
                                            </div>
                                        </Link>
                                        <Link to={ROUTES.SIGNUP} className="txt">
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