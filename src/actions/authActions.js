import axios from "axios";
import { SET_ERRORS } from "./commonActionType";
import { API_URL } from "./urlConfig";

export const SEND_OTP_SET_NUMBER = "SEND_OTP_SET_NUMBER";
export const VERIFY_OTP_SET_USERDATA = "VERIFY_OTP_SET_USERDATA";

// OTP - Send OTP
export const sendOtp = phone => dispatch => {
  axios
    .post(`${API_URL}/user/get_otp/`, phone)
    .then(res => {
      dispatch({
        type: SEND_OTP_SET_NUMBER,
        payload: phone
      });
    })
    .catch(err =>
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    );
};

// OTP - Verify OTP
export const verifyOtp = otp => (dispatch, getState) => {
  const prevState = getState();

  const payload = {
    username: prevState.auth.userData.phone,
    password: otp
  };

  axios
    .post(`${API_URL}/user/get_access_token/`, payload)
    .then(res => {
      console.log(res.data);
      // Save to localStorage
      const { token } = res.data;
      // Set token to ls
      localStorage.setItem("userToken", token);
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
    type: VERIFY_OTP_SET_USERDATA,
    payload: decoded
  };
};

// Log user out
export const signOut = () => dispatch => {
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
