import axios from "axios";
import { API_URL } from "./urlConfig";
import { SET_ERRORS } from "./commonActionType";

export const LOAD_ITEMS = "LOAD_ITEMS";
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
export const loadToCart = () => (dispatch) => {
  try {
    return axios
      .get(`${API_URL}/service/`, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAwNDAzMTQ4LCJqdGkiOiIwMzczYjI2ODk0ZTE0ZGU0ODE3Y2ExOWQxOTI0MWQ0NiIsInVzZXJfaWQiOjQsInVzZXIiOnsiaWQiOjQsImxhc3RfbG9naW4iOm51bGwsImVtYWlsIjoidmlzaG51dXJAdGVjaGJ5aGVhcnQuaW4iLCJmaXJzdF9uYW1lIjoidmlzaG51IiwibGFzdF9uYW1lIjoidXIiLCJ1c2VybmFtZSI6InZpc2hudTYyODIiLCJwaG9uZSI6Iis5MTYyODI0NDM3NjQiLCJkYXRlX2pvaW5lZCI6IjIwMjAtMDYtMDlUMTE6NDI6NDcuMzU3ODIwWiIsImdyb3VwcyI6W10sInVzZXJfcGVybWlzc2lvbnMiOltdfX0.3FOxzXB1p7bHvN145XDdIL6UAAL97_xmR65w8VObXwg",
        },
      })
      .then((res) => {
        let itemList = res.data.map((item) => {
          return {
            id: item.id,
            title: item.name,
            desc: item.description,
            price: item.price,
            img: item.images[0].image,
          };
        });

        dispatch({
          type: LOAD_ITEMS,
          itemList,
        });
      });
  } catch (e) {
    console.log(e);
  }
};
//Load product to cart
export const loadProductToCart = () => (dispatch) => {
  try {
    return axios
      .get(`${API_URL}/product/`, {
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAwMDYzMDU3LCJqdGkiOiI4Mzc5YmRkMWQzNjU0YjA2YWRjNjk1OWY3MDdmZmJkZSIsInVzZXJfaWQiOjExLCJ1c2VyIjp7ImlkIjoxMSwibGFzdF9sb2dpbiI6bnVsbCwiZW1haWwiOiJ2aXNobnV1ckB0ZWNoYnloZWFydC5pbiIsImZpcnN0X25hbWUiOiIiLCJsYXN0X25hbWUiOiIiLCJ1c2VybmFtZSI6InZpc2hudTYyODIiLCJwaG9uZSI6Iis5MTYyODI0NDM3NjQiLCJkYXRlX2pvaW5lZCI6IjIwMjAtMDYtMDVUMTU6MDU6NTEuMjQzMDAwWiIsImdyb3VwcyI6W10sInVzZXJfcGVybWlzc2lvbnMiOltdfX0.cNGYIScBCDckwTSifG6a1Sm-Oh4VOx8O6rWiU8wKdYs",
        },
      })
      .then((res) => {
        let itemList = res.data.map((item) => {
          console.log("itemList");

          return {
            id: item.id,
            price: item.price,
          };
        });

        dispatch({
          type: LOAD_ITEMS,
          itemList,
        });
      });
  } catch (e) {
    console.log(e);
  }
};
//add cart action
export const addToCart = (id) => (dispatch) => {
  try {
    return axios
      .post(
        `${API_URL}/cart/add_to_cart/`,
        {
          headers: {
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAwNDAzMTQ4LCJqdGkiOiIwMzczYjI2ODk0ZTE0ZGU0ODE3Y2ExOWQxOTI0MWQ0NiIsInVzZXJfaWQiOjQsInVzZXIiOnsiaWQiOjQsImxhc3RfbG9naW4iOm51bGwsImVtYWlsIjoidmlzaG51dXJAdGVjaGJ5aGVhcnQuaW4iLCJmaXJzdF9uYW1lIjoidmlzaG51IiwibGFzdF9uYW1lIjoidXIiLCJ1c2VybmFtZSI6InZpc2hudTYyODIiLCJwaG9uZSI6Iis5MTYyODI0NDM3NjQiLCJkYXRlX2pvaW5lZCI6IjIwMjAtMDYtMDlUMTE6NDI6NDcuMzU3ODIwWiIsImdyb3VwcyI6W10sInVzZXJfcGVybWlzc2lvbnMiOltdfX0.3FOxzXB1p7bHvN145XDdIL6UAAL97_xmR65w8VObXwg",
          },
        },
        {
          service: [
            {
              service: id,
            },
          ],
        }
      )
      .then((res) => {
        dispatch({
          type: ADD_TO_CART,
          id,
        });
      });
  } catch (err) {
    dispatch({
      type: SET_ERRORS,
      payload: err.response.data,
    });
  }
};

//remove item action
export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};
//subtract qt action
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
//add qt action
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
