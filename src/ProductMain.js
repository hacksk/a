import React, { Component } from "react";
// import AccCarousel from "./AccCarousel";
import axios from "axios";
import { message } from "antd";
import { FaRupeeSign } from "react-icons/fa";

class ProductMain extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/customer/`)
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  handleClick = (id) => {
    message.info("Added To The Cart");
    this.props.addToCartFunction(id);
  };

  render() {
    return (
      <div
        className="service-expanded"
        style={{
          position: "relative",
          minHeight: "75vh",
          paddingBottom: "10vh",
        }}
      >
        <div className="height-define">
          <div className="accesories-main">
            <img alt="" src={this.props.item.img}></img>
            <div className="accesories-carousel">{/* <AccCarousel /> */}</div>
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
            <h2 style={{ color: "white" }}>{this.props.item.title}</h2>
            <p style={{ color: "white" }}>
              In sit sit et qui sunt et labore Lorem consectetur ex adipisicing
              nulla elit. Anim eiusmod aute qui magna sunt consequat esse id
              eiusmod sunt ad commodo. Nisi cupidatat irure magna adipisicing
              incididunt laboris labore anim exercitation quis irure. Cillum
              pariatur labore deserunt quis tempor exercitation sunt laboris et
              commodo do laborum exercitation labore. Deserunt consequat velit
              mollit sunt.
            </p>
          </div>
        </div>

        <div className="price">
          <div className="rs">
            <h3>
              <FaRupeeSign />
              {this.props.item.price}
            </h3>
            <h5 className="cost">incl.20% tax</h5>
          </div>

          <button
            className="addtocart"
            onClick={() => {
              this.handleClick(this.props.item.id);
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
    );
  }
}

export default ProductMain;
