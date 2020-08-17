import React, { Component } from "react";
import TestCommentContent from "./TestCommentContent";
import { MdComment } from "react-icons/md";
import axios from "axios";
import { message } from "antd";

export default class TestComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.thread.comment,
      time: this.props.date,
      likeCount: this.props.thread.like_count,
      threadId: this.props.thread.id,
      userimage: this.props.userimage,
      submitting: false,
      value: "",
      content: "",
      liked: false,
      thread: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  toggleLike = () => {
    axios
      .post(
        `https://beta1.techbyheart.in/api/v1/forum/like-thread/${this.props.mainthread.id}/`
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    let likeCountnew = this.props.thread.like_count + 1;
    this.setState({ likeCount: likeCountnew });
  };
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit = () => {
    // const { content } = this.state;
    this.setState({
      submitting: true,
    });

    axios
      .post(
        `https://beta1.techbyheart.in/api/v1/forum/comment/${this.props.thread.id}/`,
        {
          content: this.state.value,
        }
      )
      .then((res) => {
        const comment = res.data.data;
        this.setState({
          submitting: false,
          value: "",
          comments: [
            ...this.state.comments,
            {
              username: comment.username,
              content: comment.content,
              time: comment.date,
              userimage: comment.userimage,
              avatar:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            },
          ],
        });
      })
      .catch((error) => {
        message.info("Please fill the comment Box");
      })
      .finally(() => {
        this.setState({
          submitting: false,
        });
      });

    // if (!this.state.value) {
    //   return;
    // }
  };

  render() {
    return (
      <div>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            padding: "0.5em 4em 0.5em 4em",
            height: "40px",
          }}
        >
          <p style={{ color: "rgba(255, 255, 255, 0.38)", fontWeight: "bold" }}>
            <span>
              <MdComment />
            </span>
            <span style={{ paddingLeft: "1em" }}>
              {`${this.props.mainthread.comment_count} ${
                this.props.mainthread.comment_count > 1 ? "replies" : "reply"
              }`}
            </span>
          </p>
        </div>
        <div style={{ padding: "4em" }}>
          {this.props.thread.map((threads) => (
            <TestCommentContent
              userimage={`https://beta1.techbyheart.in${threads.userimage}`}
              username={threads.username}
              time={threads.date}
              content={threads.content}
            />
          ))}
          <form
            onSubmit={this.handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
            }}
          >
            <textarea
              style={{
                borderRadius: "8px",
                border: "none",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                color: "rgba(255, 255, 255, 0.38)",
                marginTop: "1em",
                height: "12vh",
              }}
              name="content"
            ></textarea>
            <button
              style={{
                width: "20%",
                border: "none",
                color: "#FC5C2E",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                marginTop:"1em",
                height:"5vh",borderRadius:"4px"
        
              }}
              onClick={onsubmit}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
