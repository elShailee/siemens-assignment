import styled from 'styled-components';

export const ModalContentContainer = styled.div`
	width: 50vw;
	height: 70vh;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	background-color: ${({ theme }) => theme.colors.SummaryModal.BG};
	padding: ${({ theme }) => theme.sizes.borderRadius.XL};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.XL};
	color: ${({ theme }) => theme.colors.MainScreen.text};
	font-size: ${({ theme }) => theme.sizes.text.S};
	box-shadow: ${({ theme }) => theme.shadows.L};
`;

export const SummaryLabel = styled.div`
	background-color: ${({ theme }) => theme.colors.SummaryModal.labelsBG};
	font-size: ${({ theme }) => theme.sizes.text.M};
	border-radius: ${({ theme }) => theme.sizes.borderRadius.XL};
	padding: ${({ theme }) => theme.sizes.padding.L};
`;

export const ValueContainer = styled.div`
	padding: ${({ theme }) => theme.sizes.padding.XL};
	margin-left: ${({ theme }) => theme.sizes.padding.L};
`;
