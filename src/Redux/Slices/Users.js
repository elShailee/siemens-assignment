import { createSlice } from '@reduxjs/toolkit';
import texts from 'texts';

const UsersSlice = createSlice({
	name: 'Users',
	initialState: texts.usersFetchMessage,
	reducers: {
		updateUsersList: (state, action) => {
			if (action?.payload) {
				return action.payload;
			}
		},
	},
});

export const { updateUsersList } = UsersSlice.actions;
export default UsersSlice.reducer;
