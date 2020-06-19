import React, { Component } from "react";
import Forumcontentone from "./ForumContentOne";
import Forumcontenttwo from "./ForumContentTwo";
import { Tabs } from "antd";
import ForumTrending from "./ForumTrendingThread";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdCopyright } from "react-icons/md";
import Moment from "react-moment";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default class ForumHome extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      subthread: [],
    };
  }

  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/forum/latest-threads/`)
      .then((res) => {
        const persons = res.data.data.slice(0, 3);
        const subthread = res.data.data.slice(3, 6);
        // console.log(persons);
        // console.log("sliced", persons);
        this.setState({ persons });
        this.setState({ subthread });
      });
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div style={{ position: "relative" }}>
        <div className="forum-home" style={{ paddingBottom: "60vh" }}>
          <div
            className="forum-home-link-forum"
            style={{
              padding: "10em",
              paddingBottom: "0",
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "5em",
            }}
          >
            <Link to="/forum/forumlist">
              <button className="forum-service-now">FORUM LIST</button>
            </Link>
          </div>

          {/* <div
          className="forum-home-firstpart"
          style={{
            display: "flex",
            flexDirection: "row",
            height: "80vh",
            padding: "5em",
            paddingTop: "0",
            justifyContent: "space-between",
          }}
        >
          <div
            className="forum-home-service"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "SpaceAround",
              }}
            >
              <h1
                style={{
                  color: "white",
                  fontStyle: "italic",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                  fontSize: "80px",
                  marginBottom: "0",
                }}
              >
                35
              </h1>
              <h6
                style={{ color: "rgba(255, 255, 255, 0.6)", fontWeight: "600" }}
              >
                Days without service
                {this.state.title}
              </h6>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/services">
                <button className="forum-service-now">SERVICE NOW</button>
              </Link>
            </div>
          </div>
          <div className="forum-head-image" style={{ position: "relative" }}>
            <img
              alt="imageexample"
              style={{ width: "40em", borderRadius: "10px" }}
              src="https://images.pexels.com/photos/119435/pexels-photo-119435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            ></img>
            <h3
              style={{
                position: "absolute",
                top: "2.3em",
                fontWeight: "900",
                fontFamily: "Montserrat",
                paddingLeft: "2em",
                color: "white",
              }}
            >
              1 year with a jeep <br />
              compass
            </h3>
          </div>
          <a href="#seeall" className="seeall-forum">
            SEE ALL
          </a>
        </div> */}

          <div
            className="forum-threadtwo"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              marginLeft: "2em",
              marginRight: "0",
            }}
          >
            {this.state.subthread.map((person) => (
              <Link to={`/forum/thread/${person.id}`}>
                {" "}
                <Forumcontenttwo thread={person} />
              </Link>
            ))}

            <Link to="/forum/forumthreadlist">
              <button
                style={{ border: "none", background: "transparent" }}
                href="#seeall"
                className="seeall-forum"
              >
                SEE ALL
              </button>
            </Link>
          </div>
          <div
            className="forumcontentone"
            style={{
              paddingTop: "4em",
              paddingBottom: "4em",
              position: "relative",
              borderTop: "2px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            {this.state.persons.map((person) => (
              <Link to={`/forum/thread/${person.id}`}>
                <Forumcontentone thread={person} />
              </Link>
            ))}
            <Link to="/forum/forumthreadlist">
              <button
                style={{ border: "none", background: "transparent" }}
                href="#seeall"
                className="seeall-forum"
              >
                SEE ALL
              </button>
            </Link>
          </div>

          <div
            className="forum-threads"
            style={{
              paddingTop: "0",
              borderTop: "2px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <Tabs defaultActiveKey="2" onChange={callback}>
              <TabPane tab="LATEST" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="TRENDING" key="2">
                {this.state.persons.map((person) => (
                  <Link to={`/forum/thread/${person.id}`}>
                    <ForumTrending
                      threadprof="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      trendinghead={person.title}
                      trendingcontent={person.content}
                      timethread={<Moment fromNow>{person.date}</Moment>}
                    />
                  </Link>
                ))}
              </TabPane>
            </Tabs>
          </div>
        </div>
        <div className="footer" style={{ position: "absolute", bottom: "0" }}>
          <div className="footer-primary">
            <div className="footer-sub">
              <ul>
                <h6 style={{ color: "white" }}>QUICK LINKS</h6>

                <li>HOME</li>
                <li>ACCESSORIES</li>
                <li>SERVICES</li>
                <li>MAP</li>
              </ul>
            </div>
            <div className="footer-logo">
              <img alt="" src={require("../assets/automotologo.svg")} />
              <img alt="" src={require("../assets/moto365logo.svg")} />
              <img alt="" src={require("../assets/amlogo.svg")} />
            </div>
          </div>
          <div className="footer-secondary">
            <p style={{ color: "rgba(255, 255, 255, 0.87)" }}>
              <MdCopyright /> 2020 AUTOMOTO. ALL RIGHT RECEIVED
            </p>
            <br />
            <a
              href="https://www.techbyheart.in/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255, 255, 255, 0.87)",
                overflow: "visible",
              }}
            >
              POWERED BY TECHBYHEART
            </a>
          </div>
        </div>
      </div>
    );
  }
}
