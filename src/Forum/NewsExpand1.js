import React, { Component } from "react";
import axios from "axios";
import { Spin, Space } from "antd";
import Demo from "./Demo";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";

// import ForumTrending from "./ForumTrendingThread";
// import Demo from "./Demo";

export default class NewsExpanded extends Component {
  state = {
    thread: null,
    count: 0
  };
  incrementLike = () => {
    let newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
  };

  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/forum/^latest-threads/`)
      .then(res => {
        const threads = res.data.data;
        const thread = threads.find(
          x => x.id == this.props.match.params.content
        );
        console.log(thread);
        this.setState({ thread });
      });
  }
  render() {
    if (this.state.thread != null) {
      return (
        <div className="threadexpand">
          <div className="threadexpand-content">
            <div className="thread-profile-header">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  alt=""
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                ></img>
                <p>{this.state.thread.username}</p>
              </div>
              <p style={{ color: "rgba(255, 255, 255, 0.38)" }}>
                {this.state.thread.thread_date}
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
              url={this.state.thread.video_url}
            />
            {/* <button className="like-button-forum">
              <AiOutlineLike />
            </button> */}
            {/* <button style={{color:"black"}} onClick={this.incrementLike}>Likes:{this.state.count}</button> */}
            <br />
            <Demo
              thresdId={this.state.thread.id}
              comments={this.state.thread.comment}
            />
          </div>
        </div>
      );
    } else
      return (
        <div>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      );
  }
}
