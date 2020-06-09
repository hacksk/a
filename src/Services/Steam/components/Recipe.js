import React, { Component } from "react";
import { connect } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";

// import { render } from 'enzyme';

// import { addShipping } from './actions/cartActions'

// const onToken = token => {
//   const body = {
//     amount: "",
//     token: token
//   };
// };

class Recipe extends Component {
  componentWillUnmount() {
    if (this.refs.shipping.checked) this.props.substractShipping();
  }

  handleChecked = e => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  render() {
    return (
      <div className="container">
        <div className="collection">
          <li className="collection-item">
            <label>
              <input
                type="checkbox"
                ref="shipping"
                onChange={this.handleChecked}
              />
              <span>
                Shipping(+6
                <FaRupeeSign />)
              </span>
            </label>
          </li>
          <li className="collection-item">
            <b>
              Total: {this.props.total} <FaRupeeSign />
            </b>
          </li>
        </div>
        <Link to="/bill/payment">
          <button
            style={{
              border: "none",
              borderRadius: "3px",
              background: "#ff6600",
              color: "white",
              height: "5vh",
              width: "15vh",
              fontWeight: "bold"
            }}
          >
            Buy Now
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.cart.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
