import React from 'react';
import {shallow, mount} from 'enzyme';


import {MessageInput} from './TextForm';
import TextForm from './TextForm';
import TexFormContainer from './TextFormContainer';

import { reducer as formReducer } from 'redux-form';
import { reduxForm } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import TextFormContainer from './TextFormContainer';

describe('MessageInput', () => {
  describe('is empty', () => {
    const props = {
      input: {},
      meta: { touched: true, error: 'A message is required' },
    }
    const messageInput = shallow(<MessageInput {...props}/>);

    it('displays an error message', () => {
      expect(messageInput.find('p').text()).toEqual(props.meta.error);
    });
  });

  describe('has text', () => {
    const props = {
      input: {},
      meta: { touched: true },
    }
    const messageInput = shallow(<MessageInput {...props}/>);

    it('does not display a paragraph', () => {
      expect(messageInput.find('p').length).toEqual(0);
    });
  });

});


describe('TextForm', () => {
  const mockFn = jest.fn();
  const props = {
    fields: {
      message: {
        value: '',
        touched: false,
        error: null
      }
    },
    values: {
      message: ''
    },
    handleSubmit: fn => fn,
    postTexts: mockFn
  } 
  

  const textForm = shallow(<TextForm {...props}/>)

  it('renders properly on screen', () => {
    expect(textForm).toMatchSnapshot();
  });

  describe('the form gets submited by the user', () => {
    beforeEach(() => {
      textForm.find('form').simulate('submit');
    });

    it('executes the callback function', () => {
      expect(mockFn).toHaveBeenCalledTimes(1);
      
    });
  });

});

describe('TextFormContainer', () => {
  let store = createStore(combineReducers({ form: formReducer }));
  
  const tfContainer = mount(
    <Provider store={store}>
      <TextFormContainer />
    </Provider>)
  

   tfContainer.find('.btn-primary').simulate('click');
   

} );
