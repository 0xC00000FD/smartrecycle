import React, {Component} from 'react'
import '../../css/discount.css'

export default class Discounts extends Component {
    constructor(props) {
        super(props);

        this.Discounts = [ {src:"MC-logo.png", name:"McDonald's", dis:"50", tokens:"50"},
        {src:"Footshop-logo.png", name:"Footshop", dis:"10", tokens:"100"},
        {src:"ABOUTYOU-logo.png", name:"ABOUTYOU", dis:"10", tokens:"100"},
        {src:"KFC-logo.jpg", name:"KFC", dis:"50", tokens:"50"},
        {src:"Starbucks-logo.png", name:"Starbucks", dis:"10", tokens:"100"},
        {src:"FashionDays-logo.png", name:"Fashion Days", dis:"10", tokens:"100"},
        {src:"Glovo-logo.png", name:"Glovo", dis:"10", tokens:"100"},
        {src:"Bolt-logo.png", name:"Bolt", dis:"10", tokens:"100"},
        {src:"Zara-logo.jfif", name:"ZARA", dis:"10", tokens:"100"},
        {src:"Tazz-logo.jpg", name:"TAZZ", dis:"10", tokens:"100"},
        {src:"SneakerIndustry-logo.jpg", name:"Sneaker Industry", dis:"10", tokens:"100"},
        {src:"Altex-logo.jpg", name:"Altex", dis:"10", tokens:"100"} ];
    }

    render() {
        return (
            <>
                <div id="disc"> - DISCOUNTS - </div>
                <div id="cnt"> YOUR TOKENS: 0 </div>
                <div id={"logo-grid"}>
                {
                    this.Discounts.map((obj, idx) => {
                        return(
                            <>
                                <div id={obj.name}>
                                    <img src={obj.src} id={"logo"} alt=""/>
                                    <div id={"txt"}>
                                        <p>{`${obj.name} - ${obj.dis}%`}</p>
                                        <br />
                                        <p>{`( ${obj.tokens} TOKENS )`}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                </div>
            </>
        )
    }
}