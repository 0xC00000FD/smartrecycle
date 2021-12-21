import React, {Component} from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {set, push, ref, onValue} from 'firebase/database'
import { uploadBytes, getDownloadURL, ref as bucketref } from '@firebase/storage';

const position = [46.1857, 21.2968]
export default class Map extends Component {
    constructor(props){
        super(props);

        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }

        this.location = {
            long: null,
            lat: null
        }   

        this.markersArray = []; 

        this.state = {
            height: 0,
            width: 0,
            zoom: 15,
            popupHidden: true,
            markers: []
        };
    }

    updateDimensions() {
        const height = window.innerWidth >= 992 ? window.innerHeight : 400;
        this.setState({height: height})
    }

    componentDidMount() {
        this.geolocation();

        const Ref = ref(this.props.firebase.databaseMarkers);
        onValue(Ref, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();

                this.markersArray.push({
                    lat: childData.lat,
                    long: childData.long,
                    description: childData.description
                })
            });

            this.setState({markers: this.markersArray});
        });

        console.log(this.state.markers);
    }
    
    componentWillMount() {
        this.updateDimensions();
    }

    successLocalization = (pos) => {
        console.log(pos.coords.latitude)

        this.location.long = pos.coords.longitude;
        this.location.lat = pos.coords.latitude;
    }

    geolocation = () => {
        try{
            navigator.geolocation.getCurrentPosition(this.successLocalization, this.errorLocalization, this.options);
        } catch(err) {
            console.log(err);
        }
    }

    popup = () => {
        console.log(this.state.markers)
        this.setState({popupHidden: !this.state.popupHidden});
    }

    sendForm = async () => {
        this.geolocation();
        const description = document.getElementById('text-rep').value;
        const reference = ref(this.props.firebase.databaseMarkers);
        const elem = document.getElementById('img-file');
        const file = elem.files[0]
        const blob = file.slice(0, file.size, 'image/png');
        const name = `${this.location.long}_${this.location.lat}.jpg`;
        let newFile = new File([blob], name);
        const storageRef = bucketref(this.props.firebase.storageBucket, `images/${name}`);

        set(push(reference), {
            long: this.location.long,
            lat: this.location.lat,
            description: description
        })

        uploadBytes(storageRef, newFile).then((snapshot) => {
            console.log("File Uploaded");
        })

        this.popup();
    }

    markerPopup = (marker) => {
        let fileName = `${marker.long}_${marker.lat}.jpg`;
        let storageRef = bucketref(this.props.firebase.storageBucket, 'images');
        console.log(getDownloadURL(bucketref(storageRef, fileName)))
        return getDownloadURL(bucketref(storageRef, fileName));
    }

    render() {
        return (
            <>    
                <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/leaflet.css"></link>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet" />
                <MapContainer center={position} zoom={this.state.zoom} scrollWheelZoom={true} style={{height: this.state.height}}>
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        this.state.markers.map((marker, idx) => {
                            let locationArray = [marker.long, marker.lat];
                            return(
                                <Marker location={locationArray} className={"Marker"} key={idx}>
                                    <Popup>
                                        <p>{marker.description}</p>
                                        {console.log(marker)}
                                        {this.markerPopup(marker).then((url) => <img src={url} />)}
                                    </Popup>
                                </Marker>
                            );
                        })
                    }
                    <span class="material-icons-outlined" id="location" onClick={() => this.popup()}>near_me</span>
                    {
                        !this.state.popupHidden && (
                                <div id="report-grid">
                                    <div id="rep-name"><b>Repo<a style={{color: "rgb(44, 126, 168)"}}>r</a>t</b></div>
                                    <div id="rep"> Write a comment... </div>
                                    <textarea name="report-type-text" id="text-rep" cols="5" rows="5"></textarea>
                                    <div id="img-rep"> Report evidence : </div>
                                    <input type="file" accept="image/*" id="img-file" onChange={(evt) => this.file = evt.target.files[0]}/>
                                    <div id="submit-button" onClick={() => this.sendForm()}> Submit </div>
                                </div>
                        )
                    }
                </MapContainer>
            </>
        );
    }
}