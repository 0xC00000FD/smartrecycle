import React, { Component } from 'react'
import styles from '../../css/profile.css'

export default class Profile extends Component {

    render() {
        return(
            <>
                <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
                <div id="profilebody">
                    <div id="grid-profile">
                        <div id="edit-profile" > Edit profile </div>
                    </div>
                </div>
            </>
        );
    }
}