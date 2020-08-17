import React, { Component } from "react";
import axios from "axios";
import { message, Select,notification } from "antd";
import { MdFileUpload } from "react-icons/md";
import TagsForum from "../../TagsForum";
import LoadingOverlay from "react-loading-overlay";
import { SemipolarLoading } from "react-loadingg";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
// import CKEditor from 'ckeditor4-react';

import { Link } from "react-router-dom";

const { Option } = Select;

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

export default class CreateThread extends Component {
  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      content: "",
      header_image: "",
      images_url: [],
      image_url: [],
      url: "",
      image: "",
      video_url: "",
      tags: [],
      options: [],
      file: null,
      name: [],
      images: "",
      children: [],
      url_image: "",
      posting: false,
      file: [null],
      loader: false,
      text: "",
      validation: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.resetFile = this.resetFile.bind(this);
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this);
  }
  componentDidMount() {
    axios.get(`https://beta1.techbyheart.in/api/v1/forum/tags/`).then((res) => {
      const options = res.data.data;
      this.setState({ options });
      let name = options.map(function (item) {
        return item["name"];
      });
      this.setState({ name });
      this.state.children.push(
        <Option key={this.state.name}>{this.state.name}</Option>
      );
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      url_image: event.target.value,
    });
  }

  handleSubmit = (event) => {
    if (this.state.title === "") {
      notification.open({
        message: "Error in creating thread",
        description: "Please fill in all the fields",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    } else {
      this.setState({ loader: true });

      event.preventDefault();

      const threadId = this.props.match.params.create;

      const formData = new FormData();
      formData.append("image", this.state.header_image);

      //for uploading file image

      if (this.state.posting == true) {
        axios
          .post(
            `https://beta1.techbyheart.in/api/v1/forum/image/`,
            formData,

            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((res) => {
            console.log(res, "resultmain");

            this.setState({ loader: true });
            console.log(res);
            const headerimage = res.data.data.id;
            const array = this.fileObj[0];

            if (array != null) {
              const multiformData = new FormData();
              for (var i = 0; i < array.length; i++) {
                multiformData.append("image", array[i]);
              }
              axios
                .post(
                  `https://beta1.techbyheart.in/api/v1/forum/image/`,
                  multiformData,
                  {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                  }
                )
                .then((res) => {
                  console.log(res, "resultfirst");
                  const newformData = new FormData();
                  newformData.append("title", this.state.title);
                  newformData.append("content", this.state.text);
                  newformData.append("video_url", this.state.video_url);
                  newformData.append("header_image", headerimage);
                  newformData.append("images", res.data.data.id);

                  this.setState({ loader: true });

                  axios
                    .post(
                      `https://beta1.techbyheart.in/api/v1/forum/thread/create/5775bbe0-8214-4250-a524-5cf51e6a3880/`,
                      newformData
                    )
                    .then((res) => {
                      console.log(res, "resultsecond");
                      this.setState({ loader: true });

                      this.props.history.push(
                        `/forum/thread/${res.data.data.id}`
                      );
                    })
                    .catch((error) => {
                      console.log(error, "oopserrorwithmulti");
                      message.warning("Oops, Please try again later");
                    });
                });
            } else {
              const newformData = new FormData();
              newformData.append("title", this.state.title);
              newformData.append("content", this.state.text);
              newformData.append("video_url", this.state.video_url);
              newformData.append("header_image", headerimage);

              this.setState({ loader: true });

              axios
                .post(
                  `https://beta1.techbyheart.in/api/v1/forum/thread/create/5775bbe0-8214-4250-a524-5cf51e6a3880/`,
                  newformData
                )
                .then((res) => {
                  this.setState({ loader: true });

                  this.props.history.push(`/forum/thread/${res.data.data.id}`);
                })
                .catch((error) => {
                  console.log(error, "oopserror");
                  message.warning("Oops, Please try again later");
                });
            }
          })
          .catch((er) => {
            console.log(er, "firsterror");
          });
      } else {
        //for uploading url image

        const urlformData = new FormData();
        urlformData.append("url", this.state.url); //posting url image to get id

        axios
          .post(
            `https://beta1.techbyheart.in/api/v1/forum/image-url/`,
            urlformData
          )
          .then((res) => {
            this.setState({ loader: true });

            const urldata = res.data.data.id;
            const array = this.fileObj[0];
            if (array != null) {
              const multiformData = new FormData();
              for (var i = 0; i < array.length; i++) {
                multiformData.append("image", array[i]);

                axios
                  .post(
                    `https://beta1.techbyheart.in/api/v1/forum/image/`,
                    multiformData,

                    {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                    }
                  )
                  .then((res) => {
                    console.log(res);
                    this.setState({ loader: true });

                    const newformData = new FormData();
                    newformData.append("title", this.state.title);
                    newformData.append("content", this.state.text);
                    newformData.append("video_url", this.state.video_url);
                    newformData.append("header_image_url", urldata);
                    newformData.append("images", res.data.data.id);
                    axios
                      .post(
                        `https://beta1.techbyheart.in/api/v1/forum/thread/create/5775bbe0-8214-4250-a524-5cf51e6a3880/`,
                        newformData
                      )
                      .then((res) => {
                        this.setState({ loader: true });

                        console.log(res, "result1");
                        this.props.history.push(
                          `/forum/thread/${res.data.data.id}`
                        );
                      })
                      .catch((error) => {
                        message.warning("Oops, Please try again later");
                      });
                  });
              }
            } else {
              const newformData = new FormData();
              newformData.append("title", this.state.title);
              newformData.append("content", this.state.text);
              newformData.append("video_url", this.state.video_url);
              newformData.append("header_image_url", urldata);
              axios
                .post(
                  `https://beta1.techbyheart.in/api/v1/forum/thread/create/5775bbe0-8214-4250-a524-5cf51e6a3880/`,
                  newformData
                )
                .then((res) => {
                  this.setState({ loader: true });

                  console.log(res, "result2");
                  this.props.history.push(`/forum/thread/${res.data.data.id}`);
                })
                .catch((error) => {
                  message.warning("Oops, Please try again later");
                });
            }
          });
      }
    }
  };
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
      header_image: event.target.files[0],
      posting: true,
    });
    if (event.target.files[0].size / 1024 > 2048) {
      message.info("Please choose file size less than 2MB");
    }
    console.log(event.target.files[0].size / 1024, "filesize");
  }
  resetFile(event) {
    event.preventDefault();
    this.setState({ file: null });
  }

  //Mutliple file upload and preview

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files);
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]));
    }
    this.setState({ fileArray: this.fileObj });
  }

  handleCKChange = (e, editor) => {
    const data = editor.getData();
    this.setState({ text: data });
    console.log(this.state.text, "richtexteditor");
  };

  render() {
    return (
      <div
        className="thread-create-rich"
        style={{ padding: "8em", height: "auto" }}
      >
        <LoadingOverlay
          active={this.state.loader}
          spinner={<SemipolarLoading color="#F05C2D" />}
          text="Creating your thread..."
        >
          <h3 style={{ color: "white", marginLeft: "10vh" }}>Create thread</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "Space-between",
              alignItems: "center",
            }}
          >
            <div
              className="thread-create-imagefield"
              style={{
                marginTop: "3em",
                width: "1015px",
                height: "398px",
                border: "1px dashed white",
                marginBottom: "50px",
                padding: "5vh",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {" "}
              <div className="thread-create-imagefield-firstdive">
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
              </div>
              <div className="rich-editor-header-image">
                <input
                  placeholder="Image URL"
                  className="thread-title-sml"
                  type="text"
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

                <label className="alt-img-btn">
                  <MdFileUpload />
                  Image from local
                  <input
                    style={{ display: "none" }}
                    className="thread-create-upload"
                    type="file"
                    name="header_image"
                    onChange={this.onChange}
                    required
                  />
                </label>
              </div>
            </div>
          </div>
          <form>
            <div className="rich-text-manage">
              {/* <p>{this.state.name}</p> */}
              <div>
                <div className="thread-title-container2">
                  <input
                    placeholder="Thread title"
                    className="thread-title"
                    onChange={this.handleChange}
                    name="title"
                    type="text"
                    required
                  ></input>
                  {/* <div className="forum-n-sub">
                    <select onChange={this.handleChange}>
                      <option value="0">Select Forum</option>
                      <option value="1">AUTOMOTO INDIA</option>
                      <option value="2">USERS THREADS</option>
                    </select>
                    <select onChange={this.handleChange}>
                      <option value="0">Select Subforum</option>
                      <option value="1">New arrivals</option>
                      <option value="2">Reviews</option>
                      <option value="3">USERS</option>
                    </select>
                  </div> */}
                  <input
                    className="thread-title"
                    placeholder="Video Link"
                    onChange={this.handleChange}
                    name="video_url"
                    type="link"
                  ></input>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CKEditor
                      editor={ClassicEditor}
                      onChange={this.handleCKChange}
                      onInit={(editor) => {}}
                      config={{
                        ckfinder: {
                          uploadUrl:
                            "https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json",
                        },
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                        marginTop: "12px",
                      }}
                    >
                      {(this.fileArray || []).map((url) => (
                        <img
                          className="uploaded-image-forum-multi"
                          src={url}
                          alt="..."
                        />
                      ))}
                    </div>
                    <label className="alt-img-btn">
                      Thread Image
                      <input
                        style={{ display: "none" }}
                        id="file-input"
                        type="file"
                        onChange={this.uploadMultipleFiles}
                        multiple
                      ></input>
                    </label>
                  </div>
                </div>
              </div>

              {/* {ReactHtmlParser(this.state.text)} */}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10vh",
              }}
            >
              <Link to="/forum">
                <button className="create-forum-button-cancel">Cancel</button>
              </Link>
              <button
                type="submit"
                onClick={this.state.title == null ? null : this.handleSubmit}
                className="create-forum-button"
              >
                CREATE THREAD
              </button>
            </div>
          </form>
        </LoadingOverlay>
      </div>
    );
  }
}
