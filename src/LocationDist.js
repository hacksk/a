import React, { Component } from 'react';

class LocationDist extends Component {
    render() {

        const{ getDistance, convertDistance} = require('geolib'); 
        const MY_COORDS ={latitude: 9.9921, longitude: 76.3019}
        const PARIS_COORDS ={latitude: 10.0014,  longitude: 76.3101,}
        let distance = getDistance(MY_COORDS, PARIS_COORDS, 1000)
        console.log(convertDistance(distance,'km'))
        return (
            <div>
                <h3>distance={convertDistance(distance,'km')}km</h3>

            </div>
        );
    }
}

export default LocationDist;