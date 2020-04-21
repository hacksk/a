import React, { Component } from "react";
import SteamCleaningCards from "./SteamCleaningCards";
import Navbar from "../Navbar";
import Breadcrumb from "react-bootstrap/Breadcrumb";

let data = [
  {
    head: "Stage 1,2&3 remaps via OBD II",
    image: require("../assets/serviceicons/ecustage.svg")
  },
  {
    head: "Exhaust pops",
    image: require("../assets/serviceicons/ecuexhaust.svg")
  },
  {
    head: "LAunch control",
    image: require("../assets/serviceicons/eculaunch.svg")
  },
  {
    head: "Speed limit remover",
    image: require("../assets/serviceicons/ecustage.svg")
  },
  {
    head: "OEM Original re-maps via obd ii",
    image: require("../assets/serviceicons/ecuobd.svg")
  },
  {
    head: "Speed limit remove",
    image: require("../assets/serviceicons/ecuspeed.svg")
  },
  {
    head: "EGR DELETE",
    image: require("../assets/serviceicons/ecuegr.svg")
  },
  {
    image: require("../assets/serviceicons/ecuperform.svg")
  },
  {
    image: require("../assets/serviceicons/ecuadblue.svg")
  },
  {
    image: require("../assets/serviceicons/ecueco.svg")
  },
  {
    image: require("../assets/serviceicons/ecuantilag.svg")
  },
  {
    image: require("../assets/serviceicons/ecudpf.svg")
  },
  {
    image: require("../assets/serviceicons/ecuintake.svg")
  }
];

class EcuRemapping extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/service">Service </Breadcrumb.Item>
          <Breadcrumb.Item active>ECURemapping</Breadcrumb.Item>
        </Breadcrumb>

        <div className="steam-wrap">
          <h2>ECU REMAPPING</h2>
          <div className="ecu-bg"></div>
          <div class="steam-content">
            {data.map(content => (
              <SteamCleaningCards
                steamhead={content.head}
                steamimg={content.image}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default EcuRemapping;
