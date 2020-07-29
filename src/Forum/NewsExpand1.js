import React, { Component } from "react";
import axios from "axios";
import { Popover, message } from "antd";
import ForumComment from "./ForumComment";
import Trending from "./Card/TrendingCard";
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
    trending: [],
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
        axios
          .get(`https://automoto.techbyheart.in/api/v1/forum/latest-threads/`)
          .then((res) => {
            const trending = res.data.data.slice(0, 8);
            this.setState({ trending });
            console.log(trending);
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
          <div className="thread-share">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="threadexpand-wrap">
            <div
              className="threadexpand-content"
              style={{ position: "relative" }}
            >
              <div className="thread-header-space">
                <div>
                  <h6>REVIEW</h6>
                  <h5>{this.state.threads.title}</h5>
                </div>
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
              </div>
              <div className="thread-profile-header">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img alt="" src={this.state.image}></img>
                  <p>{this.state.threads.username}</p>
                </div>
                <div className="thread-expand-time-n-more">
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.38)",
                    }}
                  >
                    {<Moment fromNow>{this.state.threads.date}</Moment>}
                  </p>
                </div>
              </div>
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

              <br />
            </div>
            {/* <TestComment
              thread={this.state.threads.comment}
              mainthread={this.state.threads}
            /> */}
            <ForumComment
              thread={this.state.threads}
              comment={this.state.threads.comment}
            />
          </div>
          <div className="thread-expanded-trending">
            <h4>Trending</h4>
            {this.state.trending.map((trend) => (
              <Link to={`/forum/thread/${trend.id}`}>
                <Trending
                  trendingimg={trend.header_image}
                  trendinghead={trend.title}
                />
              </Link>
            ))}
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
