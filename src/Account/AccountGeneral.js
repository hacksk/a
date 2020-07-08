import React, { Component } from "react";
import Accountupload from "./PicturesWall";
import { connect } from "react-redux";
import axios from "axios";
import AccountCustomer from "./AccountCustomer";
import PersonalDetails from "./EditAccount/PersonalDetails";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "../actions/authActions";
import { SemipolarLoading } from "react-loadingg";

class AccountGeneral extends Component {
  state = {
    person: null,
    vehicle: null,
    personimage: "",
  };

  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/customer/`)
      .then((res) => {
        const persons = res.data;
        console.log("data", persons);
        const person = persons.find((x) => x.user.id == this.props.userData.id);
        this.setState({ person });
      });
  }
  render() {
    return this.state.person != null ? (
      <div style={{ paddingBottom: "5em" }} className="accnt-gnrl">
        <div className="prof-detail">
          <div className="prof-head">
            <h5>Profile Details</h5>
            <PersonalDetails details={this.state.person} />
          </div>
          <div className="table">
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                flexDirection: "row",
                marginTop: "2em",
              }}
              className="table-content"
            >
              <div style={{ color: "white", lineHeight: "20px" }}>
                <li>Name</li>
                <li>DOB</li>
                {/* <li>Address</li> */}
                {/* <br /> */}
                <li>Phone</li>
                <li>Age</li>
              </div>
              <div style={{ color: "white", marginLeft: "4em" }}>
                <li>{this.state.person.name}</li>

                <li>{this.state.person.dob} </li>
                {/* <li>{this.state.address.address_line1}</li>
                <li>{this.state.address.address_line2}</li> */}
                <li>{this.state.person.phone}</li>
                <li>{this.state.person.age}</li>
              </div>
            </ul>
            <div className="accnt-upload">
              <img alt="" src={this.state.person.photo.image}></img>
              <Accountupload thread={this.state.person} />
            </div>
          </div>
        </div>
        <div className="prof-detail">
          <div className="prof-head">
            <h5>Vehicle Details</h5>
            {/* <AccountCustomer /> */}
          </div>
        </div>
        {/* <div className="prof-detail">
          <h5>Language Preferance</h5>
          <div className="table">
            <ul style={{ listStyleType: "none",display:"flex",flexDirection:"row" }} className="table-content">
              <li>Language</li>

              <li>English(United States)</li>
            </ul>
          </div>
        </div> */}
        <div className="mobile-signout">
          {this.props.isAuthenticated ? (
            <li>
              <h6>Sign Out</h6>
              <button onClick={this.props.signOut}>
                <FiLogOut />
              </button>
            </li>
          ) : null}
        </div>
      </div>
    ) : (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <SemipolarLoading color="#F05C2D" />
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
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountGeneral);
