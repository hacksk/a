import {
  LOAD_ITEMS,
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING
} from "./action-types/cart-actions";
import axios from "axios";

const APP_URL = "https://automoto.techbyheart.in/api/v1";

//load items to cart
export const loadToCart = () => dispatch => {
  try {
    return axios.get(`${APP_URL}/service/`).then(res => {
      let itemList = res.data.map(item => {
        return {
          id: item.id,
          title: item.name,
          desc: item.description,
          price: item.price,
          img: item.images[0].image
        };
      });

      dispatch({
        type: LOAD_ITEMS,
        itemList
      });
    });
  } catch (e) {
    console.log(e);
  }
};
//add cart action
export const addToCart = id => (dispatch, getState) => {
  let currentState = getState();
  try {
    return axios
      .post(
        `${APP_URL}/cart/add_to_cart/`,
        { id: id },
        {
          headers: {
            Authorization: `Bearer ${currentState.userToken}`
          }
        }
      )
      .then(res => {
        console.log(res);
        dispatch({
          type: ADD_TO_CART,
          id
        });
      });
  } catch (e) {
    console.log(e);
  }
};

//remove item action
export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};
//subtract qt action
export const subtractQuantity = id => {
  return {
    type: SUB_QUANTITY,
    id
  };
};
//add qt action
export const addQuantity = id => {
  return {
    type: ADD_QUANTITY,
    id
  };
};
