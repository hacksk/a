import React, { Component } from "react";
import L, { map } from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import carImg from "./assets/Car-icon.png";
import Navbarnew from "./NavbarNew";
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: 'Confirm SOS',
    icon: <ExclamationCircleOutlined />,
    content: 'By confirming you are  confirming to our terms of service',
    onOk() {
      console.log('CONFIRM');
    },
    onCancel() {
      console.log('CANCEL');
    },
  });
}



class Location extends Component {
  state = {
    carIcon: {
      lat: 9.9921,
      lng: 76.3019
    },
    carIcon2: {
      lat: 10.0014,
      lng: 76.3101
    },
    zoom: 13
  };
  carIcon = L.icon({
    iconUrl: carImg,
    iconSize: [40], // size of the icon
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -6] // point from which the popup should open relative to the iconAnchor
  });
  carIcon2 = L.icon({
    iconUrl: carImg,
    iconSize: [40], // size of the icon
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -6] // point from which the popup should open relative to the iconAnchor
  });

  render() {
    const positionCarIcon = [this.state.carIcon.lat, this.state.carIcon.lng];
    const positionCarIcon2 = [this.state.carIcon2.lat, this.state.carIcon2.lng];

    return (
      <div className="main">
        <Navbarnew/>
        <div className="map-sos">
          <Map
            className="map transform"
            id="map"
            center={positionCarIcon}
            zoom={this.state.zoom}
            setView={true}
            animate={true}
          >
            {/* <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
            <TileLayer
              attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
              url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
            />
            <div id="marker">
              <Marker position={positionCarIcon} icon={this.carIcon}>
                <Popup>
                  Auto Moto <br /> Kaloor
                </Popup>
              </Marker>
            </div>

            <Marker position={positionCarIcon2} icon={this.carIcon2}>
              <Popup>
                Auto Moto <br /> Palarivattom
              </Popup>
            </Marker>
          </Map>
          <div className="sos">
            <div className="sos-content1">
              <h3>
                NEAREST
                <br />
                AUTOMOTO
                <br />
                SHOWROOM
              </h3>
            </div>
            <div className="sos-content2">
              <h4>KALOOR</h4>
              <p>15KM AWAY</p>
            </div>
            <div className="sos-content3">
              <h4>THEVARA</h4>
              <p>15KM AWAY</p>
              <button onClick={showConfirm} className="sos-btn">SOS</button>
            </div>
          </div>
        </div>
        {/* <input type="button" value="Click Me" id="btn_ZoomIn"></input> */}
        {/* <Demo/>
      <LocationDist/> */}
      </div>
    );
  }
}

export default Location;
