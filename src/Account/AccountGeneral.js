import React, { Component } from "react";
import Accountupload from "./PicturesWall";
import { connect } from "react-redux";
import axios from "axios";
import AccountCustomer from "./AccountCustomer";
import { Spin, Space } from "antd";
import PersonalDetails from "./EditAccount/PersonalDetails";

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
            <PersonalDetails />
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
              <img
                alt=""
                style={{ width: "40vh", borderRadius: "8px", marginTop: "1em" }}
                src={this.state.person.photo.image}
              ></img>
              <Accountupload thread={this.state.person} />
            </div>
          </div>
        </div>
        <div className="prof-detail">
          <div className="prof-head">
            <h5>Vehicle Details</h5>
            <AccountCustomer />
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
      </div>
    ) : (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "10vh",
          height: "100vh",
        }}
      >
        <Space size="middle">
          <Spin size="large" />
        </Space>
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

export default connect(mapStateToProps, {})(AccountGeneral);
