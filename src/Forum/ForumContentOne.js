import React, { Component } from "react";
import { MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import { Popover, Button } from "antd";
import axios from "axios";


const URL = "https://automoto.techbyheart.in/api/v1/forum";
const content = (id) => (
  <div>
    <button
      onClick={(e) => {
        e.stopPropagation();
        axios
          .post(`${URL}/delete-thread/${id}/`)
          .then((res) => {
            console.log(res.data);
          })
          .catch((e) => console.log(e));
      }}
    >
      Delete
    </button>
    {/* {this.state.subthread.map((person) => ( */}
    <Link to={`/forum/content/${id}`}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log("edit");
          // Do the edit operation
        }}
      >
        Edit
      </button>
    </Link>
    {/* ))} */}
  </div>
);


export default class ForumContentOne extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }
 
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
  render() {
    return (
      <div
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
        style={{ cursor: "pointer" }}
        className="forum-home-thread"
      >
        <div className="forum-home-thread">
          <img alt="" src={this.props.thread.header_image}></img>
          <div
            style={{
              paddingLeft: "2em",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h5 style={{ color: "white" }}>{this.props.thread.title}</h5>
            <p
              style={{
                color: "white",
                fontFamily: "Montserrat",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {this.props.thread.content}
            </p>
          </div>
        </div>
        {this.state.isHovering && (
        <div
          className="forum-more"
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Popover
            placement="bottomRight"
            content={() => content(this.props.thread.id)}
            trigger="click"
          >
            <MdMoreVert />
          </Popover>
        </div>
        )}
      </div>
    );
  }
}
