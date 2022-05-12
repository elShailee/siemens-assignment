export const formatUserFullName = nameObj => {
	const { firstname, lastname } = nameObj;
	return `${firstname} ${lastname}`;
};

export const formatUserAddress = addressObj => {
	const { city, street, number } = addressObj;
	return `${number} ${street}, ${city}`;
};

export const formatCartDate = rawDate => {
	return rawDate.substr(0, 10);
};

export const getCartItemAmounts = products => {
	let count = 0;
	products.forEach(product => {
		count += product.quantity;
	});
	return count;
};

export const getCartTotalAmount = ({ cartProducts, productsData }) => {
	let total = 0;
	cartProducts.forEach(product => {
		total += product.quantity * productsData[product.productId - 1].price;
	});
	return total;
};
