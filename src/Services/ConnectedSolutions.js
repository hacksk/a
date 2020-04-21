import React, { Component } from "react";
import SteamCleaningCards from "./SteamCleaningCards";
import Navbar from "../Navbar";
import Breadcrumb from "react-bootstrap/Breadcrumb";

let data = [
  {
    head: "Stage 1,2&3 remaps via OBD II",
    image: require("../assets/Group 239connected.svg")
  },
  {
    head: "Exhaust pops",
    image: require("../assets/Group 240connected.svg")
  },
  {
    head: "LAunch control",
    image: require("../assets/Group 243connected.svg")
  },
  {
    head: "Speed limit remover",
    image: require("../assets/Group 244connected.svg")
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
          <Breadcrumb.Item active>ConnectedSolutions</Breadcrumb.Item>
        </Breadcrumb>

        <div className="steam-wrap">
          <h2>CONNECTED SOLUTIONS</h2>
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

export default EcuRemapping;
