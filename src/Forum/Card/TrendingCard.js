import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

export default class TrendingCard extends Component {
  render() {
    return (
      <div className="trending-card">
        {/* {this.props.thread.images_url.map((image) => (
          <img alt={image.id} src={image.url}></img>
        ))} */}
        <img
          alt="text"
          src={
            this.props.thread.header_image_url
              ? this.props.thread.header_image_url.url
              : this.props.thread.header_image.image
          }
        />
        <div className="trending-card-sub">
          <h5 style={{ color: "#fc5c2d", fontWeight: "bold" }}>REVIEW</h5>
          <h4>{this.props.thread.title}</h4>
          <h5>{ReactHtmlParser(this.props.thread.content)}</h5>
        </div>
      </div>
    );
  }
}
