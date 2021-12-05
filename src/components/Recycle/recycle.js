import React, { Component } from 'react';
import '../../css/recycle.css';
import mana_verde from "../../images/mana_verde.png";
import frunza_verde from "../../images/frunza_verde.png";
import banu_verde from "../../images/banu_verde.png";

export default class Recycle extends Component {
    constructor(props){
        super(props);

        this.state = {
            isHidden1: true,
            isHidden2: true,
            isHidden3: true
        }
    }

    popUp1() {
        if (this.state.isHidden1)
        {   
            document.getElementById("pic1-recycle").style.transform = "rotate(0deg)";
            document.getElementById("txt1-recycle").style.visibility = "hidden";
            this.setState({isHidden1: false});
        }
        else
        {
            document.getElementById("pic1-recycle").style.transform = "rotate(-90deg)";
            document.getElementById("pic1-recycle").style.transitionDuration = "1s";
            document.getElementById("txt1-recycle").style.visibility = "visible";
            this.setState({isHidden1: true});
        }
    }

    popUp2() {
        if (this.state.isHidden2)
        {
            document.getElementById("pic2-recycle").style.transform = "rotate(0deg)";
            document.getElementById("txt2-recycle").style.visibility = "hidden";
            this.setState({isHidden2: false});
        }
        else
        {
            document.getElementById("pic2-recycle").style.transform = "rotate(90deg)";
            document.getElementById("pic2-recycle").style.transitionDuration = "1s";
            document.getElementById("txt2-recycle").style.visibility = "visible";
            this.setState({isHidden2: true});
        }
    }

    popUp3() {
        if (this.state.isHidden3)
        {
            document.getElementById("pic3-recycle").style.transform = "rotate(0deg)";
            document.getElementById("txt3-recycle").style.visibility = "hidden";
            this.setState({isHidden3: false});
        }
        else
        {
            document.getElementById("pic3-recycle").style.transform = "rotate(-90deg)";
            document.getElementById("pic3-recycle").style.transitionDuration = "1s";
            document.getElementById("txt3-recycle").style.visibility = "visible";
            this.setState({isHidden3: true});
        }
    }

    render() {
        return (
            <div className="recyclebody">
                <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
                <div id="top-title-recycle"> Why should you recycle? </div>
                <div id="sub-title-recycle"> Click the icons to discover</div>
                <div id="frame-recycle">
                    <div id="txt1-recycle"> Volunteering can only do good for you and your community. 
                    The fact that you are actively involved in your local community and you 
                    unconditionally help those around you could give you a healthy boost to your 
                    self-confidence and life satisfaction.</div>
                    <div id="pic1-recycle" onClick={() => this.popUp1()}> <img src={mana_verde} alt="" style={{height: "200px", width: "200px"}} /></div>
                    <div id="pic2-recycle" onClick={() => this.popUp2()}> <img src={frunza_verde} alt="" style={{height: "200px", width: "200px"}} /></div>
                    <div id="txt2-recycle"> Recycling considerably reduces the need to consume natural 
                        resources, thus saving energy, neutralizing air and water pollution and 
                        also preserving limited resources.</div>
                    <div id="txt3-recycle"> Discounts to your favorite stores around you are given to you 
                        to enjoy your favorite products at a more attractive price.</div>
                    <div id="pic3-recycle" onClick={() => this.popUp3()}> <img src={banu_verde} alt="" style={{height: "200px", width: "200px"}} /></div>
                </div>
            </div>
        );
    }
}