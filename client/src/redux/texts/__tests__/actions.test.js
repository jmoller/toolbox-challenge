import React from 'react';
import { shallow } from 'enzyme';
import { postTexts } from '../actions';
import { POST_TEXTS } from '../types';

it('returns an action to post the text', () =>{ 

  const mockMessage = 'This is a mock message';
  const expectedOutcome = {type: POST_TEXTS, message: mockMessage};
  expect(postTexts({message:mockMessage})).toEqual(expectedOutcome);
});