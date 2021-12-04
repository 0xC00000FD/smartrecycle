import React, {Component} from 'react';
import "../../css/recycle.module.css";
import mana_verde from "../../images/mana_verde.png";
import frunza_verde from "../../images/frunza_verde.png";
import banu_verde from "../../images/banu_verde.png";

const styles = {};
export default class Recycle extends Component {
    render(){
        return(
            <div>
                <div className={styles["top-title"]}><p> Why should you recycle ? </p></div>
                <div className={styles['frame']}>
                    <div className={styles['txt1']}> Volunteering can only do good for you and your community. 
                    The fact that you are actively involved in your local community and you 
                    unconditionally help those around you could give you a healthy boost to your 
                    self-confidence and life satisfaction.</div>
                    <div className={styles['pic1']}> <img src={mana_verde} alt="" style={{height: "200px", width: "200px"}} /></div>
                    <div className={styles['pic2']}> <img src={frunza_verde} alt="" style={{height: "200px", width: "200px"}} /></div>
                    <div className={styles['txt2']}> Recycling considerably reduces the need to consume natural 
                        resources, thus saving energy, neutralizing air and water pollution and 
                        also preserving limited resources.</div>
                    <div id="txt3"> Discounts to your favorite stores around you are given to you 
                        to enjoy your favorite products at a more attractive price.</div>
                    <div id="pic3"> <img src={banu_verde} alt="" style={{height: "200px", width: "200px"}} /></div>
                </div>
            </div>
        );
    }
}