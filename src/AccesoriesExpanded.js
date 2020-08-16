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
    currentItem: null,
    services: [],
  };
  componentDidMount() {
    axios.get(`http://103.194.69.70:8080/api/v1/service/`).then((res) => {
      const services = res.data;
      console.log(services, "service");
      const currentItem = services.find(
        (x) => x.id == this.props.match.params.detail
      );
      this.setState({ currentItem });
      console.log(currentItem);
    });
  }
  handleClick = (id) => {
    axios
      .post(`http://103.194.69.70:8080/api/v1/cart/add_to_cart/`, {
        service: [
          {
            service: id,
          },
        ],
      })
      .catch((error) => {
        console.log("cartadd", error);
      });
    message.info("Added To The Cart");
  };
  render() {
    return this.state.currentItem ? (
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
                    src={this.state.currentItem.images[0].image}
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
                    {this.state.currentItem.name}
                  </h2>
                  <p style={{ color: "white" }}>
                    {this.state.currentItem.description}
                  </p>
                </div>
              </div>

              <div className="price">
                <div className="rs">
                  <h3>
                    <FaRupeeSign style={{ color: "white!important" }} />
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
