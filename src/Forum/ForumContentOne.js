import React, { Component } from "react";

export default class ForumContentOne extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="forum-home-thread">
        <img src={this.props.threadimage}></img>
        <div style={{ paddingLeft: "2em",display:"flex",flexDirection:"column",justifyContent:"center" }}>
          <h6 style={{ color: "white" }}>{this.props.threadhead}</h6>
          <p style={{ color: "white" }}>{this.props.threadcontent}</p>
        </div>
      </div>
    );
  }
}
