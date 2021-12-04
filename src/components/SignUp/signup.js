import React, { Component } from 'react'
import styles from '../../css/signup.css'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    
    makeVisible() {
        var x = document.getElementById("type-pass-signup");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    render() {
        return (
            <div>
                <div id="login-grid-signup"> 
                <div id="user"> Username </div>
                <input type="text" placeholder="Type your username" id="type-user-signup" autoComplete="off" />
                <div id="sitename-signup"> Smart<a id="W">R</a>ecycle </div>
                <div id="email-signup"> Email </div>
                <input type="email" placeholder="Type your email adress" id="type-email-signup" autoComplete="off" />
                <div id="pass-signup"> Password </div>
                <input type="password" placeholder="Type your password" id="type-pass-signup" autoComplete="off"  />
                <div id="acc-signup"> Have an account? </div>
                <div id="log-signup"> Sign in </div>
                <div id="next-signup"> Next </div>
                <span class="material-icons-outlined" id="visible-signup" onClick={() => this.makeVisible()}> visibility_off </span>
                </div>
            </div>
        );
    }
}