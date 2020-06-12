import React, { Component } from "react";
import { MdMoreVert } from "react-icons/md";
import { Popover, Button } from "antd";
import axios from "axios";

const text = <span></span>;
const content = id => (
  <div>
    <button
      onClick={e => {
        e.stopPropagation();
        console.log(id);
        axios
          .post(
            `https://automoto.techbyheart.in/api/v1/forum/delete-thread/${id}/`
          )
          .then(res => {
            console.log(res.data);
          })
          .catch(e => console.log(e));
      }}
      style={{ cursor: "pointer", border: "none", color: "red" }}
    >
      Delete
    </button>
    <button
      onClick={e => {
        e.stopPropagation();
        console.log("edit");
        // Do the delet operation
      }}
      style={{ cursor: "pointer", border: "none", color: "red" }}
    >
      Edit
    </button>
  </div>
);

const buttonWidth = 70;

export default class ForumContentOne extends Component {
  render() {
    return (
      <div style={{ cursor: "pointer" }} className="forum-home-thread">
        <div className="forum-home-thread">
          <img alt="" src={this.props.thread.header_image}></img>
          <div
            style={{
              paddingLeft: "2em",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <h5 style={{ color: "white" }}>{this.props.thread.title}</h5>
            <p
              style={{
                color: "white",
                fontFamily: "Montserrat",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {this.props.thread.content}
            </p>
          </div>
        </div>
        <div
          className="forum-more"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Popover
            placement="leftTop"
            title={text}
            content={() => content(this.props.thread.id)}
            trigger="click"
          >
            <MdMoreVert />
          </Popover>
        </div>
      </div>
    );
  }
}
