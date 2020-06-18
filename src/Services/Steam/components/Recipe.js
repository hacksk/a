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

  handleChecked = (e) => {
    if (e.target.checked) {
      this.props.addShipping();
    } else {
      this.props.substractShipping();
    }
  };

  render() {
    return (
      <div
        className="cart-price"
      >
        <div style={{ display: "none" }} className="collection">
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
              borderRadius: "8px",
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(98.86deg, #F05C2D 8.02%, #FCAA2E 96.06%)",
              color: "black",
              height: "5vh",
              width: "15vh",
              fontWeight: "600",
              position:"absolute",
              fontFamily:"Montserrat",
              right:"2em"
            }}
          >
            CHECKOUT
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.cart.addedItems,
    total: state.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShipping: () => {
      dispatch({ type: "ADD_SHIPPING" });
    },
    substractShipping: () => {
      dispatch({ type: "SUB_SHIPPING" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
