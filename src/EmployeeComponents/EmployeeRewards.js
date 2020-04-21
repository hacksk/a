import React, { Component } from "react";
import { Steps, Popover } from "antd";
import { GiSpanner } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { Tabs, Select } from "antd";

const { Step } = Steps;

const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);

export default class EmployeeRewards extends Component {
  state = {
    tabPosition: "top"
  };

  changeTabPosition = tabPosition => {
    this.setState({ tabPosition });
  };
  render() {
    return (
      <div>
        <div className="emplyhome-firstsectiontab">
          <div className="status-employee">
            <div className="employee-status">
              <GiSpanner />
              <Steps current={1} progressDot={customDot}>
                <Step />
                <Step />
                <Step />
                <Step />
              </Steps>
            </div>
            <div className="employee-status">
              <FaDollarSign />
              <Steps current={3} progressDot={customDot}>
                <Step />
                <Step />
                <Step />
                <Step />
              </Steps>
            </div>
            <div className="employee-status">
              <IoMdHappy />
              <Steps current={2} progressDot={customDot}>
                <Step />
                <Step />
                <Step />
                <Step />
              </Steps>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
