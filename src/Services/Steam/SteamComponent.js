import React, { Component } from "react";
import Home from "./components/Home";
import "../../index.css";

class SteamComponent extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div style={{ paddingTop: "8em" }} className="height-define">
        <Home />
      </div>
    );
  }
}

export default SteamComponent;
