import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { productsSelector } from 'Redux/Selectors/ProductsSelector';
import texts from 'texts';
import { getCartTotalAmount } from 'Utils/formatUtils';
import { formatCartDate, getCartItemAmounts } from 'Utils/formatUtils';
import { StyledTableContainer } from './styles';

export const CartsTable = ({ carts }) => {
	const { title, fields } = texts.cartsTable;
	const productsData = useSelector(productsSelector);

	const isCartsFound = typeof carts !== 'string';
	const isCartsEmpty = carts?.length === 0;

	const tableHeader = (
		<TableHead>
			<TableRow>
				<TableCell>{fields.id}</TableCell>
				<TableCell>{fields.date}</TableCell>
				<TableCell>{fields.itemsAmount}</TableCell>
				<TableCell>{fields.totalPrice}</TableCell>
			</TableRow>
		</TableHead>
	);

	const tableBody = (
		<TableBody>
			{isCartsFound ? (
				carts.map(cart => (
					<TableRow key={cart.id}>
						<TableCell>{cart.id}</TableCell>
						<TableCell>{formatCartDate(cart.date)}</TableCell>
						<TableCell>{getCartItemAmounts(cart.products)}</TableCell>
						<TableCell>
							{productsData
								? getCartTotalAmount({ cartProducts: cart.products, productsData })
								: 'Calculating'}
						</TableCell>
					</TableRow>
				))
			) : (
				<TableRow>
					<TableCell>{carts}</TableCell>
				</TableRow>
			)}

			{isCartsFound && isCartsEmpty && (
				<TableRow>
					<TableCell>{texts.emptyUser}</TableCell>
				</TableRow>
			)}
		</TableBody>
	);

	return (
		<StyledTableContainer>
			{title}
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					{tableHeader}
					{tableBody}
				</Table>
			</TableContainer>
		</StyledTableContainer>
	);
};
