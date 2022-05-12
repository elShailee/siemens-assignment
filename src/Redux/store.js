import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import Users from './Slices/Users';
import Products from './Slices/Products';

const reducer = combineReducers({
	Users,
	Products,
});

const store = configureStore({ reducer });

export default store;
