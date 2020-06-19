import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ProductMain from "./ProductMain";
import { connect } from "react-redux";
import { addProductToCart } from "./actions/cartActions";

class ProductExpanded extends Component {
  render() {
    let currentPItem = this.props.items.find(
      x => x.id == this.props.match.params.product
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
            <ProductMain
              item={currentPItem}
              addProductToCartFunction={this.props.addProductToCart}
            />
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
    addProductToCart: id => {
      dispatch(addProductToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductExpanded);
