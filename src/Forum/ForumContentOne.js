import React, { Component } from "react";
import { MdMoreVert } from "react-icons/md";
import { Popover, Button } from "antd";

const text = <span></span>;
const content = (
  <div>
    <button
      onClick={(e) => {
        e.stopPropagation();
        console.log("delete");
        // Do the delet operation
      }}
      style={{ cursor: "pointer", border: "none", color: "red" }}
    >
      Delete
    </button>
    <button
      onClick={(e) => {
        e.stopPropagation();
        console.log("delete");
        // Do the delet operation
      }}
      style={{ cursor: "pointer", border: "none", color: "red" }}
    >
      Delete
    </button>
  </div>
);

const buttonWidth = 70;

export default class ForumContentOne extends Component {
  render() {
    return (
      <div style={{ cursor: "pointer" }} className="forum-home-thread">
        <div className="forum-home-thread">
          <img alt="" src={this.props.threadimage}></img>
          <div
            style={{
              paddingLeft: "2em",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h5 style={{ color: "white" }}>{this.props.threadhead}</h5>
            <p
              style={{
                color: "white",
                fontFamily: "Montserrat",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {this.props.threadcontent}
            </p>
          </div>
        </div>
        <div
          className="forum-more"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Popover
            placement="leftTop"
            title={text}
            content={content}
            trigger="click"
          >
            <MdMoreVert />
          </Popover>
        </div>
      </div>
    );
  }
}
