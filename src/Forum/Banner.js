import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

export default class Banner extends Component {
  render() {
    return (
      <div className="home-banner">
        <div className="home-banner-image-cover">
          <img
            alt="text"
            className="banner-image"
            src={
              this.props.thread.header_image_url
                ? this.props.thread.header_image_url.url
                : this.props.thread.header_image.image
            }
          />
        </div>

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
          <h3 style={{ color: "white", zIndex: "1000" }}>
            {this.props.thread.title}
            <br />
          </h3>
          <p
            style={{
              color: "white",
              fontSize: "13px",
              whiteSpace: "nowrap",
              width: "120vh",
              textOverflow: "ellipsis",
              overflow: "hidden",
              height:"6vh",
            }}
          >
            {ReactHtmlParser(this.props.thread.content)}
          </p>
        </div>
      </div>
    );
  }
}
