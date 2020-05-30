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
import moment from "moment";
import { Tabs } from "antd";
import { DatePicker } from "antd";
import ForumTrending from "./Forum/ForumTrendingThread";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

// const { RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf("day");
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56]
  };
}

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
  render() {
    return (
      <div className="home">
        <div className="content-home">
          <div className="header-wrap">
            <div className="header">
              <Breadcrumb>
                <Breadcrumb.Item active>Home</Breadcrumb.Item>
              </Breadcrumb>
              <img alt=""
                className="header-logo"
                src={require("./assets/moto365logo.svg")}
              ></img>
            </div>
          </div>
          <div className="home-thread">
            <h6>THREADS</h6>
            <Link to="/forum">
              <a href="#seeall"> SEE ALL</a>
            </Link>
          </div>
          <div
            className="forum-threadtwo"
            style={{
              padding: "5em",
              position: "relative",
              display: "flex",
              flexDirection: "row"
            }}
          >
            <Forumcontenttwo
              threadimagetwo="https://images.pexels.com/photos/257988/pexels-photo-257988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              threadheadtwo="BMW and the Kidney grille - Is a radical design change needed? "
              threadcontenttwo="BMW Kidney grilles - is an iconic grille design which has been .... "
            />
            <Forumcontenttwo
              threadimagetwo="https://images.pexels.com/photos/88628/pexels-photo-88628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              threadheadtwo="Long term ownership review - My Honda City VX CVT  "
              threadcontenttwo="First things first – let me eat that frog and address the elephant in the room - YES! I’m a big time.... "
            />
            <Forumcontenttwo
              threadimagetwo="https://images.pexels.com/photos/2091351/pexels-photo-2091351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              threadheadtwo="An impromptu planned trip to Jim Corbett  "
              threadcontenttwo="Hello all, I would like to thank the mods for accepting my membership request and this is my... "
            />
          </div>
          <div className="home-second">
            <div className="home-second-content-wrap">
              <div className="home-second-content">
                <div className="home-second-part1">
                  <h1
                    style={{
                      color: "white",
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      fontSize: "86px",
                      marginBottom: "0"
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
                      fontSize: "12px"
                    }}
                  >
                    SERVICE NOW
                  </button>
                </Link>
              </div>
              <div className="home-second-second">
                {/* <img alt="" src={require("./assets/timer-24px.svg")}/> */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      color: "rgba(252, 170, 46, 0.87)",
                      cursor: "pointer"
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
                        defaultValue: moment("00:00:00", "HH:mm:ss")
                      }}
                    />
                  </div>
                </div>
                <img alt=""
                  style={{ width: "20em" }}
                  src={require("./assets/hyundai.png")}
                ></img>
              </div>
            </div>
          </div>
          <div className="news">
            <Carousel infiniteLoop="true" autoPlay="true">
              <div>
                <img alt="" src={require("./assets/news banner 2.png")} />
                <div className="testcar">
                  <p style={{ color: "rgba(240, 92, 45, 0.08)" }}>NEWS</p>
                  <h3 style={{ color: "white" }}>
                    2020 BMW X5 M Competition review,
                    <br /> test drive
                  </h3>
                  <p style={{ color: "white", fontSize: "13px" }}>
                    We’ve driven the latest iteration of the BMW X5 M
                    Competition to find out what to expect
                    <br /> when this 625hp performance SUV arrives in the Indian
                    market.
                  </p>
                </div>
              </div>
              <div>
                <img alt="" src={require("./assets/Group 324.png")} />
                <div className="testcar">
                  <p style={{ color: "rgba(240, 92, 45, 0.08)" }}>NEWS</p>
                  <h3 style={{ color: "white" }}>
                    2020 BMW X5 M Competition review,
                    <br /> test drive
                  </h3>
                  <p style={{ color: "white", fontSize: "13px" }}>
                    We’ve driven the latest iteration of the BMW X5 M
                    Competition to find out what to expect
                    <br /> when this 625hp performance SUV arrives in the Indian
                    market.
                  </p>
                </div>
              </div>
              <div>
                <img alt="" src={require("./assets/Group 325.png")} />
                <div className="testcar">
                  <p style={{ color: "rgba(240, 92, 45, 0.08)" }}>NEWS</p>
                  <h3 style={{ color: "white" }}>
                    2020 BMW X5 M Competition review,
                    <br /> test drive
                  </h3>
                  <p style={{ color: "white", fontSize: "13px" }}>
                    We’ve driven the latest iteration of the BMW X5 M
                    Competition to find out what to expect
                    <br /> when this 625hp performance SUV arrives in the Indian
                    market.
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
          {/* <div className="home-icons-wrap">
            <h5
              style={{
                color: "white",
                paddingLeft: "4em",
                fontFamily: "Praktika",
              }}
            >
              FEATURED SERVICES
            </h5>
            <div className="head-icons">
              <figure>
                <img alt=""
                  src={require("./vector-icons/featured-services/steam.png")}
                ></img>
              </figure>
              <figure>
                <img alt=""
                  src={require("./vector-icons/featured-services/ecuremapp.png")}
                ></img>
              </figure>
              <figure>
                <img alt=""
                  src={require("./vector-icons/featured-services/connected.png")}
                ></img>
              </figure>
              <figure>
                <img alt=""
                  src={require("./vector-icons/featured-services/ceramic.png")}
                ></img>
              </figure>
            </div>
          </div> */}

          <div className="home-content-wrap">
            <h5>RECOMMENDED SERVICES</h5>
            <div className="home-content">
              <div className="home-content-part1">
                <img alt=""
                  className="hvr-float-shadow"
                  src={require("./Services/Steam/images/serviceicons/service(1).png")}
                ></img>
                <img alt=""
                  className="hvr-float-shadow"
                  src={require("./Services/Steam/images/serviceicons/service(2).png")}
                ></img>
                <img alt=""
                  className="hvr-float-shadow"
                  src={require("./Services/Steam/images/serviceicons/service(4).png")}
                ></img>
                <img alt=""
                  className="hvr-float-shadow"
                  src={require("./Services/Steam/images/serviceicons/service(20).png")}
                ></img>
                <img alt=""
                  className="hvr-float-shadow"
                  src={require("./Services/Steam/images/serviceicons/service(22).png")}
                ></img>
                <img alt=""
                  className="hvr-float-shadow"
                  src={require("./Services/Steam/images/serviceicons/service(35).png")}
                ></img>
                <img alt=""
                  className="hvr-float-shadow"
                  src={require("./Services/Steam/images/serviceicons/service(40).png")}
                ></img>
                <img alt=""
                  className="hvr-float-shadow"
                  src={require("./Services/Steam/images/serviceicons/service(42).png")}
                ></img>
              </div>
              <Link to="/services">
                <a href="#explore" className="explore-link hvr-pulse-grow">
                  EXPLORE
                  <FaLongArrowAltRight />
                </a>
              </Link>
              <h5>RECOMMENDED ACCESSORIES</h5>
              <div className="home-content-part2">
                <div className="home-accessories ">
                  <img alt="" src={require("./vector-icons/carphoneholder.png")} />
                  <p
                    style={{
                      color: "white",
                      paddingTop: "2em",
                      textAlign: "center",
                      fontFamily: "Montserrat",
                      fontWeight: "600",
                      fontSize: "14px"
                    }}
                  >
                    PHONE HOLDER
                  </p>
                </div>
                <div className="home-accessories ">
                  <img alt="" src={require("./vector-icons/wheelalloy.png")} />
                  <p
                    style={{
                      color: "white",
                      paddingTop: "2em",
                      textAlign: "center"
                    }}
                  >
                    RIMS 22"
                  </p>
                </div>
                <div className="home-accessories ">
                  <img alt="" src={require("./vector-icons/freshner.png")} />
                  <p
                    style={{
                      color: "white",
                      paddingTop: "2em",
                      textAlign: "center"
                    }}
                  >
                    AIR FRESHNER
                  </p>
                </div>
                <div className="home-accessories ">
                  <img alt="" src={require("./vector-icons/camera.png")} />
                  <p
                    style={{
                      color: "white",
                      paddingTop: "2em",
                      textAlign: "center"
                    }}
                  >
                    GPS
                  </p>
                </div>
                <div className="home-accessories ">
                  <img alt="" src={require("./vector-icons/tire.png")} />
                  <p
                    style={{
                      color: "white",
                      paddingTop: "2em",
                      textAlign: "center"
                    }}
                  >
                    TYRES
                  </p>
                </div>
                <div className="home-accessories ">
                  <img alt="" src={require("./vector-icons/camera.png")} />
                  <p
                    style={{
                      color: "white",
                      paddingTop: "2em",
                      textAlign: "center"
                    }}
                  >
                    GPS
                  </p>
                </div>
                <div className="home-accessories ">
                  <img alt="" src={require("./vector-icons/speaker.png")} />
                  <p
                    style={{
                      color: "white",
                      paddingTop: "2em",
                      textAlign: "center"
                    }}
                  >
                    5" SPEAKER
                  </p>
                </div>
                <div className="home-accessories ">
                  <img alt="" src={require("./vector-icons/wheelalloy.png")} />
                  <p
                    style={{
                      color: "white",
                      paddingTop: "2em",
                      textAlign: "center"
                    }}
                  >
                    RIMS 22"
                  </p>
                </div>
              </div>
              <a href="#explore" className="explore-link hvr-pulse-grow">
                EXPLORE
                <FaLongArrowAltRight />
              </a>
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
                <Link to="/forum/thread">
                  <ForumTrending
                    threadprof="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                    trendinghead=" Why you must practice the 'Idling Rule' with Turbo-Charged Cars"
                    trendingcontent="Small displacement turbocharged engines are getting increasingly popular on our roads. With tougher emission norms & fuel-economy concerns worldwide, the trend is only expected to grow. Nearly every diesel car in the market is turbocharged now. Turbo-petrols will also be commonplace soon.  "
                    timethread="3 mins ago"
                  />
                </Link>
                <Link to="/forum/thread">
                  <ForumTrending
                    threadprof="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    trendinghead="Best Practices : Maintain your Car in Top Shape"
                    trendingcontent="There are no shortcuts to maintaining a car well and the exercise does require a little effort. But I can assure you, every rupee & minute spent on your car's upkeep will be recovered through a superior driving, owning & resale experience. A well-kept car will serve you better and prove more reliable in the long run. A healthy car is a safer car too. You'll retain it longer, thus saving you big bucks in depreciation losses. Whatever way you look at it, there's tremendous return-on-investment in keeping your car tidy. "
                    timethread="2 hours ago"
                  />
                </Link>
                <Link to="/forum/thread">
                  <ForumTrending
                    threadprof="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    trendinghead="Pictorial Guide: How to change a flat tyre!"
                    trendingcontent=" In the case of a flat tyre which needs immediate replacing to avoid damage to the tyre/tube, here is what you need to do. "
                    timethread="02/04/2020"
                  />
                </Link>
                <Link to="/forum/thread">
                  <ForumTrending
                    threadprof="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    trendinghead="'My Car Won't Start' | What To Do"
                    trendingcontent="A driver's worst nightmare is that time when his car won't start. Or, the engine dies exactly when he is negotiating a tricky crossing. It's even more worrisome if the driver is a lady (especially in India) and the sun has already set, or if the location is a lonely highway instead of the city. This is the time when one regrets not knowing a little more about how cars work.  "
                    timethread="21/03/2020"
                  />
                </Link>
              </TabPane>
            </Tabs>
          </div>
        </div>

        <div className="footer">
          <div className="footer-primary">
            <div className="footer-sub">
              <ul>
                <li>
                  <a href="#qiucklinks" style={{ textDecoration: "underline", color: "white" }}>
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
              style={{ color: "rgba(255, 255, 255, 0.87)" }}
            >
              SITE BY TECHBYHEART
            </a>
          </div>
        </div>
        <BottomNavbar />
      </div>
    );
  }
}
