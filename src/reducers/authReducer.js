import { SET_CURRENT_USER_DATA } from "../actions/authActions";
import isEmpty from "../validation/isEmpty";

const initialState = {
  isAuthenticated: false,
  userData: {},
  accessToken: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER_DATA:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        accessToken:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk5MzcwMDYwLCJqdGkiOiJmNjRmMjRiZjAwMmE0NmY3YWQ5NGYzYWViODUwOTQxYSIsInVzZXJfaWQiOjIsInVzZXIiOnsiaWQiOjIsImxhc3RfbG9naW4iOm51bGwsImVtYWlsIjoidmlzaG51dXJAdGVjaGJ5aGVhcnQuaW4iLCJmaXJzdF9uYW1lIjoiIiwibGFzdF9uYW1lIjoiIiwidXNlcm5hbWUiOiJ2aXNobnU2MjgyIiwicGhvbmUiOiIrOTE2MjgyNDQzNzY0IiwiZGF0ZV9qb2luZWQiOiIyMDIwLTA1LTI2VDA1OjI0OjU0Ljc3MDAwMFoiLCJncm91cHMiOltdLCJ1c2VyX3Blcm1pc3Npb25zIjpbXX19.0Sm4wTQlRhy2TkM7YdXmDgdCfztFNH3lvHMZy7xhYL8"
      };

    default:
      return state;
  }
}
