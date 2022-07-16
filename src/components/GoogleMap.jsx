import React from 'react';
import GoogleMapReact from 'google-map-react';

// import './GoogleMap.css';
import './Access.css';

function GoogleMap() {
    const defaultLatLng = {
        lat:35.4094073,
        lng:136.6736692,
    };

    const handleApiLoaded =({map, maps}) => {
        new maps.Marker ({
            map,
            position: defaultLatLng,
        });
    }; 

    
    return (
        <div className="GoogleMap">
            <GoogleMapReact 
            bootstrapURLKeys={{key: 'AIzaSyCvkhK9bqE3ScBpqoEKmBjBE5YWmhJji1s'}} 
            defaultCenter={defaultLatLng}
            defaultZoom={16}
            onGoogleApiLoaded={handleApiLoaded}
            />
        </div>
    )
}

export default GoogleMap;
