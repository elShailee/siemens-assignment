import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import texts from 'texts';
import { fetchUsersData, fetchProductsData, fetchCartData } from 'Utils/networkUtils';
import { CartsTable } from './CartsTable/CartsTable';
import { AppLogo, StyledMainScreen, SummaryButton, TablesContainer } from './styles';
import { SummaryModal } from './SummaryModal/SummaryModal';
import { UsersTable } from './UsersTable/UsersTable';

export const MainScreen = () => {
	const [cartsState, setCartsState] = useState(texts.usersFetchMessage);
	const [modalOpenState, setModalOpenState] = useState(false);

	const openModal = () => setModalOpenState(true);
	const closeModal = () => setModalOpenState(false);

	const dispatch = useDispatch();
	useMemo(() => {
		fetchUsersData({ dispatch, setCartsState });
		fetchProductsData({ dispatch });
	}, [dispatch]);

	const loadUserCart = id => {
		setCartsState(texts.cartsFetchMessage);
		fetchCartData({ userId: id, setCartsState });
	};

	return (
		<StyledMainScreen>
			<AppLogo href='' />
			<TablesContainer>
				<UsersTable loadUserCart={loadUserCart} />
				<CartsTable carts={cartsState} />
			</TablesContainer>
			{typeof cartsState !== 'string' && (
				<>
					<SummaryButton onClick={openModal}>{texts.summary}</SummaryButton>
					<SummaryModal isOpen={modalOpenState} closeModal={closeModal} carts={cartsState} />
				</>
			)}
		</StyledMainScreen>
	);
};
