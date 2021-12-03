import React, {Component} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const position = [51.505, -0.09]
export default class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            height: 0,
            width: 0,
            zoom: 15
        };
    }

    updateDimensions() {
        const height = window.innerWidth >= 992 ? window.innerHeight : 400;
        this.setState({height: height})
    }

    componentWillMount() {
        this.updateDimensions();
    }

    render() {
        return (
            <>    
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css"></link>
                <MapContainer center={position} zoom={this.state.zoom} scrollWheelZoom={true} style={{height: this.state.height}}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </MapContainer>
            </>
        );
    }
}