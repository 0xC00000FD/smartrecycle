import styles from '../../css/open.module.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

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

    handleClickOutside = event => {
        if(this.ref && !this.ref.current.contains(event.target)) {
            this.setState({dropDownHidden: true});
        }
    }
    
    handleClick = () => {
        let value = !this.state.dropDownHidden;
        this.setState({dropDownHidden: !value});
    }

    render() {
        return (
            <div className={styles}>
            <div className={styles["dropdown"]}>
                <span className={styles["material-icons-outlined dropbtn"]} ref={this.ref} onClick={() => this.handleClick()}> more_vert </span>
                {
                    !this.state.dropDownHidden && (
                        <div className={styles["dropdown-content-drop-content"]}>
                            <div clasaName={styles["box-profile"]}> 
                                <Link to={ROUTES.PROFILE}>Profile</Link>
                            </div>
                            <div className={styles["box-map"]}> 
                                <Link to={ROUTES.MAP}>Map</Link>
                            </div>
                            <div className={styles["box-recycle"]}> 
                                <Link to={ROUTES.RECYCLE}>Why recycle?</Link>
                            </div>
                            <div className={styles["box-login"]}> 
                                <Link to={ROUTES.LOGIN}>Login</Link>
                            </div>
                            <div className={styles["box-signup"]}> 
                                <Link to={ROUTES.SIGNUP}>Signup</Link>
                            </div>
                            <div className={styles["box-log-out"]}> 
                                <span className="material-icons-outlined" id="icon-drop"> logout </span>
                                <a className={styles["log-out"]}> Log out </a>
                            </div>
                        </div>
                    )
                }
            </div>
            </div>
        );
    }
}