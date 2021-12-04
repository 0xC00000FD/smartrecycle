import '../../css/open.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

export default class DropDown extends Component {
    constructor(props) {
        super(props);
        
        this.ref = React.createRef();
        this.state = {
            dropDownHidden: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside);
    }

    handleClickOutside = event => {
        if(this.ref && !this.ref.current.contains(event.target)) {
            this.setState = {
                dropDownHidden: true
            }
        }
    }
    
    handleClick = () => {
        let value = !this.state.dropDownHidden;
        this.setState({dropDownHidden: !value});
    }

    render() {
        return (
            <div id="dropdown">
                <span className="material-icons-outlined" id="dropbtn" ref={this.ref} onClick={() => this.handleClick()}> more_vert </span>
                {
                    !this.state.dropDownHidden && (
                        <div className="dropdown-content" id="drop-content">
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
                                <span className="material-icons-outlined" id="icon-drop"> logout </span>
                                <a id="log-out"> Log out </a>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}