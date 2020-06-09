import React, { Component } from "react";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Accountupload from "./Account/PicturesWall";
import { API_URL } from "./actions/urlConfig";

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      username: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { first_name, last_name, email, username, phone } = this.state;
    axios
      .post(`${API_URL}/customer/`, {
        user_data: {
          email: email,
          first_name: first_name,
          last_name: last_name,
          username: username,
          phone: phone,
          is_active: "True",
          date_joined: "2020-09-18"
        },
        address: {
          address_line1: "rrrr",
          address_line2: "lllnnngl",
          address_line3: "ggg",
          state: "kerala",
          district: "kozhikode",
          city: "kozhikode",
          pin_code: "678964"
        },
        photo: 1,
        name: "dsa",
        age: "21",
        gender: "male",
        phone: phone,
        latitude: 23.0625,
        longitude: -98.677068,
        vehicle: 1,
        dob: "1990-09-09"
      })
      .then(res => {
        console.log("sign up res", res);
        console.log(res.data);
      })
      .catch(error => {
        console.log("registration error", error.response.data);
      });
  }

  render() {
    const handleOnDragStart = e => e.preventDefault();

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
                  placeholder="First Name"
                />
                <input
                  name="last_name"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Last Name"
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
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Phone"
                />
              </div>
              <div className="forms-signup" onDragStart={handleOnDragStart}>
                <h1>UPLOAD PICTURE</h1>

                <Accountupload />
              </div>
              <div className="forms-signup" onDragStart={handleOnDragStart}>
                <h1>VEHICLE DETAILS</h1>

                <input
                  name="first_name"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="First Name"
                />
                <input
                  name="last_name"
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Last Name"
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
                  type="text"
                  onChange={this.handleChange}
                  placeholder="Phone"
                />
                <button
                  style={{
                    color: "black",
                    background: "grey",
                    marginTop: "2em",
                    borderRadius: "8px",
                    height: "6vh"
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
