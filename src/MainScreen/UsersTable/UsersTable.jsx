import {
	Paper,
	TableContainer,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { usersSelector } from 'Redux/Selectors/UsersSelectors';
import texts from 'texts';
import { formatUserFullName, formatUserAddress } from 'Utils/formatUtils';
import { StyledTableContainer } from './styles';

export const UsersTable = ({ loadUserCart }) => {
	const usersData = useSelector(usersSelector);
	const { title, fields } = texts.usersTable;

	return (
		<StyledTableContainer>
			{title}
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>{fields.id}</TableCell>
							<TableCell>{fields.username}</TableCell>
							<TableCell>{fields.email}</TableCell>
							<TableCell>{fields.fullName}</TableCell>
							<TableCell>{fields.address}</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{typeof usersData === 'string' ? (
							<TableRow>
								<TableCell>{usersData}</TableCell>
							</TableRow>
						) : (
							usersData.map(user => (
								<TableRow key={user.id} onClick={() => loadUserCart(user.id)}>
									<TableCell aling='left'>{user.id}</TableCell>
									<TableCell>{user.username}</TableCell>
									<TableCell>{user.email}</TableCell>
									<TableCell>{formatUserFullName(user.name)}</TableCell>
									<TableCell>{formatUserAddress(user.address)}</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</StyledTableContainer>
	);
};
