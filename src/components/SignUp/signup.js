import React, { Component } from 'react'
import '../../css/signup.css'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
                <div id="login-grid"> 
                    <div id="user-signup"> Username </div>
                    <input type="text" placeholder="Type your username" id="type-user-signup" autocomplete="off" />
                    <div id="sitename-signup"> Smart<a id="W">R</a>ecycle </div>
                    <div id="email-signup"> Email </div>
                    <input type="email-signup" placeholder="Type your email adress" id="type-email-signup" autocomplete="off" />
                    <div id="pass-signup"> Password </div>
                    <input type="password" placeholder="Type your password" id="type-pass-signup" autocomplete="off" />
                    <div id="country-signup"> Country </div>
                        <div id="dropdown2-signup">
                            <div id="type-country" id="dropbtn2-signup"> Select <span class="material-icons-outlined-signup" id="arrow1-signup"> keyboard_arrow_down </span> </div>
                            <div class="dropdown-content2-signup" id="drop-content2-signup">
                            </div>
                        </div>
                    <div id="city-signup"> City </div>
                        <div id="dropdown-signup">
                            <div id="type-city-signup" id="dropbtn-signup"> Select <span class="material-icons-outlined-signup" id="arrow2-signup"> keyboard_arrow_down </span> </div>
                            <div class="dropdown-content-signup" id="drop-content-signup">
                            </div>
                        </div>
                    <div id="acc-signup"> Have an account? </div>
                    <div id="log-signup" onclick="window.location.href='login.html';"> Sign in </div>
                    <div id="next-signup"> Next </div>

                    <span class="material-icons-outlined-signup" id="visible-signup" onclick="makeVisible()"> visibility_off </span>
                </div>
            </div>
        );
    }
}