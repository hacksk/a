import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import BottomNavbar from "./BottomNavbar";
import Forumcontenttwo from "./Forum/ForumContentTwo";
// import moment from "moment";
import { Tabs } from "antd";
// import { DatePicker } from "antd";
import ForumTrending from "./Forum/ForumTrendingThread";
import Banner from "./Forum/Banner";
import axios from "axios";

const { TabPane } = Tabs;

function callback(key) {}

// const { RangePicker } = DatePicker;

// function range(start, end) {
//   const result = [];
//   for (let i = start; i < end; i++) {
//     result.push(i);
//   }
//   return result;
// }

// function disabledDate(current) {
//   // Can not select days before today and today
//   return current && current < moment().endOf("day");
// }

// function disabledDateTime() {
//   return {
//     disabledHours: () => range(0, 24).splice(4, 20),
//     disabledMinutes: () => range(30, 60),
//     disabledSeconds: () => [55, 56],
//   };
// }

// function disabledRangeTime(_, type) {
//   if (type === "start") {
//     return {
//       disabledHours: () => range(0, 60).splice(4, 20),
//       disabledMinutes: () => range(30, 60),
//       disabledSeconds: () => [55, 56]
//     };
//   }
//   return {
//     disabledHours: () => range(0, 60).splice(20, 4),
//     disabledMinutes: () => range(0, 31),
//     disabledSeconds: () => [55, 56]
//   };
// }

export default class Home extends Component {
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
        const persons = res.data.data.slice(1, 4);
        const subthread = res.data.data.slice(1, 4);
        this.setState({ persons });
        this.setState({ subthread });
      });
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="home">
        <div className="content-home">
          <div className="header-wrap">
            <div className="header">
              <Breadcrumb>
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
              </Breadcrumb>
              <img
                alt=""
                className="header-logo"
                src={require("./assets/moto365logo.svg")}
              ></img>
            </div>
          </div>
          <div className="news">
            <Carousel infiniteLoop="true" autoPlay="true">
              {this.state.persons.map((person) => (
                <Link to={`/forum/thread/${person.id}`}>
                  <Banner thread={person} />
                </Link>
              ))}
            </Carousel>
          </div>
          <div className="home-thread">
            <h6>THREADS</h6>
            <Link to="/forum">
              <button
                style={{ border: "none", background: "transparent" }}
                href="#seeall"
              >
                {" "}
                SEE ALL
              </button>
            </Link>
          </div>

          <div
            className="forum-threadtwo"
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "row",
              marginLeft: "0",
            }}
          >
            {this.state.subthread.map((person) => (
              <Link to={`/forum/thread/${person.id}`}>
                <Forumcontenttwo thread={person} />
              </Link>
            ))}
          </div>
          <div className="home-second">
            <div className="home-second-content-wrap">
              <div className="home-second-content">
                {/* <div className="home-second-part1"> */}
                {/* <h1
                    style={{
                      color: "white",
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontSize: "86px",
                      marginBottom: "0",
                    }}
                  >
                    35
                  </h1>
                  <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                    Days without service
                  </p>
                </div>
                <Link to="/services">
                  <button
                    className="hvr-float-shadow"
                    style={{
                      color: "black",
                      border: "none",
                      borderRadius: "8px",
                      backgroundImage:
                        " linear-gradient(105.62deg, #F05C2D 0%, #FCAA2E 120.94%)",
                      height: "34px",
                      width: "126px",
                      fontWeight: "900",
                      fontSize: "12px",
                    }}
                  >
                    SERVICE NOW
                  </button>
                </Link> */}
              </div>
              {/* <img alt="" src={require("./assets/timer-24px.svg")}/> */}
              {/* <div style={{ display: "flex", flexDirection: "column",justifyContent:"center",alignItems:"center" }}>
                  <p
                    style={{
                      color: "rgba(252, 170, 46, 0.87)",
                      cursor: "pointer",
                    }}
                  >
                    SET REMAINDER
                  </p>
                  <div>
                    <DatePicker
                      format="YYYY-MM-DD HH:mm:ss"
                      disabledDate={disabledDate}
                      disabledTime={disabledDateTime}
                      showTime={{
                        defaultValue: moment("00:00:00", "HH:mm:ss"),
                      }}
                    />
                  </div>
                <img
                  alt=""
                  style={{ width: "20em" }}
                  src={require("./assets/hyundai.png")}
                ></img>
              </div> */}
            </div>
          </div>

          <div className="home-content-wrap">
            <h5>FEATURED SERVICES</h5>
            <div className="head-icons">
              <Link to="/services">
                <figure>
                  <img
                    alt=""
                    src={require("./vector-icons/featured-services/steam.png")}
                  ></img>
                </figure>
              </Link>{" "}
              <Link to="/services">
                <figure>
                  <img
                    alt=""
                    src={require("./vector-icons/featured-services/ecuremapp.png")}
                  ></img>
                </figure>
              </Link>
              <Link to="/services">
                <figure>
                  <img
                    alt=""
                    src={require("./vector-icons/featured-services/connected.png")}
                  ></img>
                </figure>
              </Link>
              <Link to="/services">
                <figure>
                  <img
                    alt=""
                    src={require("./vector-icons/featured-services/ceramic.png")}
                  ></img>
                </figure>
              </Link>
            </div>
            <h5>RECOMMENDED SERVICES</h5>

            <div className="home-content">
              <Link to="/services">
                <div className="home-content-part1">
                  <img
                    alt=""
                    className="hvr-float-shadow"
                    src={require("./Services/Steam/images/serviceicons/service(1).png")}
                  ></img>
                  <img
                    alt=""
                    className="hvr-float-shadow"
                    src={require("./Services/Steam/images/serviceicons/service(2).png")}
                  ></img>
                  <img
                    alt=""
                    className="hvr-float-shadow"
                    src={require("./Services/Steam/images/serviceicons/service(4).png")}
                  ></img>
                  <img
                    alt=""
                    className="hvr-float-shadow"
                    src={require("./Services/Steam/images/serviceicons/service(20).png")}
                  ></img>
                  <img
                    alt=""
                    className="hvr-float-shadow"
                    src={require("./Services/Steam/images/serviceicons/service(22).png")}
                  ></img>
                  <img
                    alt=""
                    className="hvr-float-shadow"
                    src={require("./Services/Steam/images/serviceicons/service(35).png")}
                  ></img>
                  <img
                    alt=""
                    className="hvr-float-shadow"
                    src={require("./Services/Steam/images/serviceicons/service(40).png")}
                  ></img>
                  <img
                    alt=""
                    className="hvr-float-shadow"
                    src={require("./Services/Steam/images/serviceicons/service(42).png")}
                  ></img>
                </div>

                <button
                  style={{ border: "none", background: "transparent" }}
                  href="#explore"
                  className="explore-link "
                >
                  EXPLORE
                  <FaLongArrowAltRight />
                </button>
              </Link>
              <h5>RECOMMENDED ACCESSORIES</h5>
              <div className="home-content-part1">
                <img
                  alt=""
                  className="hvr-float-shadow"
                  src={require("./assets/products/products (1).png")}
                ></img>
                <img
                  alt=""
                  className="hvr-float-shadow"
                  src={require("./assets/products/products (2).png")}
                ></img>
                <img
                  alt=""
                  className="hvr-float-shadow"
                  src={require("./assets/products/products (3).png")}
                ></img>
                <img
                  alt=""
                  className="hvr-float-shadow"
                  src={require("./assets/products/products (4).png")}
                ></img>
                <img
                  alt=""
                  className="hvr-float-shadow"
                  src={require("./assets/products/products (5).png")}
                ></img>
                <img
                  alt=""
                  className="hvr-float-shadow"
                  src={require("./assets/products/products (6).png")}
                ></img>
                <img
                  alt=""
                  className="hvr-float-shadow"
                  src={require("./assets/products/products (7).png")}
                ></img>
                <img
                  alt=""
                  className="hvr-float-shadow"
                  src={require("./assets/products/products (8).png")}
                ></img>
              </div>
              <Link to="/products">
                <button
                  style={{ border: "none", backgroundColor: "transparent" }}
                  href="#explore"
                  className="explore-link "
                >
                  EXPLORE
                  <FaLongArrowAltRight />
                </button>
              </Link>
            </div>
          </div>

          {/* <div className="home-facebook">
          
        <div className="home-facebook-content">
              <h6>
                LIKE US ON FACEBOOK FOR FREE LOYALITY POINTS <AiFillLike />{" "}
              </h6>
            </div>
          </div>
          <div className="home-icons">
            <img alt="" src={require("./assets/automotologo.svg")}></img>
            <img alt="" src={require("./assets/moto365logo.svg")}></img>
            <img alt="" src={require("./assets/amlogo.svg")}></img>
            <img alt="" src={require("./assets/fortador.png")}></img>
            <img alt="" src={require("./assets/sonax.png")}></img>
          </div> */}
          <div
            className="forum-threads"
            style={{ padding: "10em", paddingTop: "0" }}
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
                      timethread={person.thread_date}
                    />
                  </Link>
                ))}
              </TabPane>
            </Tabs>
          </div>
        </div>

        <div className="footer">
          <div className="footer-primary">
            <div className="footer-sub">
              <ul>
                <li>
                  <a
                    href="#qiucklinks"
                    style={{ textDecoration: "underline", color: "white" }}
                  >
                    QUICK LINKS
                  </a>
                </li>
                <li>HOME</li>
                <li>ACCESSORIES</li>
                <li>SERVICES</li>
                <li>MAP</li>
              </ul>
            </div>
            <div className="footer-logo">
              <img alt="" src={require("./assets/automotologo.svg")} />
              <img alt="" src={require("./assets/moto365logo.svg")} />
              <img alt="" src={require("./assets/amlogo.svg")} />
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
        <BottomNavbar />
      </div>
    );
  }
}
