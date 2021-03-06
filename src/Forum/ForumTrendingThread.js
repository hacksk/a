import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

export default class ForumTrendingThread extends Component {
  render() {
    return (
      <div className="trending-thread">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img
            className="trending-home-profile "
            alt="threadprof"
            src={this.props.threadprof}
          ></img>
          <div
            className="trending-thread-content"
            style={{
              display: "flex",
              flexDirection: "column",
              color: "rgba(255, 255, 255, 0.6)",
              paddingLeft: "2em",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            <h6 style={{ color: "white" }}>{this.props.trendinghead}</h6>
            <p className="forum-trending-content">
              {ReactHtmlParser(this.props.trendingcontent)}
            </p>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            className="trending-image-home"
            alt="header"
            src={this.props.trendingheaderimg}
          />
          <p
            className="forum-timing"
            style={{ color: "rgba(255, 255, 255, 0.38)" }}
          >
            {this.props.timethread}
          </p>
        </div>
      </div>
    );
  }
}
