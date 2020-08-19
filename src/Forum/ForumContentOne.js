import React, { Component } from "react";
import { MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import { Popover, notification, message } from "antd";
import axios from "axios";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";

const URL = "https://beta1.techbyheart.in/api/v1/forum";
const content = (id) => (
  <div>
    <button
      onClick={(e) => {
        e.stopPropagation();
        axios
          .post(`${URL}/destroy/${id}/`)
          .then((res) => {
            console.log(res.data);
            message.success("Thread deleted successfully");
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
            notification.open({
              message: "Warning",
              description: "You are not authorized perform this action.",
              onClick: () => {
                console.log("Notification Clicked!");
              },
            });
          });
      }}
    >
      Delete
    </button>
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
  </div>
);

class ForumContentOne extends Component {
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
          <img
            alt="text"
            src={
              this.props.thread.header_image_url
                ? this.props.thread.header_image_url.url
                : this.props.thread.header_image.image
            }
          />

          <div
            style={{
              paddingLeft: "2em",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "wrap",
            }}
          >
            <h5 style={{ color: "white" }}>{this.props.thread.title}</h5>
            <p
              style={{
                color: "white",
                fontFamily: "Montserrat",
                width: "40vw",
              }}
            >
              {ReactHtmlParser(this.props.thread.content)}
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
            {this.props.isAuthenticated ? (
              this.props.userData.username == this.props.thread.username ? (
                <Popover
                  placement="bottomRight"
                  content={() => content(this.props.thread.id)}
                  trigger="click"
                >
                  <MdMoreVert />
                </Popover>
              ) : null
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userData: state.auth.userData,
  };
};
export default connect(mapStateToProps)(ForumContentOne);
