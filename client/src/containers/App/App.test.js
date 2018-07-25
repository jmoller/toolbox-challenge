import React from 'react';
import { shallow, mount } from "enzyme";
import {App} from './App';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { Provider } from 'react-redux'

describe('App', () => {
	
	const app = shallow(<App/>);

	it('renders correctly', () => {
		expect(app).toMatchSnapshot();
	});


	describe('If has text in props', () =>{
		let appWithProps = '';
		beforeEach(() => {
			const props = {text: 'This is a mock text'};
			appWithProps = shallow(<App {...props} />);
		});

		it('renders the TXAlert properly', () => {
			
			expect(appWithProps.find('TXAlert').length).toEqual(1);
		});

		it('renders the TXAlert with message in props', () => {
			
			expect(appWithProps.find('TXAlert').props().message).toEqual('This is a mock text');
		});

		it('renders the TXAlert with no error in props', () => {
			expect(appWithProps.find('TXAlert').props().errors).toEqual(undefined);
		})

	});

	describe('If it has errors in props', () => {
		let appWithProps = '';
		beforeEach(() => {
			const props = {errors: 'This is a mock error message'};
			appWithProps = shallow(<App {...props} />);
		});

		it('renders the alert properly', () => {
			
			expect(appWithProps.find('TXAlert').length).toEqual(1);
		});

		it('renders the TXAlert with error in props set to `This is a mock error message`', () => {
			expect(appWithProps.find('TXAlert').props().errors).toEqual('This is a mock error message');
		});

		it('renders the TXAlert with no messages', () => {
			expect(appWithProps.find('TXAlert').props().message).toEqual(undefined);
		})

	});


	describe('user submits form with empty message', () => {
		let store = createStore(combineReducers({ form: formReducer }));
		const appHolder = mount(<Provider store={store}>
			<App />
		</Provider>); 
		beforeEach(()=>{
			appHolder.find('form').simulate('submit');
		})

		it('throws an error message with text `A message is required`', () => {
			const expectedMessage = 'A message is required';
			expect(appHolder.find('p').text()).toEqual(expectedMessage);
		})
	});

	
});


