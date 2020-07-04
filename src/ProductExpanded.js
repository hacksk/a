import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
// import AccMain from "./AccMain";
import { connect } from "react-redux";
// import { addToCart } from "./actions/cartActions";
import axios from "axios";
import { message } from "antd";
import { FaRupeeSign } from "react-icons/fa";
import { SemipolarLoading } from "react-loadingg";

class AccesoriesExpanded extends Component {
  state = {
    currentProduct: null,
    products: [],
  };
  componentDidMount() {
    axios.get(`https://automoto.techbyheart.in/api/v1/product/`).then((res) => {
      const products = res.data;
      const currentProduct = products.find(
        (x) => x.id == this.props.match.params.product
      );
      this.setState({ currentProduct });
      console.log(currentProduct);
      // console.log("imagecheck", currentProduct.images[0].image);
    });
  }
  handleClick = (id) => {
    axios
      .post(`https://automoto.techbyheart.in/api/v1/cart/add_to_cart/`, {
        product: [
          {
            product: id,
            quantity: "2",
          },
        ],
      })
      .catch((error) => {
        console.log("cartadd", error);
      });
    message.info("Added To The Cart");
    // this.props.addToCart(id);
  };
  render() {
    return this.state.currentProduct ? (
      <div
        className="accessories-moto"
        style={{
          paddingTop: "14vh",
          background: "#121212",
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
                    src={this.state.currentProduct.image[0].image}
                  ></img>
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
                    {this.state.currentProduct.product}
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
                    {this.state.currentProduct.price}
                  </h3>
                  <h5 className="cost">incl.20% tax</h5>
                </div>

                <button
                  className="addtocart"
                  onClick={() => {
                    this.handleClick(this.state.currentProduct.id);
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
          <Tab eventKey="home1" title="SPECIFICATION">
            <div style={{ height: "80vh", background: "#121212" }}>specs</div>
          </Tab>
        </Tabs>
      </div>
    ) : (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "10vh",
          height: "100vh",
        }}
      >
        <SemipolarLoading color="#F05C2D" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  };
};

export default connect(mapStateToProps)(AccesoriesExpanded);
