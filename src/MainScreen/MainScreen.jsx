import React from 'react';
import texts from 'texts';
import { AppLogo, StyledMainScreen, SummaryButton, TablesContainer } from './styles';

export const MainScreen = () => {
	return (
		<StyledMainScreen>
			<AppLogo href='' />
			<TablesContainer>
				{/* <UsersTable />
			<CartsTable /> */}
			</TablesContainer>
			<SummaryButton>{texts.summary}</SummaryButton>
		</StyledMainScreen>
	);
};
