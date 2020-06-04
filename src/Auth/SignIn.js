import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../actions/authActions";
import { Link } from "react-router-dom"


class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginErrors: "",
      phone: "",
    };
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.isAuthenticated) nextProps.history.push("/home");
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { phone } = this.state;
    localStorage.setItem("phoneNumber",phone)
    this.props.onSignIn({ phone });
    console.log(phone)
    
  };
  

  render() {
    return (
      <div className="signin">
        <div className="signin-logos">
          <img
            alt=""
            style={{ height: "15vh" }}
            src={require("../assets/automotologo.svg")}
          ></img>
          <div className="signin-logos-line">
            <img
              alt=""
              style={{ height: "7vh" }}
              src={require("../assets/moto365logo.svg")}
            ></img>
            <img
              alt=""
              style={{ height: "5.7vh" }}
              src={require("../assets/amlogo.svg")}
            ></img>
          </div>
        </div>
        <form className="login-form" onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            placeholder="Mobile Number"
            onChange={this.handleChange}
            required
          />

          <div className="login-btns">
            <button style={{width:"21.31vh",height:"5.90"}} className="signin-btn" type="submit" >
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: userData => {
      dispatch(signIn(userData));
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
