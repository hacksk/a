import React, { Component } from "react";
import { Steps, Popover } from "antd";
import { GiSpanner } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { Tabs, Select } from "antd";
import JobCard from "./JobCard";

const { TabPane } = Tabs;
const { Option } = Select;

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

export default class EmployeeHome extends Component {
  state = {
    tabPosition: "top"
  };

  changeTabPosition = tabPosition => {
    this.setState({ tabPosition });
  };
  render() {
    return (
      <div className="emplyhome">
        <div className="employee-jobcard">
          <div>
            <Tabs tabPosition={"left"}>
              <TabPane tab="JOB CARD 01" key="1">
                <JobCard
                  jobid="JOB ID 01"
                  service="Ceramic Coating"
                  service2="Car Washing"
                  service3="Tire Alignment"
                  vehiclemake="2006"
                  vehiclemodel="Swift"
                  vehcilebrand="Suzuki"
                  fueltype="petrol"
                  name="Shamu Kumar"
                  phone="1234567890"
                />
              </TabPane>
              <TabPane tab="JOB CARD 02" key="2">
                <JobCard
                  jobid="JOB ID 02"
                  service="Ceramic Coating"
                  service2="Car Washing"
                  service3="Tire Alignment"
                  vehiclemake="2006"
                  vehiclemodel="Swift"
                  vehcilebrand="Suzuki"
                  fueltype="petrol"
                  name="Shamu Kumar"
                  phone="1234567890"
                />
              </TabPane>
              <TabPane tab="JOB CARD 03" key="3">
                <JobCard
                  jobid="JOB ID 03"
                  service="Ceramic Coating"
                  service2="Car Washing"
                  service3="Tire Alignment"
                  vehiclemake="2006"
                  vehiclemodel="Swift"
                  vehcilebrand="Suzuki"
                  fueltype="petrol"
                  name="Shamu Kumar"
                  phone="1234567890"
                />
              </TabPane>
            </Tabs>
            <div className="emplyhome-firstsection">
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
        </div>
      </div>
    );
  }
}
