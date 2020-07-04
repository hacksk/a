import React, { Component } from "react";
import axios from "axios";
import { Popover, message } from "antd";
import ForumComment from "./ForumComment";
import ReactPlayer from "react-player";
import { MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { SemipolarLoading } from "react-loadingg";

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
    tags: [],
    count: 0,
    image: "",
  };

  componentDidMount() {
    const threadId = this.props.match.params.content;

    axios
      .get(
        `https://automoto.techbyheart.in/api/v1/forum/thread-single/${threadId}`
      )
      .then((res) => {
        const threads = res.data.data;
        this.setState({ threads });
        console.log("expanded", threads);
        this.setState((state) => {
          return {
            image:
              "https://automoto.techbyheart.in" + this.state.threads.userimage,
          };
        });
        // const tags = this.state.thread.tag;
        // console.log(tags);
        // this.setState({ tags });
      });
  }
  render() {
    if (this.state.threads != null) {
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
                      content={() => content(this.state.threads.id)}
                      trigger="click"
                    >
                      <MdMoreVert />
                    </Popover>
                  </div>
                </div>
              ) : null}
              <div className="thread-profile-header">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img alt="" src={this.state.image}></img>
                  <p>{this.state.threads.username}</p>
                </div>
                <p style={{ color: "rgba(255, 255, 255, 0.38)" }}>
                  {<Moment fromNow>{this.state.threads.date}</Moment>}
                </p>
              </div>
              <h5>{this.state.threads.title}</h5>
              <div>
                {this.state.tags.map((tag) => (
                  <p>{tag.name}</p>
                ))}
              </div>
              <img
                className="thread-expanded-image"
                alt=""
                src={this.state.threads.header_image}
              ></img>
              <p>{this.state.threads.content}</p>
              <ReactPlayer
                className="forum-video"
                controls={true}
                pip={true}
                url={this.state.threads.video_url}
              />
              {/* <button className="like-button-forum">
              <AiOutlineLike />
            </button> */}
              {/* <button style={{color:"black"}} onClick={this.incrementLike}>Likes:{this.state.count}</button> */}
              <br />
            </div>
            <ForumComment thread={this.state.threads} />
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
            height: "100vh",
          }}
        >
          <SemipolarLoading color="#F05C2D" />
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
