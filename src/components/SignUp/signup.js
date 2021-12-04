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
                <div className={styles['login-grid']}> 
                    <div className={styles['user']}> Username </div>
                    <input type="text" placeholder="Type your username" className={styles["type-user"]} autocomplete="off" />
                    <div className={styles['sitename']}> Smart<a className={styles['W']}>R</a>ecycle </div>
                    <div className={styles['email']}> Email </div>
                    <input type="email" placeholder="Type your email adress" className={styles["type-email"]} autocomplete="off" />
                    <div className={styles['pass']}> Password </div>
                    <input type="password" placeholder="Type your password" className={styles["type-pass"]} autocomplete="off" />
                    <div className={styles['country']}> Country </div>
                        <div className={styles['dropdown2']}>
                            <div className={styles["type-country-dropbtn2"]}> Select <span class="material-icons-outlined" className={styles["arrow1"]}> keyboard_arrow_down </span> </div>
                            <div className={styles["dropdown-content2-drop-content2"]}></div>
                        </div>
                    <div className={styles["city"]}> City </div>
                        <div className={styles["dropdown"]}>
                            <div className={styles["type-city-dropbtn"]}> Select <span class="material-icons-outlined" id="arrow2"> keyboard_arrow_down </span> </div>
                            <div className={styles["dropdown-content-drop-content"]}>
                            </div>
                        </div>
                    <div className={styles["acc"]}> Have an account? </div>
                    <div className={styles["log"]} onclick="window.location.href='login.html';"> Sign in </div>
                    <div className={styles["next"]}> Next </div>

                    <span className={styles["material-icons-outlined-visible"]} onclick="makeVisible()"> visibility_off </span>
                </div>
            </div>
        );
    }
}