import React, { Component } from "react";

export default class ForumContentOne extends Component {
  
  render() {
    return (
      <div style={{cursor:"pointer"}} className="forum-home-thread">
        <img alt="" src={this.props.threadimage}></img>
        <div style={{ paddingLeft: "2em",display:"flex",flexDirection:"column",justifyContent:"center" }}>
          <h5 style={{ color: "white" }}>{this.props.threadhead}</h5>
          <p style={{ color: "white",fontFamily:"Montserrat" }}>{this.props.threadcontent}</p>
        </div>
      </div>
    );
  }
}
