import React, { Component } from "react";
import { MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import { Popover, Button, notification } from "antd";
import axios from "axios";
import { connect } from "react-redux";


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
          .catch((error) => {
            notification.open({
              message: 'Warning',
              description:
                'You are not authorized perform this action.',
              onClick: () => {
                console.log('Notification Clicked!');
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
           {this.props.isAuthenticated ? (
          <Popover
            placement="bottomRight"
            content={() => content(this.props.thread.id)}
            trigger="click"
          >
            <MdMoreVert />
          </Popover>
          ) : (
           null
          )}
        </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};
export default connect(mapStateToProps)(ForumContentOne);
