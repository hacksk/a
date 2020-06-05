import axios from "axios";

export const LOAD_ITEMS = "LOAD_ITEMS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SUB_QUANTITY = "SUB_QUANTITY";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const ADD_SHIPPING = "ADD_SHIPPING";

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
//Load product to cart
export const loadProductToCart = () => dispatch => {
  try {
    return axios.get(`${APP_URL}/product/`).then(res => {
      let itemList = res.data.map(item => {
        console.log("hello");

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
        {
          service: [
            {
              service: id
            }
          ]
        },
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
    console.log("here");
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
