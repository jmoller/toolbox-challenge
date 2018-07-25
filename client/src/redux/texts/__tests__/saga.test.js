import { put, call } from 'redux-saga/effects';
import { postTexts, postTextsCall } from "../saga";
import { expectSaga } from "redux-saga-test-plan";
import {POST_TEXTS_SUCCESS} from '../types';


describe("Texts Sagas", () => {
  it("puts the `POST_TEXTS_SUCCESS` action with the results from api call", () => {
    const mockMessage = 'This is a mock message';
    const response = {
      data: {
        message: 'This is a mock message'
      }
    }

    return expectSaga(postTexts, {message: mockMessage})
    .provide([
      [call(postTextsCall, mockMessage), {response}] // <-- catch the call and pass in your own value
    ])
    .put({ type: 'POST_TEXTS_SUCCESS', payload: response })
    .run();
  });
  it("puts the `POST_TEXTS_FAIL` action with the error message from api call", () => {
    const mockMessage = 'This is a mock message';
    const error = {
      data: {
        error: 'This is a mock error'
      }
    }

    return expectSaga(postTexts, {message: mockMessage})
    .provide([
      [call(postTextsCall, mockMessage), {error}] // <-- catch the call and pass in your own value
    ])
    .put({ type: 'POST_TEXTS_FAIL', payload: error })
    .run();
  });
});
