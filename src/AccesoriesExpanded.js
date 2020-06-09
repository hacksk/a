import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import AccMain from "./AccMain";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

class AccesoriesExpanded extends Component {
  render() {
    let currentItem = this.props.items.find(
      x => x.id === this.props.match.params.detail
    );
    return (
      <div
        className="accessories-moto"
        style={{
          paddingTop: "14vh",
          background:
            "linear-gradient(144.37deg, rgba(240, 92, 45, 0.08) 0%, rgba(255, 255, 255, 0) 60.15%), #121212"
        }}
      >
        {/* <Navbar /> */}
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="DETAILS">
            <AccMain
              item={currentItem}
              addToCartFunction={this.props.addToCart}
            />
          </Tab>
          <Tab eventKey="profile" title="SPECS">
            <h3>lorem ipsum</h3>
          </Tab>
          <Tab eventKey="contact" title="DEMO">
            <h4>yjrhgfmjhgk jvkhjhgk, gljkh</h4>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccesoriesExpanded);
