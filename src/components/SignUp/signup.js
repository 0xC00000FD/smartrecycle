import React, { Component } from 'react'
import '../../css/signup.css'
import { FirebaseContext } from '../firebase';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    
    makeVisible = () => {
        var x = document.getElementById("type-pass-signup");
        if (x.type === "password") {
            x.type = "text";
            document.getElementById('visible-signup').innerHTML = "visibility_on";
        } else {
            x.type = "password";
            document.getElementById('visible-signup').innerHTML = "visibility_off";
        }
    }

    async createAccount() {
        let email = document.getElementById('type-email-signup').value;
        let username = document.getElementById('type-user-signup').value;
        let password = document.getElementById('type-pass-signup').value;

        try {
            await this.props.firebase.doCreateUser(email, username, password);
            window.location.href = "/";
            await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (error) {
            console.log(error.message);
        }
    }
    render() {
        return (
            <>
            
                <div className="signupbody">
                    <div id="login-grid-signup"> 
                    <div id="user-signup"> Username </div>
                    <input type="text" placeholder="Type your username" id="type-user-signup" autoComplete="off" />
                    <div id="sitename-signup"> Smart<a id="W">R</a>ecycle </div>
                    <div id="email-signup"> Email </div>
                    <input type="email" placeholder="Type your email adress" id="type-email-signup" autoComplete="off" />
                    <div id="pass-signup"> Password </div>
                    <input type="password" placeholder="Type your password" id="type-pass-signup" autoComplete="off"  />
                    <div id="acc-signup"> Have an account? </div>
                    <div id="log-signup" onClick={() => window.location.href = '/login'}> Sign in </div>
                    <div id="next-signup" onClick = {() => this.createAccount()}> Next </div>
                    <span class="material-icons-outlined" id="visible-signup" onClick={() => this.makeVisible()}> visibility_off </span>
                    </div>
                </div>
            </>
        );
    }
}