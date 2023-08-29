import { USER_LOGIN, USER_LOGOUT } from "../actions/userAction";

const INITIAL_STATE = {
  account: {
    email: "duynghiadev",
    auth: false,
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
      };

    case USER_LOGOUT:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userReducer;
