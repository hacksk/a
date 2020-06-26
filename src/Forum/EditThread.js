import React, { Component } from "react";
import axios from "axios";
import { Spin, Space,Popover } from "antd";


export default class EditThread extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      header_image: "",
      video_url: "",
      thread:null
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
    const threadId = this.props.match.params.edit;
    console.log(threadId);

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
      .patch(
        `https://automoto.techbyheart.in/api/v1/forum/update-thread/${threadId}/`,
        formData
      )
      .then((res) => {
        this.props.history.push("/forum");
      });
  };
  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/forum/thread-list/`)
      .then((res) => {
        const threads = res.data.data;
        const thread = threads.find(
          (x) => x.id == this.props.match.params.edit
        );
        this.setState({ thread });
        console.log(thread)
      });
  }
  render() {
    if (this.state.thread != null) {

    return (
      <div className="thread-create" style={{ padding: "8em", height: "auto" }}>
        <form onSubmit={this.handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "rgba(255, 255, 255, 0.87)",
            }}
          >
            <p>Change the thread title</p>
            <div
              className="thread-create-field"
              style={{
                borderBottom: "1px solid rgba(255, 255, 255, 0.08",
                paddingBottom: "3em",
              }}
            >
              <textarea
                className="thread-create-title"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "white",
                  height:"7vh",
                  border: "none",
                  padding: "1em",
                  borderRadius: "8px",
                  width: "40em",
                }}
                placeholder="Add title"
                onChange={this.handleChange}
                name="title"
                type="text"
              >
                {this.state.thread.title}
              </textarea>
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
                
                <p>Change header image*</p>
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
              <textarea
                name="video_url"
                type="link"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  color: "white",
                  border: "none",
                  padding: "1em",
                  borderRadius: "8px",
                  width: "24em",
                  height:"7vh"
                }}
                placeholder="Video Link"
                onChange={this.handleChange}
              >
                {this.state.thread.video_url}
              </textarea>
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
                >{this.state.thread.content}</textarea>
              </div>
            </div>
            <button type="submit" className="create-forum-button">
              UPDATE THREAD
            </button>
          </div>
        </form>
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
          }}
        >
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      );
  }
}
