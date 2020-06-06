import React, { Component } from "react";
import Accountupload from "./PicturesWall";
import axios from "axios";

class AccountGeneral extends Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
    };

    axios
      .post(
        `http://159.89.165.118:4000/api/v1/customer/`,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk4OTQ4MjQ5LCJqdGkiOiI1OTIzODU5MzgzM2Y0Y2RhYTY5ZThlMGZkNzAzOWRmMiIsInVzZXJfaWQiOjMsInVzZXIiOnsiaWQiOjMsImxhc3RfbG9naW4iOiIyMDIwLTAzLTE2VDA2OjQ5OjMwWiIsImVtYWlsIjoidmlzaG51NjI4MkB5YW5kZXguY29tIiwiZmlyc3RfbmFtZSI6InZpc2hudSIsImxhc3RfbmFtZSI6InVyIiwidXNlcm5hbWUiOiJ2aXNobnU2MjgyIiwicGhvbmUiOiIrOTE2MjgyNDQzNzY0IiwiZGF0ZV9qb2luZWQiOiIyMDIwLTAzLTE2VDA2OjUwOjA3Ljg3ODUxN1oiLCJncm91cHMiOltdLCJ1c2VyX3Blcm1pc3Npb25zIjpbNjBdfX0.emvq3LRVCGrcsKLMI2aHpkgWMHnfNT3tULkOQ9Ijl4Q ",
          },
        },
        { user }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  render() {
    return (
      <div style={{paddingBottom:"5em"}} className="accnt-gnrl">
        <div className="prof-detail">
          <h5>Profile Details</h5>
          <div className="table">
            <table className="table-content">
              <td>
                <tr>Name</tr>
                <tr>DOB</tr>
                <tr>Address</tr>
                <tr>Phone</tr>
              </td>
              <td>
                <tr>John Doe</tr>
                <tr>15/01/1985 </tr>
                <tr>
                  House Name, House no 123 Lane,Landmark, Place,District,State
                  Pin 612345
                </tr>
                <tr>+91 987654321</tr>
              </td>
              <td>
                <tr>
                  <a href="#accnt" className="edit-accnt">Edit</a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">Edit</a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">Edit</a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">Edit</a>
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
          <div className="table">
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
                  <a href="#accnt" className="edit-accnt">Edit</a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">Edit</a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">Edit</a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">Edit</a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">Edit</a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">Edit</a>
                </tr>
                <tr>
                  <a href="#accnt" className="edit-accnt">Edit</a>
                </tr>
              </td>
            </table>
          </div>
        </div>
        <div className="prof-detail">
          <h5>Vehicle Details</h5>
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
                  <a href="#accnt" className="edit-accnt">Edit</a>
                </tr>
              </td>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountGeneral;
