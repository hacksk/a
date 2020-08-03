import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="home-banner">
        {this.props.thread.images_url.map((person) => (
          <img alt={person.id} className="banner-image" src={person.url}></img>
        ))}
        <div
          className="testcar"
          style={{
            whiteSpace: "nowrap",
            width: "100vh",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          <p style={{ color: "rgba(240, 92, 45, 0.08)" }}>NEWS</p>
          <h3 style={{ color: "white" }}>
            {this.props.thread.title}
            <br /> test drive
          </h3>
          <p
            style={{
              color: "white",
              fontSize: "13px",
              whiteSpace: "nowrap",
              width: "100vh",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {this.props.thread.content}
          </p>
        </div>
      </div>
    );
  }
}
