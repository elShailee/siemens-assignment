import styled from 'styled-components';
import texts from 'texts';

export const StyledMainScreen = styled.div`
	${({ theme }) => theme.customStyles.screenSized}
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
`;

export const SummaryButton = styled.button`
	background-color: gray;
	width: fit-content;
	margin: ${({ theme }) => theme.sizes.padding.L};
	align-self: end;
	color: inherit;
`;
