import React, { Component } from "react";
import { Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import EmployeeRewards from "./EmployeeRewards"
import EmployeeGeneral from "./EmployeeGeneral";
const { TabPane } = Tabs;

export default class EmployeeSettings extends Component {
  render() {
    return (
      <div className="employeesettings">
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                <AppleOutlined />
                GENERAL
              </span>
            }
            key="1"
          >
            <EmployeeGeneral/>
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                ATTENDANCE
              </span>
            }
            key="2"
          >
            SDFSD
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                REWARDS
              </span>
            }
            key="3"
          >
            <EmployeeRewards/>
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                ABOUT
              </span>
            }
            key="4"
          >
           <div className="accnt-help">
                <h5>Automoto Version 1.0</h5>
                <a>Terms and Conditions</a>
                <a>Privacy Policy</a>

                
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
