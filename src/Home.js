import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
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
import Moment from "react-moment";
import SearchBar from "./Components/SearchBar";

const { TabPane } = Tabs;

function callback(key) {}

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      subthread: [],
      services: [],
      products: [],
    };
  }
  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/forum/latest-threads/`)
      .then((res) => {
        const persons = res.data.data.slice(0, 3);
        const subthread = res.data.data.slice(1, 4);
        this.setState({ persons, subthread });
      });
    axios.get(`https://automoto.techbyheart.in/api/v1/service`).then((res) => {
      const services = res.data;
      this.setState({ services });
    });
    axios.get(`https://automoto.techbyheart.in/api/v1/product`).then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  }
  render() {
    return (
      <div className="home">
        <div className="content-home">
          <div className="search-bar-wrap">
            <SearchBar />
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
              <div className="home-content-part1">
                {this.state.services.map((service) => (
                  <Link to={`/services/${service.id}`}>
                    <img
                      alt=""
                      className="hvr-float-shadow"
                      src={service.images[0].image}
                    ></img>
                  </Link>
                ))}
              </div>
              <Link to="/services">
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
                {this.state.products.map((product) => (
                  <Link to={`/products/${product.id}`}>
                    <img
                      alt=""
                      className="hvr-float-shadow"
                      src={product.image[0].image}
                    ></img>
                  </Link>
                ))}
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
                {this.state.subthread.map((person) => (
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

        <div className="footer">
          <div className="footer-primary">
            <div className="footer-sub">
              <ul>
                <h6 style={{ color: "white" }}>QUICK LINKS</h6>
                <Link to="/">
                  <li>HOME</li>
                </Link>
                <Link to="/products">
                  <li>ACCESSORIES</li>
                </Link>
                <Link to="/services">
                  <li>SERVICES</li>
                </Link>
                <Link to="/map">
                  <li>MAP</li>
                </Link>
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
