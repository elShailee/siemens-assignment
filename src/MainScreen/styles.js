import { Button } from '@mui/material';
import styled from 'styled-components';
import texts from 'texts';

export const StyledMainScreen = styled.div`
	width: 100%;
	min-height: 100vh;
	box-sizing: border-box;
	background-color: ${({ theme }) => theme.colors.MainScreen.BG};
	color: ${({ theme }) => theme.colors.MainScreen.text};
	font-family: ${({ theme }) => theme.fonts.primary};
	padding: ${({ theme }) => theme.sizes.padding.XL};
	display: flex;
	flex-direction: column;
`;

export const AppLogo = styled.a`
	font-size: ${({ theme }) => theme.sizes.text.XL};
	color: inherit;
	width: fit-content;
`;

AppLogo.defaultProps = {
	children: texts.logo,
};

export const TablesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: ${({ theme }) => theme.sizes.padding.XXL} 0;
	padding: ${({ theme }) => theme.sizes.padding.L};
	justify-content: space-around;
`;

export const SummaryButton = styled(Button)`
	background-color: gray;
	width: fit-content;
	align-self: center;
	color: inherit;
`;
SummaryButton.defaultProps = {
	variant: 'contained',
};
