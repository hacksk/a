import React, { Component } from "react";

class AccountSecurity extends Component {
  render() {
    return (
      <div className="accnt-scrty">
        <h6>Password Change</h6>
        <input placeholder="current password"></input>
        <input type="password" placeholder="new password"></input>
        <input type="password" placeholder="confirm password"></input>
        <div className="button-security">
          <button>CHANGE PASSWORD</button>
        </div>
        <h6>Email Address</h6>
        <table>
          <td>
            <tr>johndoe123@gmail.com</tr>
          </td>
          <td>
            <tr>
              <a className="edit-accnt" style={{ paddingLeft: "1em" }}>
                Edit
              </a>
            </tr>
          </td>
        </table>
      </div>
    );
  }
}

export default AccountSecurity;
