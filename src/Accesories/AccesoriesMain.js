import React, { Component } from "react";

class ServiceMain extends Component {
  render() {
    return (
      <div className="service-cards" >
        <img src={this.props.serviceimg}></img>
      </div>
    );
  }
}

export default ServiceMain;
