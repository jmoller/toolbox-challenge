import { all } from "redux-saga/effects";
import textsSagas from "./texts/saga";

export default function* rootSaga(getState) {
  yield all([textsSagas()]);
}
