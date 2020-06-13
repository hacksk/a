import React, { Component } from "react";
import { Tabs } from "antd";
import { Timeline } from "antd";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

export default class ForumClubHome extends Component {
  render() {
    return (
      <div className="clubhomemain" style={{ padding: "8em" }}>
        <Link to="/forum/create">
          <button className="forum-create">
            <FaPlus />
            CREATE EVENT
          </button>
        </Link>
        <div style={{ marginTop: "7em" }}>
          <h6 style={{ color: "white", fontFamily: "Montserrat" }}>
            UPCOMING CLUB EVENTS
          </h6>
          <div className="clubhome-posters">
            <div className="clubhome-image">
              <img src={require("../assets/poster1(1).jpg")}></img>
            </div>
            <div>
              <img src={require("../assets/poster1(2).jpg")}></img>
            </div>
            <div>
              <img src={require("../assets/poster1(4).jpg")}></img>
            </div>
            <div>
              <img src={require("../assets/poster1(3).jpg")}></img>
            </div>
          </div>
        </div>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="UPDATES" key="1">
            <Timeline>
              <Timeline.Item>
                <img
                  className="timeline-image"
                  src={require("./timelinebmw.jpg")}
                ></img>
              </Timeline.Item>
              <Timeline.Item>
                <div className="timeline-content">
                  <h6>My BMW M3 Road Trip</h6>
                  <p
                    style={{
                      color: " rgba(255, 255, 255, 0.6)",
                      fontFamily: "Montserrat",
                    }}
                  >
                    Big thanks to Devesh Gosavi for suggesting this vacation
                    spot
                  </p>
                  <div className="timeline-account-detail">
                    <Avatar icon={<UserOutlined />} />
                    <p style={{ color: "#FC5C2E" }}>bmwLover200</p>
                    <p style={{ color: "rgba(255, 255, 255, 0.38)" }}>
                      30 mins ago
                    </p>
                  </div>
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <div className="timeline-content">
                  <div className="timeline-content-images">
                    <img src={require("../assets/timelinebm1.jpg")}></img>
                    <img src={require("../assets/timelinebm2.jpg")}></img>
                    <img src={require("../assets/timelinebm3.jpg")}></img>
                  </div>
                  <div className="timeline-account-detail">
                    <Avatar icon={<UserOutlined />} />
                    <p style={{ color: "#FC5C2E" }}>bmwLover200</p>
                    <p style={{ color: "rgba(255, 255, 255, 0.38)" }}>
                      30 mins ago
                    </p>
                  </div>
                </div>
              </Timeline.Item>
            </Timeline>
          </TabPane>
          <TabPane tab="DISCUSSIONS" key="2">
            DISCUSSIONS
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
