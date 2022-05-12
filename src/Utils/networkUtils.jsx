import { updateUsersList } from 'Redux/Slices/Users';

export const fetchUsersData = dispatch => {
	if (!dispatch) {
		console.error("please pass dispatch object to 'fetchUsersData'.");
	}
	fetch('https://fakestoreapi.com/users')
		.then(res => res.json())
		.then(res => dispatch(updateUsersList(res)));
};
