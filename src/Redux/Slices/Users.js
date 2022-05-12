import { createSlice } from '@reduxjs/toolkit';
import texts from 'texts';

const UsersSlice = createSlice({
	name: 'Users',
	initialState: texts.dataFetchMessage,
	reducers: {
		updateUsersList: (state, action) => {
			return action?.payload ? action.payload : { ...state };
		},
	},
});

export const { updateUsersList } = UsersSlice.actions;
export default UsersSlice.reducer;
