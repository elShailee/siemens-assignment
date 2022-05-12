import styled from 'styled-components';

export const StyledTableContainer = styled.div`
	max-width: 90vw;
	min-width: 40vw;
	width: fit-content;
	margin-right: ${({ theme }) => theme.sizes.padding.XL};
	display: flex;
	flex-direction: column;
`;
