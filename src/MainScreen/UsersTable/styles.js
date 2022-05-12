import { TableRow } from '@mui/material';
import styled from 'styled-components';

export const StyledTableContainer = styled.div`
	max-width: 90vw;
	min-width: 40vw;
	width: fit-content;
	margin-right: ${({ theme }) => theme.sizes.padding.XL};
	margin-bottom: ${({ theme }) => theme.sizes.padding.XL};
	display: flex;
	flex-direction: column;
`;

export const UserEntry = styled(TableRow)`
	&:hover {
		background-color: #ccc;
	}
`;
