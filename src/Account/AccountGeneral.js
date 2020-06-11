import React, { Component } from "react";
import Accountupload from "./PicturesWall";
import { connect } from "react-redux";
import axios from "axios";
import AccountCustomer from "./AccountCustomer";

class AccountGeneral extends Component {
  state = {
    person: null,
  };

  componentDidMount() {
    axios.get(`https://automoto.techbyheart.in/api/v1/customer`).then((res) => {
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
          <h5>Profile Details</h5>
          <div className="table">
            <table className="table-content">
              <td>
                <tr>Name</tr>
                <tr>DOB</tr>
                {/* <tr>Address</tr> */}
                {/* <br /> */}
                <tr>Phone</tr>
                <tr>Age</tr>
              </td>
              <td>
                <tr>{this.state.person.name}</tr>

                <tr>{this.state.person.dob} </tr>
                {/* <tr>{this.state.address.address_line1}</tr>
                <tr>{this.state.address.address_line2}</tr> */}
                <tr>{this.state.person.phone}</tr>
              <tr>{this.state.person.age}</tr>
              </td>
              <td>
                <tr>
                  <a href="#accnt" className="edit-accnt">
                    Edit
                  </a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">
                    Edit
                  </a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">
                    Edit
                  </a>
                </tr>
                {/* <br/> */}
                <tr>
                  <a href="#accnt" className="edit-accnt">
                    Edit
                  </a>
                </tr>
              </td>
            </table>
            <div className="accnt-upload">
              <Accountupload />
            </div>
          </div>
        </div>
        <div className="prof-detail">
          <h5>Vehicle Details</h5>
          {/* <div className="table">
            <table className="table-content">
              <td>
                <tr>Brand</tr>
                <tr>Model</tr>
                <tr>Year</tr>
                <tr>Registration Number</tr>
                <tr>Chasis Number</tr>
                <tr>Engine Number</tr>
                <tr>Fuel Type</tr>
              </td>
              <td>
                <tr>SUZUKI</tr>
                <tr>BREZZA ZXI</tr>
                <tr>2019</tr>
                <tr>KL AW 1022</tr>
                <tr>2H2XA59BWDY987665</tr>
                <tr>52WVC10338</tr>
                <tr>Petrol</tr>
              </td>
              <td>
                <tr>
                  <a href="#accnt" className="edit-accnt">
                    Edit
                  </a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">
                    Edit
                  </a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">
                    Edit
                  </a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">
                    Edit
                  </a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">
                    Edit
                  </a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">
                    Edit
                  </a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">
                    Edit
                  </a>
                </tr>
              </td>
            </table> */}
          {/* </div> */}
          <AccountCustomer/>
        </div>
        <div className="prof-detail">
          <h5>Language Preferance</h5>
          <div className="table">
            <table className="table-content">
              <td>
                <tr>Language</tr>
              </td>
              <td>
                <tr>English(United States)</tr>
              </td>
              <td>
                <tr>
                  <a href="#accnt" className="edit-accnt">
                    Edit
                  </a>
                </tr>
              </td>
            </table>
          </div>
        </div>
      </div>
    ) : (
      <div>Loadin...</div>
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
