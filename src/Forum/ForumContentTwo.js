import React, { Component } from "react";

export default class ForumContentTwo extends Component {
  render() {
    return (
      <div className="forum-home-thread-square">
        <img src={this.props.threadimagetwo}></img>
        <div style={{padding:"1em"}}>
          <h6 style={{ color: "white" }}>{this.props.threadheadtwo}</h6>
          <p style={{ color: " rgba(255, 255, 255, 0.6)" }}>
            {this.props.threadcontenttwo}
          </p>
        </div>
      </div>
    );
  }
}
