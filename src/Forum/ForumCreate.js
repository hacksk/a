import React, { Component } from "react";
import axios from "axios";
import { message, Button } from "antd";
import { Redirect } from "react-router-dom";

export default class ForumCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      header_image: "",
      video_url:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const threadId = this.props.match.params.create;

    const formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("content", this.state.content);
    formData.append("video_url", this.state.video_url);

    formData.append(
      "header_image",
      this.state.header_image,
      this.state.header_image.name
    );

    axios
      .post(
        `https://automoto.techbyheart.in/api/v1/forum/thread/create/${threadId}/`,
        formData
      )
      .then((res) => {
        console.log(res);
        this.props.history.push("/forum");
      })
      // .catch((e) =>
      //  console.log(e));
  };
  render() {
    return (
      <div className="thread-create" style={{ padding: "8em",height:"auto" }}>
        <form onSubmit={this.handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "rgba(255, 255, 255, 0.87)",
            }}
          >
            <p>Give a short thread title</p>

            <div
              className="thread-create-field"
              style={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.08",
                paddingBottom: "3em",
                paddingTop: "3em",
              }}
            >
              <input
                className="thread-create-title"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "white",
                  border: "none",
                  padding: "1em",
                  borderRadius: "8px",
                  width: "40em",
                }}
                placeholder="Add title"
                onChange={this.handleChange}
                name="title"
                type="text"
              ></input>
              <div
                className="thread-create-imagefield"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "Space-between",
                  width: "40%",
                  marginTop: "3em",
                }}
              >
                {" "}
                <p>Upload header image</p>
                <input
                  className="thread-create-upload"
                  type="file"
                  name="header_image"
                  on
                  onChange={(e) => {
                    this.setState({ header_image: e.target.files[0] });
                  }}
                />
              </div>
            </div>
            <div>
              <p>Share Video URL</p>
              <input
               name="video_url"
                type="link"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "white",
                  border: "none",
                  padding: "1em",
                  borderRadius: "8px",
                  width: "24em",
                }}
                placeholder="Video Link"
                onChange={this.handleChange}
               
              ></input>
            </div>
            <div
              style={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.08",
                paddingBottom: "3em",
                paddingTop: "3em",
              }}
            >
              <p>Write something</p>

              <div className="thread-create-textfield" style={{ width: "45%" }}>
                <textarea
                  type="text"
                  className="thread-create-content"
                  style={{
                    color: "white",
                    background: "rgba(255, 255, 255, 0.08)",
                    height: "30vh",
                    width: "100%",
                    border: "none",
                    padding: "2em",
                  }}
                  name="content"
                  rows="4"
                  cols="50"
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>
            <button type="submit" className="create-forum-button">
              CREATE THREAD
            </button>
          </div>
        </form>
      </div>
    );
  }
}
