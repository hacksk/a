import React, { Component } from "react";
// import AccCarousel from "./AccCarousel";
import axios from "axios";
import { message } from "antd";
import { FaRupeeSign } from "react-icons/fa";



class AccMain extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios
      .get(`https://automoto.techbyheart.in/api/v1/customer/`, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk5MzA5MjcyLCJqdGkiOiI0MjkzZjE3ZGY1OWQ0ZWJhOGFhMmRhNWZlMjBiNTg3YyIsInVzZXJfaWQiOjIsInVzZXIiOnsiaWQiOjIsImxhc3RfbG9naW4iOm51bGwsImVtYWlsIjoidmlzaG51dXJAdGVjaGJ5aGVhcnQuaW4iLCJmaXJzdF9uYW1lIjoiIiwibGFzdF9uYW1lIjoiIiwidXNlcm5hbWUiOiJ2aXNobnU2MjgyIiwicGhvbmUiOiIrOTE2MjgyNDQzNzY0IiwiZGF0ZV9qb2luZWQiOiIyMDIwLTA1LTI2VDA1OjI0OjU0Ljc3MDAwMFoiLCJncm91cHMiOltdLCJ1c2VyX3Blcm1pc3Npb25zIjpbXX19.CzUtlZseJ6iDwvPyaCZ1UqzH_NwVsVN_jy1cVIL5-1Y"
        }
      })
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      });
  }

  handleClick = id => {
    message.info("Added To The Cart");
    this.props.addToCartFunction(id);
  };
 
  

  render() {
    return (
      <div style={{position:"relative"}}>
        <div className="height-define">
          <div className="accesories-main">
          <img alt="" src={this.props.item.img}></img>
            <div className="accesories-carousel">
              {/* <AccCarousel /> */}
            </div>
            <div className="accesories-detail"></div>
          </div>
          <div className="acc-main" style={{ width: "30%" }}>
            <p style={{fontStyle:"underline",color:"white",fontWeight:"500"}}>MOTO 365</p>
            <h2 style={{ color: "white" }}>{this.props.item.title}</h2>
            <p style={{ color: "white" }}>
             {this.props.item.desc}
            </p>
          </div>
        </div>

        <div className="price">
          <div className="rs">
            <h3><FaRupeeSign />{this.props.item.price}</h3>
            <h5 className="cost">
              incl.20% tax 
            </h5>
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
              fontSize:"20px",
              fontFamily:"Montserrat"
              
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default AccMain;
