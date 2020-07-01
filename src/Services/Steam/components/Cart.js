import React, { Component } from "react";
import { connect } from "react-redux";
import { FaRupeeSign } from "react-icons/fa";
import { Alert } from "antd";
import axios from "axios"
import {
  removeItem,
  addQuantity,
  subtractQuantity,
  loadAddedItems,
} from "../../../actions/cartActions";
import Recipe from "./Recipe";
class Cart extends Component {
  //to remove the item completely
  // handleRemove = (id) => {
  //   this.props.removeItem(id);
  // };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };

  componentDidMount() {
    this.props.loadAddedItems();
    console.log(loadAddedItems)
  }

  static getDerivedStateFromProps(nextProps) {
    if (!nextProps.isAuthenticated) {
      nextProps.history.push("/signIn");
    }
  }

  render() {
    let addedItems =
      this.props.addedItems != null ? (
        this.props.addedItems.map((item) => {
          // console.log(item);
          return (
            <li className="collection-item avatar" key={item.id}>
              <div className="item-img">
                <img src={item.img} alt={item.img} className="" />
              </div>

              <div className="item-desc">
                <span className="title">{item.title}</span>
                {/* <p>{item.desc}</p> */}
                <p>
                  <b>
                    Price: {item.price}
                    <FaRupeeSign />
                  </b>
                </p>
                {/* <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p> */}
                {/* <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                        </div> */}
                {/* <button
                  className="waves-effect waves-light btn pink remove"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), linear-gradient(98.86deg, #F05C2D 8.02%, #FCAA2E 96.06%)",
                  }}
                  onClick={(e) => {
                    axios
                      .delete("https://automoto.techbyheart.in/api/v1/cart/delete_item/",
                      {
                        service:`${item.id}`,
                      }
                      )
                      .then((res) => {
                        console.log(res.data);
                      })
                      .catch((e) => console.log(e));
                  }}
                >
                   Remove
                </button> */}
              </div>
            </li>
          );
        })
      ) : (
        <p style={{ fontWeight: "bold" }}>You Have Selected Nothing.</p>
      );
    return (
      <div
        style={{ paddingTop: "6em", paddingBottom: "5em" }}
        className="container"
      >
        <div className="cart">
          <h5>You have selected:</h5>
          <ul style={{ paddingLeft: "1em" }} className="collection">
            {addedItems}
          </ul>
        </div>
        {this.props.isAuthenticated ? (
          <Recipe />
        ) : (
          <div>
            <Alert
              message="Warning"
              description="Please Sign in to Checkout"
              type="warning"
              showIcon
              closable
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addedItems: state.cart.addedItems,
    isAuthenticated: state.auth.isAuthenticated,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadAddedItems: () => {
      dispatch(loadAddedItems());
    },
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
