import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadProductToCart } from "../../../actions/cartActions";
import "../../../index.css";
import { Spin, Space } from "antd";

class ProductHome extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.loadProductToCart();
  }

  render() {
    let items = this.props.items;
    let itemList = [];
    if (items != null)
      itemList = items.map((item, index) => {
        return (
          <Link key={index} to={`/products/${item.id}`}>
            <div className="card" style={{marginTop:"20vh"}} key={item.id}>
              <div type="primary" className="card-image">
                <img src={item.img} alt={item.title} />
                {/* <span className="card-title">{item.title}</span> */}
                {/* <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span> */}
              </div>

              <div className="card-content">
                {/* <p>{item.desc}</p> */}
                <p style={{ color: "white" }}>
                  <b>Price: {item.price}$</b>
                </p>
              </div>
            </div>
          </Link>
        );
      });

    return itemList.length === 0 ? (
      <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10vh",
            height:"100vh"
          }}
        >
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
    ) : (
      <div className="container">
        <div style={{ paddingBottom: "7em" }} className="box">
          {itemList}
        </div>
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
    loadProductToCart: () => {
      dispatch(loadProductToCart());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductHome);
