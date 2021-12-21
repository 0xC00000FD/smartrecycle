import React, {useState, useEffect, useRef} from "react"
import { set, push, ref, onValue } from 'firebase/database'
import { uploadBytes, getDownloadURL, ref as bucketref } from '@firebase/storage';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import '../../css/map.css'
import "mapbox-gl/dist/mapbox-gl.css"

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const sendForm = (firebase, img, text,popupCallback) => {
    try {
        navigator.geolocation.getCurrentPosition((pos) => {
            const description = text;
            const reference = ref(firebase.databaseMarkers);
            const file = img;
            const blob = file.slice(0, file.size, 'image/png');
            const name = `${pos.coords.longitude}_${pos.coords.latitude}.jpg`;
            let newFile = new File([blob], name);
            const storageRef = bucketref(firebase.storageBucket, `images/${name}`);

            set(push(reference), {
                long: pos.coords.longitude,
                lat: pos.coords.latitude,
                description: description
            })

            uploadBytes(storageRef, newFile).then((snapshot) => {
                console.log("File Uploaded");
            })
        });

        popupCallback(false);
    } catch(err) {
        console.log(err);
    }
}

const markerPopup = (marker, firebase) => {
    let fileName = `${marker.long}_${marker.lat}.jpg`;
    let storageRef = bucketref(firebase.storageBucket, 'images');
    return getDownloadURL(bucketref(storageRef, fileName));
}

export default function Map(props) {
    let [viewPort, setViewPort] = useState({
        lat: 46.1857,
        long: 21.2968,
        zoom: 4,
        pitch: 0,
        bearing: 0,
    })
    let [size, setSize] = useState({
        height: "100vh",
        width: "100vw"
    })

    let [popup, setPopup] = useState(false);
    let [image, setImage] = useState(null);
    let [text, setText] = useState(null);
    let mapContainer = useRef(null);
    let map = useRef(null);

    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/dogewithit/ckxg8diz9417y15phjluuaggz",
            center: [21.2968, 46.1857],
            pitch: viewPort.pitch,
            bearing: viewPort.bearing,
            zoom: 16
        });
    });

    useEffect(() => {
        if(!map.current) return;
        
        map.current.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
        map.current.on('move', () => {
            setViewPort({
                lat: map.current.getCenter().lat.toFixed(4),
                long: map.current.getCenter().lng.toFixed(4),
                zoom: map.current.getZoom().toFixed(2),
                pitch: map.current.getPitch(),
                bearing: map.current.getBearing()
            })
        });

        map.current.on('resize', () => {
            setSize({
                height: "100vh",
                width: "100vw"
            });
        });

        return () => map.current.remove();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    

    useEffect(() => {
        markersArray.map((marker, idx) => {
            markerPopup(marker, props.firebase).then((url) => {
                new mapboxgl.Marker()
                .setLngLat([marker.long, marker.lat])
                .setPopup(new mapboxgl.Popup().setHTML(`
                    <div class="popup">
                        <img src=${url} class="popupImage"/>
                        <p> ${marker.description} </p>
                    </div>
                `)).addTo(map.current);
            })
        })
    })

    let markersArray = [];
    const Ref = ref(props.firebase.databaseMarkers);
    onValue(Ref, (snapshot) => {
        markersArray = []
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();

            markersArray.push({
                lat: childData.lat,
                long: childData.long,
                description: childData.description
            })
        });
    });

    return (
        <>
            <div className="sidebarStyle">
                Longitude: {viewPort.long} | Latitude: {viewPort.lat} | Zoom: {viewPort.zoom}
            </div>
            <div className='map-container' ref={mapContainer} style={{...size, position:"absolute"}}/>
            <span className="material-icons-outlined" id="location" onClick={() => setPopup(!popup)}>near_me</span>
            {
                popup && (
                        <div id="report-grid">
                            <div id="rep-name"><b>Repo<a style={{color: "rgb(44, 126, 168)"}}>r</a>t</b></div>
                            <div id="rep"> Write a comment... </div>
                            <textarea name="report-type-text" id="text-rep" cols="5" rows="5" onChange={(e) => setText(e.target.value)}></textarea>
                            <div id="img-rep"> Report evidence : </div>
                            <input type="file" accept="image/*" id="img-file" onChange={(e) => setImage(e.target.files[0])}/>
                            <div id="submit-button" onClick={() => sendForm(props.firebase, image, text, setPopup)}> Submit </div>
                        </div>
                )
            }
        </>
    );
}