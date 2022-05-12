import { updateProductsList } from 'Redux/Slices/Products';
import { updateUsersList } from 'Redux/Slices/Users';
import texts from 'texts';

export const fetchUsersData = ({ dispatch, setcartsState }) => {
	if (!dispatch) {
		console.error("please pass dispatch object to 'fetchUsersData'.");
		return;
	}
	fetch('https://fakestoreapi.com/users')
		.then(res => res.json())
		.then(res => {
			dispatch(updateUsersList(res));
			setcartsState(texts.cartsFetchMessage);
			if (res?.length) {
				fetchCartData({ userId: res[0].id, setcartsState });
			}
		});
};

export const fetchCartData = ({ userId, setcartsState }) => {
	if (typeof userId !== 'number') {
		console.error("invalid userId in 'fetchCartData'.");
		return;
	}
	fetch('https://fakestoreapi.com/carts/user/' + userId)
		.then(res => res.json())
		.then(res => {
			setcartsState(res);
		});
};

export const fetchProductsData = ({ dispatch }) => {
	if (!dispatch) {
		console.error("please pass dispatch object to 'fetchProductsData'.");
		return;
	}
	fetch('https://fakestoreapi.com/products')
		.then(res => res.json())
		.then(res => dispatch(updateProductsList(res)));
};
