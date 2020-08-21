import React, { Component } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import Accountupload from "./Account/PicturesWall";
import { API_URL } from "./actions/urlConfig";
import { notification, message } from "antd";
import { MdFileUpload } from "react-icons/md";
// import { DatePicker } from "antd";

// const { RangePicker } = DatePicker;

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      username: "",
      date_joined: "",
      name: "",
      age: "",
      address_line1: "",
      address_line2: "",
      state: "",
      district: "",
      city: "",
      pincode: "",
      file: [null],
      profile_image: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name, "name");
    console.log(event.target.value, "value");
  }

  handleSubmit(event) {
    event.preventDefault();

    if (
      this.state.first_name === "" ||
      this.state.email === "" ||
      this.state.phone === "" ||
      this.state.username === "" ||
      this.state.name === "" ||
      this.state.age === ""
    ) {
      notification.open({
        message: "Sign Up Error",
        description: "Fill in all the fields",
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    } else {
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
          this.setState({ imageid });

          const {
            first_name,
            last_name,
            email,
            username,
            phone,
            date_joined,
            name,
            age,
            address_line1,
            address_line2,
            state,
            city,
            pincode,
            district,
          } = this.state;
          axios
            .post(`https://beta1.techbyheart.in/api/v1/customer/`, {
              user_data: {
                email: email,
                first_name: first_name,
                last_name: "er",
                username: username,
                phone: `+${phone}`,
                is_active: "True",
                date_joined: "2020-09-18",
              },
              address: {
                address_line1: "rrrr",
                address_line2: "lllnnngl",
                address_line3: "ggg",
                state: "kerala",
                district: "kozhikode",
                city: "kozhikode",
                pin_code: "678964",
              },
              photo: imageid,
              name: name,
              age: age,
              gender: "male",
              phone: `+${phone}`,
              latitude: 23.0625,
              longitude: -98.677068,
              vehicle: [1],
              is_club_admin: "True",
              is_forum_admin: "False",
              class_type: "NORMAL",
            })
            .then((res) => {
              console.log(res);
              this.props.history.push("/signin");
            })
            .catch((er) => {
              console.log(er.data, "ERRORR");
              notification.open({
                message: "Sign Up Error",
                description: "This Phone number or Username already exists",
                onClick: () => {
                  console.log("Notification Clicked!");
                },
              });
            });
        });
    }
  }
  onChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
      profile_image: event.target.files[0],
      posting: true,
    });
    if (event.target.files[0].size / 1024 > 2048) {
      message.info("Please choose file size less than 2MB");
    }
    console.log(event.target.files[0].size / 1024, "filesize");
  }

  render() {
    const handleOnDragStart = (e) => e.preventDefault();

    return (
      <div className="signup">
        <div className="signupform">
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={this.handleSubmit}
          >
            <AliceCarousel
              mouseTrackingEnabled
              autoPlay={false}
              disableAutoPlayOnAction={true}
              infinite={false}
            >
              <div className="forms-signup" onDragStart={handleOnDragStart}>
                <h1>PROFILE DETAILS</h1>

                <input
                  name="first_name"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Name"
                />

                <input
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  placeholder="Email"
                />
                <input
                  name="username"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Username"
                />
                <input
                  name="phone"
                  type="number"
                  onChange={this.handleChange}
                  placeholder="+91xxxxxxxx"
                />
              </div>
              <div className="forms-signup">
                <h1>PROFILE PHOTO</h1>

                <img
                  alt=""
                  className="uploaded-image-forum"
                  src={this.state.file}
                />
                <label className="alt-img-btn">
                  <MdFileUpload />
                  Image from local
                  <input
                    style={{ display: "none" }}
                    className="thread-create-upload"
                    type="file"
                    name="header_image"
                    onChange={this.onChange}
                  />
                </label>
              </div>
              {/* <div className="forms-signup" onDragStart={handleOnDragStart}>
                <h1>UPLOAD PICTURE</h1>

                <Accountupload />
              </div> */}
              <div className="forms-signup" onDragStart={handleOnDragStart}>
                <h1>PROFILE DETAILS</h1>

                <input
                  name="name"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Full Name"
                />

                <input
                  name="age"
                  type="number"
                  onChange={this.handleChange}
                  placeholder="Age"
                />
                <button
                  className="signin-btn"
                  type="submit"
                  style={{
                    color: "black",
                    background:
                      "linear-gradient(108.01deg, #F05C2D 0%, #FCAA2E 120.94%)",
                    marginTop: "2em",
                    borderRadius: "8px",
                    height: "6vh",
                    border: "none",
                    width: "15vh",
                  }}
                >
                  Submit
                </button>
              </div>
            </AliceCarousel>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
