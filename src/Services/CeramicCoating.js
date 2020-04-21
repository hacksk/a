import React, { Component } from 'react';
import SteamCleaningCards from './SteamCleaningCards';
import Navbar from '../Navbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

let data = [
  {
    image: require('../assets/serviceicons/steamexterior.svg')
  }
];

class SteamCleaning extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/service">Service </Breadcrumb.Item>
          <Breadcrumb.Item active>SteamCleaning</Breadcrumb.Item>
        </Breadcrumb>

        <div className="steam-wrap">
          <h2>Ceramic Coating</h2>
          <div class="steam-content">
            {data.map(content => (
              <SteamCleaningCards
                steamimg={content.image}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SteamCleaning;
