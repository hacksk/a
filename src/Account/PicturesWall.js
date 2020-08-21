import React, { Component } from "react";

import axios from "axios";
import { MdFileUpload } from "react-icons/md";
import { message } from "antd";

export default class PicturesWall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile_image: "",
      imageid:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", this.state.profile_image);
    axios
      .post(
        `https://beta1.techbyheart.in/api/v1/document/`,
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        const imageid = res.data.id;
        this.setState({imageid})

        axios
          .patch(
            `https://beta1.techbyheart.in/api/v1/customer/${this.props.thread.id}/`,
            {
              photo: this.state.imageid,
            }
          )
          .then((res) => {
            console.log(res, "UPLOADRES");
          });
      });
  }
  onChange(event) {
    this.setState({
      profile_image: event.target.files[0],
    });
    if (event.target.files[0].size / 1024 > 2048) {
      message.info("Please choose file size less than 2MB");
    }
    console.log(this.state.profile_image, "IMAGE");
  }

  render() {
    return (
      <div>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={this.handleSubmit}
        >
          <label className="alt-img-btn">
            <MdFileUpload />
            Change Image
            <input
              style={{ display: "none" }}
              className="thread-create-upload"
              type="file"
              name="header_image"
              onChange={this.onChange}
            />
          </label>
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="alt-img-btn"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
