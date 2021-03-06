import React, { Component } from "react";
import axios from "axios";
import { message, Select } from "antd";
import MultiImage from "./Card/Upload/MultiImage";
import TagsForum from "./TagsForum";

const { Option } = Select;

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

export default class ForumCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      header_image: "",
      images_url: [],
      url: "",
      image: "",
      video_url: "",
      tags: [],
      options: [],
      file: null,
      name: [],
      children: [],
      url_image: "",
      posting: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
  }
  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/forum/tags/`)
      .then((res) => {
        const options = res.data.data;
        console.log(options, "tag");
        this.setState({ options });
        let name = options.map(function (item) {
          return item["name"];
        });
        this.setState({ name });
        this.state.children.push(
          <Option key={this.state.name}>{this.state.name}</Option>
        );
        console.log(this.state.children, "children");
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      url_image: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const threadId = this.props.match.params.create;

    const formData = new FormData();
    formData.append("image", this.state.header_image);

    if (this.state.posting == true) {
      axios
        .post(`https://automoto.techbyheart.in/api/v1/forum/image/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          const newformData = new FormData();
          newformData.append("title", this.state.title);
          newformData.append("content", this.state.content);
          newformData.append("video_url", this.state.video_url);
          newformData.append("header_image", res.data.data.id);
          axios
            .post(
              `https://automoto.techbyheart.in/api/v1/forum/thread/create/${threadId}/`,
              newformData
            )
            .then((res) => {
              this.props.history.push("/forum");
            })
            .catch((error) => {
              message.info("Please fill the comment Box");
            });
        });
    } else if (this.state.posting == false) {
      const urlformData = new FormData();
      urlformData.append("url", this.state.url);

      axios
        .post(
          `https://automoto.techbyheart.in/api/v1/forum/image-url/`,
          urlformData
        )
        .then((res) => {
          const newformData = new FormData();
          newformData.append("title", this.state.title);
          newformData.append("content", this.state.content);
          newformData.append("video_url", this.state.video_url);
          newformData.append("header_image_url", res.data.data.id);

          axios
            .post(
              `https://automoto.techbyheart.in/api/v1/forum/thread/create/${threadId}/`,
              newformData
            )
            .then((res) => {
              this.props.history.push("/forum");
            })
            .catch((error) => {
              message.info("Please fill the comment Box");
            });
        });
    }
  };
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
      header_image: event.target.files[0],
      posting: true,
    });
  }
  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }
  render() {
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
            <p>Give a short thread title</p>
            {/* <p>{this.state.name}</p> */}
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
                  flexDirection: "column",
                  justifyContent: "Space-between",
                  width: "40%",
                  marginTop: "3em",
                }}
              >
                {" "}
                <p>Upload header image</p>
                <img
                  alt=""
                  className="uploaded-image-forum"
                  src={this.state.file}
                />
                <img
                  alt=""
                  className="uploaded-image-forum"
                  src={this.state.url_image}
                />
                <label style={{ fontSize: "11px" }}>Image URL</label>
                <input
                  className="thread-create-title"
                  type="text"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    color: "white",
                    border: "none",
                    padding: "1em",
                    borderRadius: "8px",
                    width: "40em",
                  }}
                  onChange={this.handleChange}
                  name="url"
                ></input>
                <h6
                  style={{
                    color: "white",
                    textAlign: "center",
                    margin: "24px 0 24px 0",
                  }}
                >
                  OR
                </h6>
                <label style={{ fontSize: "11px" }}>Image from local</label>
                <input
                  className="thread-create-upload"
                  type="file"
                  name="header_image"
                  onChange={this.onChange}
                />
                {/* {this.state.file && (
                  <div style={{ textAlign: "center" }}>
                    <button onClick={this.resetFile}>Remove File</button>
                  </div>
                )} */}
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
                <label style={{ fontSize: "11px", marginTop: "5vh" }}>
                  Thread Images
                </label>
                <MultiImage />
              </div>
              <p>Add a tag</p>
              <div className="forum-create-tag">
                <div
                  style={{
                    height: "5vh",
                    width: "100%",
                    marginBottom: "2em",
                    background: "rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <p
                    style={{
                      color: " rgba(255, 255, 255, 0.16)",
                      textAlign: "left",
                      paddingTop: "0.5em",
                      paddingLeft: "1em",
                    }}
                  >
                    Search Tags
                  </p>
                </div>

                {/* <Select
                  mode="tags"
                  style={{ width: "100%" }}
                  placeholder="Tags Mode"
                  // onChange={handleChange}
                >
                  {this.state.children}
                </Select> */}
                <TagsForum />
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
