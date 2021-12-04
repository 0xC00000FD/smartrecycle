import React, {Component} from 'react';
import example from "../../images/example.jpg";
import styles from "../profile.module.css";

export default class Profile extends Component{
    render(){
        return(
            <div className = {styles}>
                <div className={styles["grid"]}>
                    <img src={example} className={styles["profile-img"]} />
                    <div className={styles["username"]}> @gunoieru69 </div>
                    <div className={styles["points"]}> <a className={styles["nr-points"]}> 0 </a> recycle points </div>
                    <div className={styles["edit"]} onclick="window.location.href='edit-profile.html';" > Edit profile </div>
                </div>
            </div>
        );
    }
}