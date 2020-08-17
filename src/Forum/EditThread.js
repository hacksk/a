import React, { Component } from "react";
import axios from "axios";
import { message } from "antd";
import { SemipolarLoading } from "react-loadingg";

export default class EditThread extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      image: "",
      video_url: "",
      thread: null,
      file: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
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

    const imageformData = new FormData();
    if (this.state.header_image != null) {
      imageformData.append("image", this.state.header_image);
      axios
        .post(
          `https://beta1.techbyheart.in/api/v1/forum/image/`,
          imageformData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res, "lastresult");
          const formData = new FormData();
          formData.append("title", this.state.title);
          formData.append("content", this.state.content);
          formData.append("video_url", this.state.video_url);
          formData.append("header_image", res.data.data.id);

          axios
            .patch(
              `https://beta1.techbyheart.in/api/v1/forum/update-thread/${threadId}/`,
              formData
            )
            .then((res) => {
              console.log(res, "finalresult");
              this.props.history.push(`/forum/thread/${res.data.data.id}`);
            })
            .catch((error) => {
              console.log(error, "error");
              message.info("Oops something went wrong, try later");
            });
        });
    } else {
      const formData = new FormData();
      formData.append("title", this.state.title);
      formData.append("content", this.state.content);
      formData.append("video_url", this.state.video_url);

      axios
        .patch(
          `https://beta1.techbyheart.in/api/v1/forum/update-thread/${threadId}/`,
          formData
        )
        .then((res) => {
          console.log(res, "finalresult");
          this.props.history.push(`/forum/thread/${res.data.data.id}`);
        })
        .catch((error) => {
          console.log(error, "error");
          message.info("Oops something went wrong, try later");
        });
    }
  };
  componentDidMount() {
    const threadId = this.props.match.params.edit;

    axios
      .get(
        `https://beta1.techbyheart.in/api/v1/forum/thread-single/${threadId}`
      )
      .then((res) => {
        const thread = res.data.data;
        this.setState({ thread });
        console.log(thread, "threads");
      });
  }
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
      header_image: event.target.files[0],
    });
  }

  render() {
    if (this.state.thread != null) {
      return (
        <div
          className="thread-create"
          style={{ padding: "8em", height: "auto" }}
        >
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
                    height: "7vh",
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
                    flexDirection: "column",
                    justifyContent: "Space-between",
                    width: "40%",
                    marginTop: "3em",
                  }}
                >
                  <p>Change header image*</p>
                  {/* <img
                    className="uploaded-image-forum"
                    src={this.state.thread.header_image.image}
                  ></img> */}
                  <img
                    alt=""
                    className="uploaded-image-forum"
                    src={
                      this.state.file
                        ? this.state.file
                        : this.state.thread.header_image
                    }
                  ></img>

                  <input
                    className="thread-create-upload"
                    type="file"
                    name="header_image"
                    onChange={this.onChange}
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
                    height: "7vh",
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

                <div
                  className="thread-create-textfield"
                  style={{ width: "45%" }}
                >
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
                  >
                    {this.state.thread.content}
                  </textarea>
                </div>
              </div>
              <button type="submit" className="create-forum-button">
                EDIT THREAD
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
          <SemipolarLoading color="#F05C2D" />
        </div>
      );
  }
}
