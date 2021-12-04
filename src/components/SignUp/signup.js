import React, { Component } from 'react'
import styles from '../../css/signup.module.css'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles}>
                <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
                <div id="login-grid"> 
                    <div id="user"> Username </div>
                    <input type="text" placeholder="Type your username" id="type-user" autocomplete="off" />
                    <div id="sitename"> Smart<a id="W">R</a>ecycle </div>
                    <div id="email"> Email </div>
                    <input type="email" placeholder="Type your email adress" id="type-email" autocomplete="off" />
                    <div id="pass"> Password </div>
                    <input type="password" placeholder="Type your password" id="type-pass" autocomplete="off" />
                    <div id="country"> Country </div>
                        <div id="dropdown2">
                            <div id="type-country" id="dropbtn2"> Select <span class="material-icons-outlined" id="arrow1"> keyboard_arrow_down </span> </div>
                            <div class="dropdown-content2" id="drop-content2">
                            </div>
                        </div>
                    <div id="city"> City </div>
                        <div id="dropdown">
                            <div id="type-city" id="dropbtn"> Select <span class="material-icons-outlined" id="arrow2"> keyboard_arrow_down </span> </div>
                            <div class="dropdown-content" id="drop-content">
                            </div>
                        </div>
                    <div id="acc"> Have an account? </div>
                    <div id="log" onclick="window.location.href='login.html';"> Sign in </div>
                    <div id="next"> Next </div>

                    <span class="material-icons-outlined" id="visible" onclick="makeVisible()"> visibility_off </span>
                </div>
            </div>
        );
    }
}