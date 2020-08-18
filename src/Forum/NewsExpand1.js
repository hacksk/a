import React, { Component } from "react";
import axios from "axios";
import { Popover, message, Modal, Button } from "antd";
import ForumComment from "./ForumComment";
import Trending from "./Card/TrendingCard";
import ReactPlayer from "react-player";
import { MdMoreVert } from "react-icons/md";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { SemipolarLoading } from "react-loadingg";
import ImageScroller from "react-image-scroller";
import HelmetMetaData from "./Card/HelmetMetaData";
import ReactHtmlParser from "react-html-parser";
import { Helmet } from "react-helmet";

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

const URL = "https://beta1.techbyheart.in/api/v1/forum";

class NewsExpanded extends Component {
  state = {
    thread: null,
    tags: [],
    count: 0,
    image: "",
    trending: [],
    trending_image: [],
    images: [],
    head: [],
    urls: [],
    visible: false,
    visiblepop: false,
    item: [],
    pic: [],
    latest: [],
    vis: "none",
    newcontent: "",
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
    console.log(this.props.userData, "userdata");

    axios
      .get(
        `https://beta1.techbyheart.in/api/v1/forum/thread-single/${threadId}`
      )
      .then((res) => {
        const threads = res.data.data;
        console.log(threads);
        const images = res.data.data.images;
        const urls = res.data.data.header_image;
        const head = res.data.data.header_image_url;
        console.log(head, "itmightbe");
        console.log(images, "images");
        this.setState({ threads, images, urls, head });
        console.log("expanded", threads);
        this.setState((state) => {
          return {
            image:
              "https://beta1.techbyheart.in/admin/" +
              this.state.threads.userimage,
          };
        });
        const tags = res.data.data.tag;
        console.log(tags, "tags");
        this.setState({ tags });
      });

    axios
      .get(`https://beta1.techbyheart.in/api/v1/forum/latest-threads/`)
      .then((res) => {
        const trending = res.data.data.slice(0, 8);
        this.setState({ trending });
        console.log(trending, "trends");
      });
  }
  render() {
    const { classes } = this.props;
    if (this.state.threads != null) {
      return (
        <div className="threadexpand">
          <div className="thread-share">
            {/* <HelmetMetaData
              title={this.state.threads.title}
              description={this.state.threads.content}
              share={this.state.threads}
            /> */}
            <Helmet>
              <title>{this.state.threads.title}</title>
              <meta charset="utf-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="csrf_token" content="" />
              <meta property="type" content="article" />
              <meta property="url" content={window.location.href} />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <meta name="msapplication-TileColor" content="#ffffff" />
              <meta
                name="msapplication-TileImage"
                content="/ms-icon-144x144.png"
              />
              <meta name="theme-color" content="#ffffff" />
              <meta name="_token" content="" />
              <meta name="robots" content="noodp" />
              <meta property="title" content={this.state.threads.title} />
              <meta property="quote" content={this.state.threads.title} />
              <meta name="description" content={this.state.threads.content} />
              <meta
                property="image"
                content={
                  this.state.head != null
                    ? this.state.head.url
                    : this.state.urls.image
                }
              />
              <meta property="og:locale" content="en_US" />
              <meta property="og:type" content="website" />
              <meta property="og:title" content={this.state.threads.title} />
              <meta property="og:quote" content={this.state.threads.title} />
              {/* <meta property="og:hashtag" content={hashtag} /> */}
              <meta
                property="og:image"
                content={
                  this.state.head != null
                    ? this.state.head.url
                    : this.state.urls.image
                }
              />
              <meta content="image/*" property="og:image:type" />
              <meta property="og:url" content={window.location.href} />
              <meta property="og:site_name" content="Automoto" />
              <meta
                property="og:description"
                content={this.state.threads.content}
              />{" "}
            </Helmet>

            <FacebookShareButton
              url={window.location.href}
              quote={this.state.threads.title}
              hashtag={this.state.threads.title}
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
              image={
                this.state.head != null
                  ? this.state.head.url
                  : this.state.urls.image
              }
              separator="::"
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
              {this.state.head != null ? (
                <img
                  className="thread-expanded-image"
                  alt=""
                  src={this.state.head.url}
                ></img>
              ) : (
                <img
                  className="thread-expanded-image"
                  alt=""
                  src={this.state.urls.image}
                ></img>
              )}
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
                                    message.success(
                                      "Thread deleted successfully"
                                    );
                                    this.props.history.push("/forum");
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

                            <Link to={`/forum/edit/${this.state.threads.id}`}>
                              {this.props.userData.username ==
                              this.state.threads.username ? (
                                <button
                                  onClick={(e) => {
                                    console.log("edit");
                                    // Do the edit operation
                                  }}
                                >
                                  Edit
                                </button>
                              ) : null}
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
              <div style={{ display: "flex", flexDirection: "row" }}>
                {this.state.tags.map((tag) => (
                  <p
                    style={{
                      color: "#F05C2D",
                      paddingLeft: "5px",
                      cursor: "pointer",
                    }}
                  >
                    #{tag.name}
                  </p>
                ))}
              </div>
              <div className="thread-profile-header">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    alt=""
                    src={`https://beta1.techbyheart.in${this.state.threads.userimage}`}
                  ></img>
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

              <div>{ReactHtmlParser(this.state.threads.content)}</div>

              <ReactPlayer
                className="forum-video"
                controls={true}
                pip={true}
                url={this.state.threads.video_url}
              />
              {this.state.images != null ? (
                <div>
                  <ImageScroller>
                    {this.state.images.map((person) => (
                      <img
                        className="thread-expand-gallery"
                        alt={person.id}
                        src={person.image}
                      ></img>
                    ))}
                  </ImageScroller>
                </div>
              ) : null}
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
          <div style={{ marginTop: "-5vh" }}>
            <div className="thread-expanded-trending">
              <h4>Trending</h4>
              {this.state.trending.map((trend) => (
                <Link to={`/forum/thread/trendin/${trend.id}`}>
                  <Trending thread={trend} />
                </Link>
              ))}
            </div>
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
          {this.props.isAuthenticated ? null : (
            <p style={{ color: "white", marginTop: "2vh" }}>
              Please Sign In to view the threads
            </p>
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

export default connect(mapStateToProps)(NewsExpanded);
