import React, { Component } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";

export default class ForumTrendingThread extends Component {
  render() {
    return (
      <div className="trending-thread">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img alt="threadprof" src={this.props.threadprof}></img>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "rgba(255, 255, 255, 0.6)",
              paddingLeft: "2em",
            }}
          >
            <h6 style={{ color: "white" }}>{this.props.trendinghead}</h6>
            <p>{this.props.trendingcontent}</p>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <AiOutlineLike />
                <MdInsertComment />
            </div>
          </div>
        </div>
        <p
          className="forum-timing"
          style={{ color: "rgba(255, 255, 255, 0.38)" }}
        >
          {this.props.timethread}
        </p>
      </div>
    );
  }
}
