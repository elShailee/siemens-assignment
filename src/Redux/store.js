import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import Users from './Slices/Users';

const reducer = combineReducers({
	Users,
});

const store = configureStore({ reducer });

export default store;
