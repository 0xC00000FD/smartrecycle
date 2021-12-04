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

    logIn() {
        let userEmail = document.getElementById('type-user-login').value;
        let userPassword = document.getElementById('type-pass-login').value;
        this.props.firebase.doLogIn(userEmail, userPassword);

        if(this.props.firebase.auth.currentUser !== null) {
            window.location.href = '/';
        } else {
            alert("Wrong Login Credentials, Please Try Again");
        }
    }

    render() {
        return (
            <div className="loginbody">
                <div id="login-grid-login"> 
                    <div id="user-login"> Username / Email</div>
                    <input type="text" placeholder="Type your email" id="type-user-login" autoComplete="off" />
                    <div id="sitename-login"> Smart<a id="W">R</a>ecycle </div>      
                    <div id="pass-login"> Password </div>
                    <input type="password" placeholder="Type your password" id="type-pass-login" autoComplete="off" />
                    <div id="next-login"> Next </div>
                    <div id="acc-login"> Don't have an account? </div>
                    <div id="log-login"> Sign up </div>
                    <div id="next-login" onClick={() => this.logIn()}> Next </div>
                    <span className="material-icons-outlined" id="visible-login" onClick={() => this.makeVisible()}> visibility_off </span>
                </div>
            </div>
        );
    }
}