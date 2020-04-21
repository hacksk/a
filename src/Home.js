import React, { Component } from "react";
import Navbar from "./Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { MdCopyright } from "react-icons/md";
import Navbarnew from "./NavbarNew";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import BottomNavbar from "./BottomNavbar";

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
              <img
                className="header-logo"
                src={require("./assets/moto365logo.svg")}
              ></img>
            </div>
          </div>
          <div className="banner">
            <Carousel infiniteLoop="true" autoPlay="true">
              <div>
                <img src={require("./assets/Rectangle 227.png")} />
                <h1 className="carousel-subhead">CAR DETAILING OFFER</h1>
                <h1 className="carousel-head">USE CODE 'MOTO365'</h1>
              </div>
              <div>
                <img src={require("./assets/Rectangle 228.png")} />
                <h1 className="carousel-head1">SPECIAL OFFERS</h1>
              </div>
            </Carousel>
          </div>
          <div className="home-second">
            <div className="home-second-content-wrap">
              <div className="home-second-content">
                <div className="home-second-part1">
                  <h1
                    style={{
                      color: "white",
                      fontFamily: "Montserrat",
                      fontStyle: "italic",
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
              </div>
              <div className="home-second-second">
                {/* <img src={require("./assets/timer-24px.svg")}/> */}
                <p
                  style={{
                    color: "rgba(252, 170, 46, 0.87)",
                    cursor: "pointer"
                  }}
                >
                  SET REMAINDER
                </p>
                <img
                  style={{ width: "20em" }}
                  src={require("./assets/hyundai.png")}
                ></img>
              </div>
            </div>
          </div>
          <div className="home-icons-wrap">
            <h5
              style={{
                color: "white",
                paddingLeft: "4em",
                fontFamily: "Praktika"
              }}
            >
              FEATURED SERVICES
            </h5>
            <div className="head-icons">
              <figure>
                <img
                  src={require("./vector-icons/featured-services/steam.png")}
                ></img>
              </figure>
              <figure>
                <img
                  src={require("./vector-icons/featured-services/ecuremapp.png")}
                ></img>
              </figure>
              <figure>
                <img
                  src={require("./vector-icons/featured-services/connected.png")}
                ></img>
              </figure>
              <figure>
                <img
                  src={require("./vector-icons/featured-services/ceramic.png")}
                ></img>
              </figure>
            </div>
          </div>

          <div className="home-content-wrap">
            <h5>RECOMMENDED SERVICES</h5>
            <div className="home-content">
              <div className="home-content-part1">
                <img
                  className="hvr-float-shadow"
                  src={require("./vector-icons/steam service cards/Group 65steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("./vector-icons/steam service cards/Group 82steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("./vector-icons/steam service cards/Group 84steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("./vector-icons/steam service cards/Group 85steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("./vector-icons/steam service cards/Group 86steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("./vector-icons/steam service cards/Group 87steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("./vector-icons/steam service cards/Group 88steam.svg")}
                ></img>
                <img
                  className="hvr-float-shadow"
                  src={require("./vector-icons/steam service cards/Group 89steam.svg")}
                ></img>
              </div>
              <a className="explore-link hvr-pulse-grow">
                EXPLORE
                <FaLongArrowAltRight />
              </a>
              <h5>RECOMMENDED ACCESSORIES</h5>
              <div className="home-content-part2">
                <div className="home-accessories hvr-float-shadow">
                  <img src={require("./vector-icons/carphoneholder.png")} />
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
                <div className="home-accessories hvr-float-shadow">
                  <img src={require("./vector-icons/wheelalloy.png")} />
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
                <div className="home-accessories hvr-float-shadow">
                  <img src={require("./vector-icons/freshner.png")} />
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
                <div className="home-accessories hvr-float-shadow">
                  <img src={require("./vector-icons/camera.png")} />
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
                <div className="home-accessories hvr-float-shadow">
                  <img src={require("./vector-icons/tire.png")} />
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
                <div className="home-accessories hvr-float-shadow">
                  <img src={require("./vector-icons/camera.png")} />
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
                <div className="home-accessories hvr-float-shadow">
                  <img src={require("./vector-icons/speaker.png")} />
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
                <div className="home-accessories hvr-float-shadow">
                  <img src={require("./vector-icons/wheelalloy.png")} />
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
              <a className="explore-link hvr-pulse-grow">
                EXPLORE
                <FaLongArrowAltRight />
              </a>
            </div>
          </div>
          <div className="news">
            <Carousel infiniteLoop="true" autoPlay="true">
              <div>
                <img src={require("./assets/news banner 2.png")} />
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
                <img src={require("./assets/Group 324.png")} />
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
                <img src={require("./assets/Group 325.png")} />
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
          <div className="home-facebook">
            <div className="home-facebook-content">
              <h6>
                LIKE US ON FACEBOOK FOR FREE LOYALITY POINTS <AiFillLike />{" "}
              </h6>
            </div>
          </div>
          <div className="home-icons">
            <img src={require("./assets/automotologo.svg")}></img>
            <img src={require("./assets/moto365logo.svg")}></img>
            <img src={require("./assets/amlogo.svg")}></img>
            <img src={require("./assets/fortador.png")}></img>
            <img src={require("./assets/sonax.png")}></img>
          </div>
        </div>

        <div className="footer">
          <div className="footer-primary">
            <div className="footer-sub">
              <ul>
                <li>
                  <a style={{ textDecoration: "underline" }}>QUICK LINKS</a>
                </li>
                <li>HOME</li>
                <li>ACCESSORIES</li>
                <li>SERVICES</li>
                <li>MAP</li>
              </ul>
            </div>
            <div className="footer-logo">
              <img src={require("./assets/automotologo.svg")} />
              <img src={require("./assets/moto365logo.svg")} />
              <img src={require("./assets/amlogo.svg")} />
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
              style={{ color: "rgba(255, 255, 255, 0.87)" }}
            >
              SITE BY TECHBYHEART
            </a>
          </div>
        </div>
        <BottomNavbar/>
      </div>
    );
  }
}
