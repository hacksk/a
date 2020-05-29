import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, loadToCart } from "./actions/cartActions";
import "../../../index.css";
import { message } from "antd";

const info = () => {
  message.info("Added To The Cart");
};

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
      <div style={{ color: "red" }}>Loading</div>
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
    items: state.items
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
