import React, { Component } from "react";
import Home from "./components/Home";
import "../../index.css";

class SteamComponent extends Component {
  
  render() {
    return (
      <div style={{ paddingTop: "8em" }} className="height-define">
        <Home />
      </div>
    );
  }
}

export default SteamComponent;
