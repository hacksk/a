import React, { Component } from 'react'

export default class EmployeeGeneral extends Component {
    render() {
        return (
            <div className="accnt-gnrl">
        <div className="prof-detail">
          <h5>Profile Details</h5>
          <div className="table">
            <table className="table-content">
              <td>
                <tr>Name</tr>
                <tr>DOB</tr>
                <tr>Address</tr>
                <tr>Phone</tr>
                <tr>Bank ACC</tr>
                <tr>Bank IFSC</tr>
              </td>
              <td>
                <tr>John Doe</tr>
                <tr>15/01/1985 </tr>
                <tr>
                  House Name, House no 123 Lane,Landmark, Place,District,State
                  Pin 612345
                </tr>
                <tr>+91 987654321</tr>
                <tr>1234567890111</tr>
                <tr>4562348492</tr>
              </td>
              <td>
                <tr>
                  <a className="edit-accnt">Edit</a>
                </tr>
                <tr>
                  <a className="edit-accnt">Edit</a>
                </tr>
                <tr>
                  <a className="edit-accnt">Edit</a>
                </tr>
                <tr>
                  <a className="edit-accnt">Edit</a>
                </tr>
                <tr>
                  <a className="edit-accnt">Edit</a>
                </tr>
                <tr>
                  <a className="edit-accnt">Edit</a>
                </tr>
              </td>
            </table>
          </div>
        </div>
        <div className="prof-detail">
          <h5>Job Details</h5>
          <div className="table">
            <table className="table-content">
              <td>
                <tr>Join Date</tr>
              </td>
              <td>
                <tr>10/10/2020</tr>
              </td>
              <td>
                <tr>
                  <a className="edit-accnt">Edit</a>
                </tr>
              </td>
            </table>
          </div>
        </div>
        <div className="prof-detail">
          <h5>Preference</h5>
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
                  <a className="edit-accnt">Edit</a>
                </tr>
              </td>
            </table>
          </div>
        </div>
      </div>
        )
    }
}
