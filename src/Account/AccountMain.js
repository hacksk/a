import React, { Component } from "react";
import { Tabs } from "antd";
import Accountgeneral from "./AccountGeneral";
import Accountsecurity from "./AccountSecurity";
import Accounthelp from "./AccountHelp";
import Navbar from "../Navbar";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class AccountMain extends Component {
  render() {
    return (
      <div>
        {/* <h1>Status: {this.props.loggedInStatus}</h1> */}
        <h2 className="account-head" style={{ color: "white",paddingLeft:"6em",paddingTop:"4em"}}>ACCOUNT</h2>
        <div className="account-main">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="GENERAL" key="1">
              <Accountgeneral />
            </TabPane>
            <TabPane tab="SECURTY AND PRIVACY" key="2">
              <Accountsecurity/>
            </TabPane>
            <TabPane tab="HELP AND ABOUT" key="3">
              <Accounthelp/>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default AccountMain;
