import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { FaRupeeSign } from "react-icons/fa";

// import { render } from 'enzyme';

// import { addShipping } from './actions/cartActions'
const publishableKey = 'pk_test_UAHsd0FgK8CJC6PXgoZ6cIeO00y9JJDBn5';

const onToken = token => {
  const body = {
    amount: '',
    token: token
  };
  axios
    .post('http://localhost:8000/payment', body)
    .then(response => {
      console.log(response);
      alert('Payment Success');
    })
    .catch(error => {
      console.log('Payment Error: ', error);
      alert('Payment Error');
    });
};

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
              <span>Shipping(+6<FaRupeeSign />)</span>
            </label>
          </li>
          <li className="collection-item">
            <b>
              Total: {this.props.total} <FaRupeeSign />
            </b>
          </li>
        </div>
        <div className="checkout">
          <StripeCheckout
            className="waves-effect waves-light btn"
            label="Buy Now" //Component button text
            name="Auto Moto" //Modal Header
            description="Upgrade to a premium account today."
            panelLabel="Buy " //Submit button in modal
            amount={this.props.total * 100}
            currency={'INR'}
            token={onToken}
            stripeKey={publishableKey}
            shippingAddress={false}
            billingAddress={false}
            livemode={true}
            allowRememberMe={true}
          />{' '}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShipping: () => {
      dispatch({ type: 'ADD_SHIPPING' });
    },
    substractShipping: () => {
      dispatch({ type: 'SUB_SHIPPING' });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
