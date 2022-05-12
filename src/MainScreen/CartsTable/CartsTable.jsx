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

export const CartsTable = ({ cart }) => {
	const { title, fields } = texts.cartsTable;
	const productsData = useSelector(productsSelector);

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

	return (
		<StyledTableContainer>
			{title}
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					{tableHeader}
					<TableBody>
						{typeof cart === 'string' ? (
							<TableRow>
								<TableCell>{cart}</TableCell>
							</TableRow>
						) : (
							cart.map(cart => (
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
						)}
						{cart?.length === 0 && (
							<TableRow>
								<TableCell>{texts.emptyUser}</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</StyledTableContainer>
	);
};
