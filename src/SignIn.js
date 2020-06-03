import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "./actions/authActions";

 class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: ""
    };
  }

  // static getDerivedStateFromProps(nextProps) {
  //   if (nextProps.isAuthenticated) nextProps.history.push("/account");
   
  // }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { phone } = this.state;
    this.props.onSignIn({ phone });
  };




  render() {
    return (
      <div className="signin">
        <div className="signin-logos">
          <img alt="" style={{height:"15vh"}} src={require("./assets/automotologo.svg")}></img>
          <div className="signin-logos-line">
          <img alt="" style={{height:"7vh"}} src={require("./assets/moto365logo.svg")}></img>
          <img alt="" style={{height:"5.7vh"}} src={require("./assets/amlogo.svg")}></img>

          </div>
        </div>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            placeholder="Phone Number"
            onChange={this.handleChange}
            required
          />

          
          <div className="login-btns">
              <button className="signin-btn" type="submit">
                SIGN IN
              </button>
          </div>
        </form>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     isAuthenticated: state.auth.isAuthenticated
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: userData => {
      dispatch(signIn(userData));
    }
  };
};

export default connect(mapDispatchToProps)(SignIn);