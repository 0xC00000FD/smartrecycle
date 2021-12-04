import React, {Component} from 'react';
import example from "../../images/example.jpg";
import styles from "../profile.module.css";

export default class Profile extends Component{
    render(){
        return(
            <div className = {styles}>
                <div id="grid">
                    <img src={example} id="profile-img" />
                    <div id="username"> @gunoieru69 </div>
                    <div id="points"> <a id="nr-points"> 0 </a> recycle points </div>
                    <div id="edit" onclick="window.location.href='edit-profile.html';" > Edit profile </div>
                </div>
            </div>
        );
    }
}