import { put, call, takeLatest } from "redux-saga/effects";
import { POST_TEXTS, POST_TEXTS_SUCCESS, POST_TEXTS_FAIL } from "./types";
import axios from "axios";

export function postTextsCall(message) {
  return axios
    .post("/api/texts", { message })
    .then(response => ({ response: response.data.message }))
    .catch(error => {
      const dataError = error.response.data;
      return {
        error:
          typeof dataError.error !== "undefined" ? dataError.error : dataError
      };
    });
}
// This function makes the api call to the server
// If succeeded calls the `POST_TEXTS_SUCCESS` action
// calls the `POST_TEXTS_FAIL` action otherwise
export function* postTexts({ message }) {
  const { response, error } = yield call(postTextsCall, message);
  if (response) {
    yield put({ type: POST_TEXTS_SUCCESS, payload: response });
  } else {
    yield put({ type: POST_TEXTS_FAIL, payload: error });
  }
}

// This is our root saga watcher that listens for actions of type POST_TEXTS 
// Whenever an action of that type gets triggered it executes the postTexts function
export default function* rootSaga() {
  yield takeLatest(POST_TEXTS, postTexts);
}
