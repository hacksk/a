import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="home-banner">
        <img className="banner-image" alt="" src={this.props.thread.header_image} />
        <div className="testcar" style={{whiteSpace:"nowrap",width:"100vh",textOverflow:"ellipsis",overflow:"hidden"}}>
          <p style={{ color: "rgba(240, 92, 45, 0.08)" }}>NEWS</p>
          <h3 style={{ color: "white" }}>
          {this.props.thread.title}
            <br /> test drive
          </h3>
          <p style={{ color: "white", fontSize: "13px",whiteSpace:"nowrap",width:"100vh",textOverflow:"ellipsis",overflow:"hidden" }}>
          {this.props.thread.content}
          </p>
        </div>
      </div>
    );
  }
}
