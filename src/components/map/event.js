import {useMapEvents} from 'react-leaflet';

function EventComponent() {
    const map = useMapEvents({
        click: () => {
            map.locate({
                enableHighAccuracy: true
            });
        },
        locationfound: (location) => {
            console.log('location found: ', location)
        },
    })

    return null;
}

export default EventComponent;