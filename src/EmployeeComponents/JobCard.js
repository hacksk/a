import React, { Component } from "react";

export default class JobCard extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="jobcard">
        <h1 style={{ color: "white", fontFamily: "Praktika" }}>
          {this.props.jobid}
        </h1>
        <div className="jobcard-service">
          <p>service required</p>
          <p>
            {this.props.service}
            <br />
            {this.props.service2}
            <br />
            {this.props.service3}
          </p>
        </div>
        <div className="jobcard-service">
          <p>Vehicle Make</p>
          <p>{this.props.vehiclemake}</p>
        </div>
        <div className="jobcard-service">
          <p>Vehicle Model</p>
          <p>{this.props.vehiclemodel}</p>
        </div><div className="jobcard-service">
          <p>Vehicle Brand</p>
          <p>{this.props.vehiclebrand}</p>
        </div><div className="jobcard-service">
          <p>Fuel Type</p>
          <p>{this.props.fueltype}</p>
        </div><div className="jobcard-service">
          <p>Name</p>
          <p>{this.props.name}</p>
        </div><div className="jobcard-service">
          <p>Phone Number</p>
          <p>{this.props.phone}</p>
        </div>
      </div>
    );
  }
}
