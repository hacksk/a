import React, { Component } from "react";

export default class ForumContentTwo extends Component {
  render() {
    return (
      <div className="forum-home-thread-square">
        {this.props.thread.images_url.map((image) => (
          <img alt={image.id} src={image.url}></img>
        ))}
        <div
          className="forum-home-thread-square-textbox"
          style={{ padding: "1em" }}
        >
          <h6 style={{ color: "white" }}>{this.props.thread.title}</h6>
          <p style={{ color: " rgba(255, 255, 255, 0.6)" }}>
            {this.props.thread.content}
          </p>
        </div>
      </div>
    );
  }
}
