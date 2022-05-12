import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from 'Redux/Selectors/UsersSelectors';
import texts from 'texts';
import { fetchUsersData } from 'Utils/networkUtils';
import { AppLogo, StyledMainScreen, SummaryButton, TablesContainer } from './styles';
import { UsersTable } from './UsersTable';

export const MainScreen = () => {
	const usersData = useSelector(usersSelector);

	const dispatch = useDispatch();
	useEffect(() => {
		fetchUsersData(dispatch);
	}, [dispatch]);

	return (
		<StyledMainScreen>
			<AppLogo href='' />
			<TablesContainer>
				<UsersTable />
				{usersData.length}
				{/* <CartsTable /> */}
			</TablesContainer>
			<SummaryButton>{texts.summary}</SummaryButton>
		</StyledMainScreen>
	);
};
