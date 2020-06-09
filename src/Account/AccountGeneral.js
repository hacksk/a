import React, { Component } from "react";
import Accountupload from "./PicturesWall";
import axios from "axios";

class AccountGeneral extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://automoto.techbyheart.in/api/v1/customer`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
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
              { this.state.persons.map(person =>

                <tr>{person.name}</tr>
                )}
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
