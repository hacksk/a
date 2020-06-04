import axios from "axios";
import { SET_ERRORS } from "./commonActionType";

export const SET_CURRENT_USER_DATA = "SET_CURRENT_USER_DATA";

// Login - Get User Token
export const signIn = userData => dispatch => {
  axios
    .post(
      "https://automoto.techbyheart.in/api/v1/user/get_otp/",
      userData
    )
    .then(res => {
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("automotoEmployeeToken", token);
      // Set token to Auth header
      // setAuthToken(token);

      // Set user
      dispatch(setCurrentUser(res.data.user));
    })
    .catch(err =>
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER_DATA,
    payload: decoded
  };
};

// Log user out
export const signOut = () => dispatch => {
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
