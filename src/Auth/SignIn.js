import React, { Component } from "react";
import { connect } from "react-redux";
import { sendOtp } from "../actions/authActions";
import { Link } from "react-router-dom";
import axios from "axios"

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginErrors: "",
      phone: "",
    };
  }
  componentDidMount(){
      axios.get(`https://beta1.techbyheart.in/api/v1/customer`)
      .then((res)=>{
        console.log(res.data,"customerdata")
      })
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.userData != null && nextProps.userData.phone) {
      nextProps.history.push("/signin/verify");
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { phone } = this.state;
    this.props.sendOtp({ phone: `+91${phone}` });
  };

  render() {
    return (
      <div className="signin">
        <div className="signin-logos">
          <img
            className="signin-logo-head"
            alt=""
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
            placeholder="Mobile Number(+91)"
            onChange={this.handleChange}
            required
          ></input>

          <div className="login-btns">
            <button className="signin-btn" type="submit">
              SIGN IN
            </button>
            <Link to="/signup">
              <button className="signin-btn" >
                SIGN UP
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state.auth.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendOtp: (phone) => {
      dispatch(sendOtp(phone));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
