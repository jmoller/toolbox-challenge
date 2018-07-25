import { POST_TEXTS, POST_TEXTS_SUCCESS, POST_TEXTS_FAIL } from "./types";

const initialState = {
  _loading: false,
  error: undefined,
  text: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_TEXTS:
      return {
        ...state,
        _loading: true
      };
    case POST_TEXTS_SUCCESS:
      return {
        ...state,
        text: action.payload,
        _loading: false,
        error: undefined
      };
    case POST_TEXTS_FAIL:
      return {
        ...state,
        _loading: false,
        error: action.payload
      };
    default:
      return state;
      break;
  }
};
