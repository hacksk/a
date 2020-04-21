import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.json";

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
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
    const { email, password } = this.state;

    axios
      .post(
        "https://jsonplaceholder.typicode.com/users",
        {
          user: {
            email: email,
            name: password
          }
        },
        { withCredentials: true }
      )
      .then(response => {
        console.log("sign in res",response)
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="signin">
        <div className="signin-logos">
          <img style={{height:"15vh"}} src={require("./assets/automotologo.svg")}></img>
          <div className="signin-logos-line">
          <img style={{height:"7vh"}} src={require("./assets/moto365logo.svg")}></img>
          <img style={{height:"5.7vh"}} src={require("./assets/amlogo.svg")}></img>

          </div>
        </div>
        <h5 htmlFor="email"></h5>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Phone Number"
            onChange={this.handleChange}
            required
          />
          <h5 htmlFor="email"></h5>

          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
            required
          />
          <div className="login-btns">
              <button className="signin-btn" type="submit">
                SIGN IN
              </button>
            <Link to="/signup">
              <button className="signup-btn" type="submit">
                SIGN UP
              </button>
            </Link>
            {/* <a className="forgot-signin">Forgot password ?</a> */}
          </div>
        </form>
      </div>
    );
  }
}
