import { SET_CURRENT_USER_DATA } from "../actions/authActions";
import isEmpty from "../validation/isEmpty";

const initialState = {
  isAuthenticated: false,
  userData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER_DATA:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        messages: {}
      };

    default:
      return state;
  }
}
