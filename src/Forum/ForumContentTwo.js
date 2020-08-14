import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

export default class ForumContentTwo extends Component {
  render() {
    return (
      <div className="forum-home-thread-square">
        <img
          alt="text"
          src={
            this.props.thread.header_image_url
              ? this.props.thread.header_image_url.url
              : this.props.thread.header_image.image
          }
        />

        <div
          className="forum-home-thread-square-textbox"
          style={{ padding: "1em" }}
        >
          <h6 style={{ color: "white" }}>{this.props.thread.title}</h6>
          <p style={{ color: " rgba(255, 255, 255, 0.6)" }}>
            {ReactHtmlParser(this.props.thread.content)}
          </p>
        </div>
      </div>
    );
  }
}
