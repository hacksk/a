import axios from "axios";
import { SET_ERRORS } from "./commonActionType";
import { API_URL } from "./urlConfig";
import setAuthToken from "./utils/setAuthToken";

export const SEND_OTP_SET_NUMBER = "SEND_OTP_SET_NUMBER";
export const SET_USERDATA = "SET_USERDATA";
// OTP - Send OTP
export const sendOtp = (phone) => (dispatch) => {
  axios
    .post(`${API_URL}/user/get_otp/`, phone)
    .then((res) => {
      dispatch({
        type: SEND_OTP_SET_NUMBER,
        payload: phone,
      });
    })
    .catch((err) =>
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    );
};

// OTP - Verify OTP
export const verifyOtp = (otp) => (dispatch, getState) => {
  const prevState = getState();

  const payload = {
    username: prevState.auth.userData.phone,
    password: otp,
  };

  axios
    .post(`${API_URL}/user/get_access_token/`, payload)
    .then((res) => {
      // Save to localStorage
      localStorage.setItem("automotoUserData", JSON.stringify(res.data));

      // Set token to Auth header
      const { token } = res.data.access;
      setAuthToken(token);

      // Set user
      dispatch(setCurrentUser(res.data.user));
    })
    .catch((err) =>
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      }),
      );

};

// Set logged in user
export const setCurrentUser = (userData) => {
  return {
    type: SET_USERDATA,
    payload: userData,
  };
};

// Log user out
export const signOut = () => (dispatch) => {
  // Clear localStorage
  localStorage.clear();


  // Remove token from axios
  setAuthToken();

  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
