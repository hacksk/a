import { SEND_OTP_SET_NUMBER } from "../actions/authActions";
import isEmpty from "../validation/isEmpty";

const initialState = {
  isAuthenticated: false,
  userData: null,
  accessToken: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_OTP_SET_NUMBER:
      return {
        ...state,
        userData: { phone: action.payload.phone }
      };

    default:
      return state;
  }
}
