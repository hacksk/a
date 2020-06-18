import axios from "axios";
import { API_URL } from "./urlConfig";
import { SET_ERRORS } from "./commonActionType";

export const LOAD_ALL_ITEMS = "LOAD_ALL_ITEMS";
export const LOAD_ADDED_ITEMS = "LOAD_ADDED_ITEMS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SUB_QUANTITY = "SUB_QUANTITY";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const ADD_SHIPPING = "ADD_SHIPPING";
// export const LOAD_FORUM = "LOAD_FORUM";

// // load items to forum thread
// export const loadToForum = () => dispatch => {
//   try {
//     return axios.get(`${APP_URL}/forum/subforum-thread-list/1/`).then(res => {
//       let itemList = res.data.map(item => {
//         return {
//           title: item.data.title,
//           content: item.data.content,
//           image: item.data.header_image,

//         };
//       });

//       dispatch({
//         type: LOAD_FORUM,
//         itemList
//       });
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

//load items to cart
export const loadAllItems = () => dispatch => {
  try {
    return axios.get(`${API_URL}/service/`).then(res => {
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
        type: LOAD_ALL_ITEMS,
        itemList
      });
    });
  } catch (e) {
    // console.log(e);
  }
};

//load items to cart
export const loadAddedItems = () => dispatch => {
  try {
    return axios.get(`${API_URL}/cart/`).then(res => {
      let itemList = res.data[0].service.map(item => {
        return {
          id: item.service.id,
          title: item.service.name,
          desc: item.service.description,
          price: item.service.price,
          img: item.service.images[0].image
        };
      });

      dispatch({
        type: LOAD_ADDED_ITEMS,
        itemList
      });
    });
  } catch (e) {
    // console.log(e);
  }
};


//Load product to cart
export const loadProductToCart = () => dispatch => {
  try {
    return axios.get(`${API_URL}/product/`).then(res => {
      let itemList = res.data.map(item => {
        // console.log("itemList");

        return {
          id: item.id,
          title: item.product,
          desc: item.mfg_date,
          price: item.price,
          img: item.image[0].image
        };
      });

      dispatch({
        type: LOAD_ALL_ITEMS,
        itemList
      });
    });
  } catch (e) {
    // console.log(e);
  }
};

//add cart action
export const addToCart = id => dispatch => {
  try {
    return axios
      .post(`${API_URL}/cart/add_to_cart/`, {
        service: [
          {
            service: id
          }
        ]
      })
      .then(res => {
        dispatch({
          type: ADD_TO_CART,
          id
        });
      });
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    });
  }
};
// add products to cart
export const addProductToCart = id => dispatch => {
  try {
    return axios
      .post(`${API_URL}/cart/add_to_cart/`, {
        product: [
          {
            product: id,
            quantity:1
          }
        ]
      })
      .then(res => {
        dispatch({
          type: ADD_TO_CART,
          id
        });
      });
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data
    });
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
