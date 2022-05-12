import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import texts from 'texts';
import { fetchUsersData, fetchProductsData, fetchCartData } from 'Utils/networkUtils';
import { CartsTable } from './CartsTable/CartsTable';
import { AppLogo, StyledMainScreen, SummaryButton, TablesContainer } from './styles';
import { UsersTable } from './UsersTable/UsersTable';

export const MainScreen = () => {
	const [cartState, setCartState] = useState(texts.usersFetchMessage);

	const dispatch = useDispatch();
	useEffect(() => {
		fetchUsersData({ dispatch, setCartState });
		fetchProductsData({ dispatch });
	}, [dispatch]);

	const loadUserCart = id => {
		setCartState(texts.cartsFetchMessage);
		fetchCartData({ userId: id, setCartState });
	};

	return (
		<StyledMainScreen>
			<AppLogo href='' />
			<TablesContainer>
				<UsersTable loadUserCart={loadUserCart} />
				<CartsTable cart={cartState} />
			</TablesContainer>
			<SummaryButton>{texts.summary}</SummaryButton>
		</StyledMainScreen>
	);
};
