import { SEND_OTP_SET_NUMBER, SET_USERDATA } from "../actions/authActions";
import isEmpty from "../validation/isEmpty";
// import isEmpty from "../validation/isEmpty";

const initialState = {
  isAuthenticated: false,
  userData: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_OTP_SET_NUMBER:
      return {
        ...state,
        userData: { phone: action.payload.phone }
      };

    case SET_USERDATA:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        userData: action.payload
      };

    default:
      return state;
  }
}
