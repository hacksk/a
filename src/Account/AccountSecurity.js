import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class AccountSecurity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      user: "",
      email: "",
      show: "block",
      change: "none",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(`https://automoto.techbyheart.in/api/v1/customer/`).then((res) => {
      const persons = res.data;
      const person = persons.find((x) => x.user.id === this.props.userData.id);
      this.setState({ person });
      const user = person.user;
      this.setState({ user });
      console.log(this.state.person)
      // console.log(this.state.user)
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onButtonClick = (event) => {
    event.preventDefault();
    console.log(event);
    this.setState({ show: "none" });
    this.setState({ change: "block" });
  };

  handleSubmit(event) {
    event.preventDefault();
    const { email } = this.state;
    axios
      .patch(
        `https://automoto.techbyheart.in/api/v1/customer/${this.state.person.id}/`,
        {
          first_name: "hello@gmail.com",
        }
      )
      .then((res) => {
        console.log("email", res.data.user);
      });
  }
  render() {
    return (
      <div className="accnt-scrty">
        <h6>Email</h6>
        {/*
        <input placeholder="current password"></input>
        <input type="password" placeholder="new password"></input>
        <input type="password" placeholder="confirm password"></input>
        <div className="button-security">
          <button>CHANGE PASSWORD</button>
        </div>
        <h6>Email Address</h6> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <form onSubmit={this.handleSubmit}>
            <p style={{ color: "white", display: this.state.show }}>
              {this.state.user.email}
            </p>
            <input
              name="email"
              style={{ display: this.state.change }}
              placeholder="Edit"
              onChange={this.handleChange}
            ></input>

            {/* <button
              onClick={this.onButtonClick}
              className="edit-accnt"
              style={{
                border: "none",
                backgroundColor: "transparent",
                paddingLeft: "1em",
                display: this.state.show,
              }}
            >
              Edit
            </button> */}
            {/* <button type="submit" className="edit-mail-sbmt">
              Submit
            </button> */}
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    userData: state.auth.userData,
  };
};

export default connect(mapStateToProps)(AccountSecurity);
