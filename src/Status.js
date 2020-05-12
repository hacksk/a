// import React from 'react';
// import ReactDOM from 'react-dom';

// const { Step } = Steps;

// ReactDOM.render(
//  ,
//   document.getElementById('container'),
// );
import React, { Component } from "react";
import "antd/dist/antd.css";
import "./index.css";
// import Navbar from "./Navbar";
import { Steps } from "antd";

const { Step } = Steps;

class Status extends Component {
  render() {
    return (
      <div style={{padding:"10em",paddingTop:"4em",maxHeight:"100vh",overflow:"hidden"}}>
        {/* <Navbar />   */}
        <h3 style={{color:"white"}}>STATUS</h3>
        <div className="status-bar">
          <Steps
            className="status-component"
            direction="horizontal"
            current={1}
          >
            <Step title="Service 1" description="Work Started" />
            <Step title="Service 2" description="Almost there" />
            <Step title="Service 3" description="Your Car Is Ready To Go" />
          </Steps>
        </div>
      </div>
    );
  }
}

export default Status;
