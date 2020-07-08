import React, { Component } from "react";

export default class TestCommentContent extends Component {
  render() {
    return (
      <div
        style={{
          borderBottom: "2px solid rgba(255, 255, 255, 0.08)",
          display: "flex",
          flexDirection: "row",
          height: "10vh",
          paddingTop:"1em"
        }}
      >
        <img
          style={{ width: "2em", borderRadius: "50%", height: "2em" }}
          src={this.props.userimage}
        ></img>
        <div style={{ display: "flex", flexDirection: "column",paddingLeft:"1em" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={{ color: "orange",fontSize:"12px" }}>{this.props.username}</p>
            <p style={{ color: "white",fontSize:"12px",paddingLeft:"1em" }}>{this.props.time}</p>
          </div>
          <p style={{ color: "white" }}>{this.props.content}</p>
        </div>
      </div>
    );
  }
}
