import React, {Component} from 'react';
import '../../css/login.css'

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    onClickLogIn = () => {
        //firebase aicea
    }

    makeVisible()
    {
        var x = document.getElementById("type-pass-login");

        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }

    }

    render() {
        return (
            <div id="loginbody">
                <div id="login-grid-login"> 
                    <div id="user-login"> Username / Email</div>
                    <input type="text" placeholder="Type your username/email" id="type-user-login" autoComplete="off" />
                    <div id="sitename-login"> Smart<a id="W">R</a>ecycle </div>      
                    <div id="pass-login"> Password </div>
                    <input type="password" placeholder="Type your password" id="type-pass-login" autoComplete="off" />
                    <div id="next-login"> Next </div>
                    <div id="acc-login"> Don't have an account? </div>
                    <div id="log-login"> Sign up </div>
                    <div id="next-login"> Next </div>
                    <span className="material-icons-outlined" id="visible-login" onClick={() => this.makeVisible()}> visibility_off </span>
                </div>
            </div>
        );
    }
}