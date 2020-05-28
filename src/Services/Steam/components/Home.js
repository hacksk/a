import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import "../../../index.css";
import { message, Button } from "antd";

const info = () => {
  message.info("Added To The Cart");
};

class Home extends Component {
  // handleClick = id => {
  //   this.props.addToCart(id);
  // };

  render() {
    let itemList = this.props.items.map(item => {
      return (
        <Link to={`/services/${item.id}`}>
          <div className="card" key={item.id}>
            <div type="primary" onClick={info} className="card-image">
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

    return (
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
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
