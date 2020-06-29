import React, { Component } from "react";
import axios from "axios";
import { Spin, Space, Popover,message } from "antd";
import ForumComment from "./ForumComment";
import ReactPlayer from "react-player";
import { MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";

const URL = "https://automoto.techbyheart.in/api/v1/forum";
const content = (id) => (
  <div>
    <button
      onClick={(e) => {
        e.stopPropagation();
        axios
          .post(`${URL}/destroy/${id}/`)
          .then((res) => {
            console.log(res.data);
            console.log(id);
          })
          .catch((error) => {
            message.info("You are not authorized to delete this comment");
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
class NewsExpanded extends Component {
  state = {
    thread: null,
    count: 0,
  };

  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/forum/latest-threads/`)
      .then((res) => {
        const threads = res.data.data;
        const thread = threads.find(
          (x) => x.id == this.props.match.params.content
        );
        this.setState({ thread });
        console.log(thread)
      });
  }
  render() {
    if (this.state.thread != null) {
      return (
        <div className="threadexpand">
          <div className="threadexpand-wrap">
            <div
              className="threadexpand-content"
              style={{ position: "relative" }}
            >
              {this.props.isAuthenticated ? (
                <div className="forum-more-container">
                  <div
                    className="forum-more"
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Popover
                      placement="bottomRight"
                      content={() => content(this.state.thread.id)}
                      trigger="click"
                    >
                      <MdMoreVert />
                    </Popover>
                  </div>
                </div>
              ) : null}
              <div className="thread-profile-header">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    alt=""
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  ></img>
                  <p>{this.state.thread.username}</p>
                </div>
                <p style={{ color: "rgba(255, 255, 255, 0.38)" }}>
                  {<Moment fromNow>{this.state.thread.date}</Moment>}
                </p>
              </div>
              <h5>{this.state.thread.title}</h5>
              <img
                className="thread-expanded-image"
                alt=""
                src={this.state.thread.header_image}
              ></img>
              <p>{this.state.thread.content}</p>
              <ReactPlayer
                className="forum-video"
                controls={true}
                pip={true}
                url={this.state.thread.video_url}
              />
              {/* <button className="like-button-forum">
              <AiOutlineLike />
            </button> */}
              {/* <button style={{color:"black"}} onClick={this.incrementLike}>Likes:{this.state.count}</button> */}
              <br />
            </div>
            <ForumComment thread={this.state.thread} />
          </div>
        </div>
      );
    } else
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10vh",
            height:"100vh"
          }}
        >
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps)(NewsExpanded);
