import React, { Component } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import Accountupload from "./Account/PicturesWall";
import { API_URL } from "./actions/urlConfig";
import { notification } from "antd";
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
      dob: "",
      state: "",
      district: "",
      city: "",
      pincode: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      dob,
      state,
      city,
      pincode,
      district,
    } = this.state;
    axios
      .post(`http://103.194.69.70:8080/api/v1/customer/`, {
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
        photo: 1,
        name: name,
        age: age,
        gender: "male",
        phone: `+${phone}`,
        latitude: 23.0625,
        longitude: -98.677068,
        vehicle: [1],
        dob: dob,
        is_club_admin: "True",
        is_forum_admin: "False",
        class_type: "NORMAL",
      })
      .then((res) => {
        console.log(res);
        this.props.history.push("/signin");
      })
      .catch((er) => {
        console.log(er, "ERRORR");
        notification.open({
          message: "Sign Up Error",
          description: "There was an error in Signing up, Please Try again",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
      });
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
                  name="dob"
                  type="date"
                  onChange={this.handleChange}
                  placeholder="Date Of Birth (2020-10-18)"
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
