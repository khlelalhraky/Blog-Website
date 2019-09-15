import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../Actions/Types";

const initalState = {
  user: {}
};

export default (state = initalState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, success: action.payload };
    case LOGIN_USER:
      return {
        ...state,
        user: { email: action.payload.email, token: action.payload.token }
      };
    case LOGOUT_USER:
      return { ...state, user: {} };
    default:
      return state;
  }
};
