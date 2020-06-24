import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import AccMain from "./AccMain";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import axios from "axios";
import { message } from "antd";
import { FaRupeeSign } from "react-icons/fa";

class AccesoriesExpanded extends Component {
  state = {
    currentItem: null,
    services: [],
  };
  componentDidMount() {
    axios.get(`https://automoto.techbyheart.in/api/v1/product/`).then((res) => {
      const services = res.data;
      const currentItem = services.find(
        (x) => x.id == this.props.match.params.product
      );
      this.setState({ currentItem });
      console.log(currentItem);
      // console.log("imagecheck", currentItem.images[0].image);
    });
  }
  handleClick = (id) => {
    message.info("Added To The Cart");
    this.props.addToCart(id);
  };
  render() {
    return this.state.currentItem ? (
      <div
        className="accessories-moto"
        style={{
          paddingTop: "14vh",
          background:
            "linear-gradient(144.37deg, rgba(240, 92, 45, 0.08) 0%, rgba(255, 255, 255, 0) 60.15%), #121212",
        }}
      >
        {/* <Navbar /> */}
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="DETAILS">
            <div
              className="service-expanded"
              style={{ minHeight: "75vh", paddingBottom: "10vh" }}
            >
              <div className="height-define">
                <div className="accesories-main">
                  <img
                    alt=""
                    src={this.state.currentItem.image[0].image}
                  ></img>
                  <div className="accesories-carousel"></div>
                  <div className="accesories-detail"></div>
                </div>
                <div className="acc-main" style={{ width: "30%" }}>
                  <p
                    style={{
                      fontStyle: "underline",
                      color: "white",
                      fontWeight: "500",
                    }}
                  >
                    MOTO 365
                  </p>
                  <h2 style={{ color: "white" }}>
                    {this.state.currentItem.product}
                  </h2>
                  <p style={{ color: "white" }}>
                    Common mounting locations include the main crank pulley, the
                    flywheel, the camshaft or on the crankshaft itself. This
                    sensor is one of the two most important sensors in
                    modern-day engines, together with the camshaft position
                    sensor. As the fuel injection (diesel engines) or spark
                    ignition (petrol engines) is usually timed from the crank
                    sensor position signal, failing sensor will cause an engine
                    not to start, or will cut out while running. Engine speed
                    indicator takes speed indication also from this sensor.
                  </p>
                </div>
              </div>

              <div className="price">
                <div className="rs">
                  <h3>
                    <FaRupeeSign />
                    {this.state.currentItem.price}
                  </h3>
                  <h5 className="cost">incl.20% tax</h5>
                </div>

                <button
                  className="addtocart"
                  onClick={() => {
                    this.handleClick(this.state.currentItem.id);
                  }}
                  style={{
                    color: "white",
                    border: "none",
                    background: "transparent",
                    fontSize: "20px",
                    fontFamily: "Montserrat",
                  }}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccesoriesExpanded);
