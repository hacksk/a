import React, { Component } from "react";
import axios from "axios";
import { Popover, message, Modal, Button } from "antd";
import ForumComment from "../ForumComment";
import Trending from "./TrendingCard";
import ReactPlayer from "react-player";
import { MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { SemipolarLoading } from "react-loadingg";
import ImageScroller from "react-image-scroller";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const URL = "https://automoto.techbyheart.in/api/v1/forum";

class NewsExpanded extends Component {
  state = {
    thread: null,
    tags: [],
    count: 0,
    image: "",
    trending: [],
    images: [],
    visible: false,
    visiblepop: false,
  };
  showModal = () => {
    this.setState({
      visible: true,
      visiblepop: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleVisbile = (visiblepop) => {
    this.setState({ visiblepop: true });
  };

  componentDidMount() {
    const threadId = this.props.match.params.content;

    axios
      .get(
        `https://automoto.techbyheart.in/api/v1/forum/thread-single/${threadId}`
      )
      .then((res) => {
        const threads = res.data.data;
        const images = res.data.data.images;
        const urls = res.data.data.images_url;
        console.log(images, "images");
        this.setState({ threads, images, urls });
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

    axios
      .get(`https://automoto.techbyheart.in/api/v1/forum/latest-threads/`)
      .then((res) => {
        const trending = res.data.data;
        this.setState({ trending });
        console.log(trending);
      });
    console.log(window.location.href, "location");
  }
  render() {
    if (this.state.threads != null) {
      return (
        <div className="threadexpand">
          <div className="thread-share">
            <FacebookShareButton
              url={window.location.href}
              quote={this.state.threads.title}
            >
              <FacebookIcon
                size="50px"
                bgStyle={{ fill: "transparent" }}
                iconFillColor="rgba(255, 255, 255, 0.6)"
              />
            </FacebookShareButton>
            <WhatsappShareButton
              url={window.location.href}
              title={this.state.threads.title}
            >
              <WhatsappIcon
                size="40px"
                bgStyle={{ fill: "transparent" }}
                iconFillColor="rgba(255, 255, 255, 0.6)"
              />
            </WhatsappShareButton>
            <LinkedinShareButton
              url={window.location.href}
              title={this.state.threads.title}
              summary={this.state.threads.content}
            >
              <LinkedinIcon
                size="50px"
                bgStyle={{ fill: "transparent" }}
                iconFillColor="rgba(255, 255, 255, 0.6)"
              />
            </LinkedinShareButton>
            <TwitterShareButton
              url={window.location.href}
              title={this.state.threads.title}
            >
              <TwitterIcon
                size="50px"
                bgStyle={{ fill: "transparent" }}
                iconFillColor="rgba(255, 255, 255, 0.6)"
              />
            </TwitterShareButton>
            <TelegramShareButton
              url={window.location.href}
              title={this.state.threads.title}
            >
              <TelegramIcon
                size="40px"
                bgStyle={{ fill: "transparent" }}
                iconFillColor="rgba(255, 255, 255, 0.6)"
              />
            </TelegramShareButton>
            <EmailShareButton
              url={window.location.href}
              subject={this.state.threads.title}
              body={this.state.threads.content}
            >
              <EmailIcon
                size="50px"
                bgStyle={{ fill: "transparent" }}
                iconFillColor="rgba(255, 255, 255, 0.6)"
              />
            </EmailShareButton>
          </div>
          <div className="threadexpand-wrap">
            <div
              className="threadexpand-content"
              style={{ position: "relative" }}
            >
              {this.state.urls.map((url) => (
                <img
                  className="thread-expanded-image"
                  alt=""
                  src={url.url}
                ></img>
              ))}
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
                        // content={() => content(this.state.threads.id)}
                        content={
                          <div>
                            <button
                              onClick={(e) => {
                                axios
                                  .post(
                                    `${URL}/destroy/${this.state.threads.id}/`
                                  )
                                  .then((res) => {
                                    console.log(res.data);
                                    console.log(this.state.threads.id);
                                  })
                                  .catch((error) => {
                                    message.info(
                                      "You are not authorized to delete this comment"
                                    );
                                  });
                              }}
                            >
                              Delete
                            </button>
                            <Link
                              to={`/forum/content/${this.state.threads.id}`}
                            >
                              <button
                                onClick={(e) => {
                                  console.log("edit");
                                  // Do the edit operation
                                }}
                              >
                                Edit
                              </button>
                            </Link>
                            <button
                              className="expand-mobile-share-btn"
                              onClick={this.showModal}
                            >
                              Share
                            </button>
                          </div>
                        }
                        trigger="click"
                        visible={this.state.visiblepop}
                        onVisibleChange={this.handleVisbile}
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

              <p>{this.state.threads.content}</p>

              <ReactPlayer
                className="forum-video"
                controls={true}
                pip={true}
                url={this.state.threads.video_url}
              />
              {this.state.images!= null ? (
                <ImageScroller style={{ marginTop: "50px" }}>
                  {this.state.images.map((person) => (
                    <img
                      className="thread-expand-gallery"
                      alt={person.id}
                      src={person.image}
                    ></img>
                  ))}
                </ImageScroller>
              ) : <h1>hello there</h1>}
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
                <Trending thread={trend} />
              </Link>
            ))}
          </div>
          <div className="thread-modal">
            <Modal
              title=""
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <FacebookShareButton
                  url={window.location.href}
                  quote={this.state.threads.title}
                >
                  <FacebookIcon
                    size="50px"
                    bgStyle={{ fill: "transparent" }}
                    iconFillColor="rgba(255, 255, 255, 0.6)"
                  />
                </FacebookShareButton>
                <WhatsappShareButton
                  url={window.location.href}
                  title={this.state.threads.title}
                >
                  <WhatsappIcon
                    size="40px"
                    bgStyle={{ fill: "transparent" }}
                    iconFillColor="rgba(255, 255, 255, 0.6)"
                  />
                </WhatsappShareButton>
                <LinkedinShareButton
                  url={window.location.href}
                  title={this.state.threads.title}
                  summary={this.state.threads.content}
                >
                  <LinkedinIcon
                    size="50px"
                    bgStyle={{ fill: "transparent" }}
                    iconFillColor="rgba(255, 255, 255, 0.6)"
                  />
                </LinkedinShareButton>
                <TwitterShareButton
                  url={window.location.href}
                  title={this.state.threads.title}
                >
                  <TwitterIcon
                    size="50px"
                    bgStyle={{ fill: "transparent" }}
                    iconFillColor="rgba(255, 255, 255, 0.6)"
                  />
                </TwitterShareButton>
                <TelegramShareButton
                  url={window.location.href}
                  title={this.state.threads.title}
                >
                  <TelegramIcon
                    size="40px"
                    bgStyle={{ fill: "transparent" }}
                    iconFillColor="rgba(255, 255, 255, 0.6)"
                  />
                </TelegramShareButton>
                <EmailShareButton
                  url={window.location.href}
                  subject={this.state.threads.title}
                  body={this.state.threads.content}
                >
                  <EmailIcon
                    size="50px"
                    bgStyle={{ fill: "transparent" }}
                    iconFillColor="rgba(255, 255, 255, 0.6)"
                  />
                </EmailShareButton>
              </div>
            </Modal>
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
