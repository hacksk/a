import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loadToCart } from "../../../actions/cartActions";
import "../../../index.css";
import { Spin, Space } from "antd";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadToCart();
  }

  render() {
    let items = this.props.items;
    let itemList = [];
    if (items != null)
      itemList = items.map(item => {
        return (
          <Link to={`/services/${item.id}`}>
            <div className="card" key={item.id}>
              <div type="primary" className="card-image">
                <img src={item.img} alt={item.title} />
                {/* <span className="card-title">{item.title}</span> */}
                {/* <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span> */}
              </div>

              <div className="card-content">
                {/* <p>{item.desc}</p> */}
                <p>
                  <b>Price: {item.price}$</b>
                </p>
              </div>
            </div>
          </Link>
        );
      });

    return itemList.length == 0 ? (
      <Space size="middle">
        <Spin size="large" />
      </Space>
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
    loadToCart: () => {
      dispatch(loadToCart());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
