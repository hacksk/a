import React, { Component } from "react";
import SteamCleaningCards from "./SteamCleaningCards";
import Navbar from "../Navbar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import steamradiator from "../assets/serviceicons/steamradiator.svg"


let data = [
  {
     image:require("../assets/serviceicons/offertire.svg")
  },
  {
     image:require("../assets/serviceicons/offerclimate.svg")
  },
  {
     image:require("../assets/serviceicons/offerpowersteer.svg")
  },
  {
     image:require("../assets/serviceicons/offermechanic.svg")
  },
  {
     image:require("../assets/serviceicons/offerelectric.svg")
  },
  {
     image:require("../assets/serviceicons/offerbrakes.svg")
  },
  {
     image:require("../assets/serviceicons/offerbattery.svg")
  },
  {
     image:require("../assets/serviceicons/offerlub.svg")
  },
  {
     image:require("../assets/serviceicons/offerinsurance.svg")
  },
  {
    image:require("../assets/serviceicons/offerpolution.svg")
  },
  {
    image:require("../assets/serviceicons/offerrepellent.svg")
  }
];

class ServiceOffer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/service">
Service  </Breadcrumb.Item>
  <Breadcrumb.Item active>ServiceOfferings</Breadcrumb.Item>
</Breadcrumb>


        <div className="steam-wrap">
          <h2>SERVICE OFFERINGS</h2>
          <div className="recommend-service">
            <img src={require('../assets/serviceicons/sweet 17.png')}></img>
            <img src={require('../assets/serviceicons/Group 193.png')}></img>
          </div>
          <div class="steam-content">
            {data.map(content => (
              <SteamCleaningCards steamhead={content.head} steamimg={content.image} />
            ))}
            
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceOffer;
