import reducer from '../reducer';
import { POST_TEXTS, POST_TEXTS_SUCCESS, POST_TEXTS_FAIL } from '../types';

describe('Reducer', () =>  {


  const mockInitialState = {
    _loading: false,
    error: undefined,
    text: ""
  }

  describe('calling reducer with POST_TEXTS action', () => {
    it('returns the state with the loading set to true', () => {

      const mockAction = {
        type: POST_TEXTS,
      }
      const mockResult = {
        _loading: true,
        error: undefined,
        text: ""
      }
      expect(reducer(mockInitialState, mockAction)).toEqual(mockResult);
    });  
  });
  

  describe('calling reducer with POST_TEXT_SUCCESS action', () => {
    const expectedMessage = 'This is a mock message';
    const mockAction = {
      type: POST_TEXTS_SUCCESS,
      payload: expectedMessage
    }
    const mockResult = {
      _loading: false,
      error: undefined,
      text: expectedMessage
    }
    expect(reducer(mockInitialState, mockAction)).toEqual(mockResult);
  });


  describe('calling reducer with POST_TEXT_FAIL action', () => {
    const errorMessage = 'This is a mock error message';
    const mockAction = {
      type: POST_TEXTS_FAIL,
      payload: errorMessage
    }
    const mockResult = {
      _loading: false,
      error: errorMessage,
      text: ""
    }
    expect(reducer(mockInitialState, mockAction)).toEqual(mockResult);
  });



});