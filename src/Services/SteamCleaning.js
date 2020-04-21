import React, { Component } from 'react';
import SteamCleaningCards from './SteamCleaningCards';
import Navbar from '../Navbar';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

let data = [
  {
    image: require('../assets/serviceicons/steamexterior.svg')
  },
  {
    image: require('../assets/serviceicons/steamlogo.svg')
  },
  {
    image: require('../assets/serviceicons/steamradiator.svg')
  },
  {
    image: require('../assets/serviceicons/steambrakes.svg')
  },
  {
    image: require('../assets/serviceicons/steamdesalt.svg')
  },
  {
    image: require('../assets/serviceicons/steamenginebay.svg')
  },
  {
    image: require('../assets/serviceicons/steamroofkleen.svg')
  },
  {
    image: require('../assets/serviceicons/steam360.svg')
  },
  {
    image: require('../assets/serviceicons/steammat.svg')
  },
  {
    image: require('../assets/serviceicons/steampresale.svg')
  },
  {
    image: require('../assets/serviceicons/steamlight.svg')
  },
  {
    image: require('../assets/serviceicons/steamwheel.svg')
  },
  {
    image: require('../assets/serviceicons/steammoto.svg')
  }
];

class SteamCleaning extends Component {
  render() {
    return (
      <div className="steam-cleaning-wrap">
        {/* <Navbar /> */}
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/service">Service </Breadcrumb.Item>
          <Breadcrumb.Item active>SteamCleaning</Breadcrumb.Item>
        </Breadcrumb>

        <div className="steam-wrap">
          <div className="steam-clean-head">

          </div>
          <div className="home-content2">
          <div className="home-content-part1-1">
                <img
                  className="hvr-float-shadow"
                  src={require("../vector-icons/steam service cards/Group 65steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("../vector-icons/steam service cards/Group 82steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("../vector-icons/steam service cards/Group 84steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("../vector-icons/steam service cards/Group 85steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("../vector-icons/steam service cards/Group 86steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("../vector-icons/steam service cards/Group 87steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("../vector-icons/steam service cards/Group 88steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("../vector-icons/steam service cards/Group 89steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("../vector-icons/steam service cards/Group 65steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("../vector-icons/steam service cards/Group 82steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("../vector-icons/steam service cards/Group 84steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("../vector-icons/steam service cards/Group 85steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("../vector-icons/steam service cards/Group 86steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("../vector-icons/steam service cards/Group 87steam.svg")}
                ></img>
              </div>
         </div>
        </div>
      </div>
    );
  }
}

export default SteamCleaning;
