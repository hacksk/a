import React, { Component } from "react";
// import { Radio } from "antd";
import axios from "axios";

export default class ForumCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      header_image: "",
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

    const { title, content, header_image } = this.state;

    axios
      .post(`https://automoto.techbyheart.in/api/v1/forum/^thread/create/1`, {
        title: title,
        content: content,
        header_image: header_image,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }
  render() {
    return (
      <div className="thread-create" style={{ padding: "8em" }}>
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
                  onChange={this.onChange}
                />
              </div>
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
