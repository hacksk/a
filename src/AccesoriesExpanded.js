import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import AccMain from "./AccMain";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { addToCart } from "./Services/Steam/components/actions/cartActions";

import Breadcrumb from "react-bootstrap/Breadcrumb";

class AccesoriesExpanded extends Component {
  render() {
    let currentItem = this.props.items.find(
      x => x.id == this.props.match.params.detail
    );
    return (
      <div className="accessories-moto" style={{ paddingTop: "14vh" }}>
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
    items: state.items
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
