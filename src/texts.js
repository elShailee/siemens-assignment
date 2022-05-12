const texts = {
	logo: 'App Logo',
	usersTable: {
		title: 'Users Table',
		fields: {
			id: 'ID',
			username: 'Username',
			email: 'Email',
			fullName: 'Full Name',
			address: 'Address',
		},
	},
	cartsTable: {
		title: "Selected User's Shopping Cart",
		fields: {
			id: 'ID',
			date: 'Date',
			itemsAmount: 'Items Amount',
			totalPrice: 'Total Price',
		},
	},
	summary: 'Summary',
	usersFetchMessage: 'Fetching users data...',
	cartsFetchMessage: 'Fetching carts data...',
	emptyUser: 'This user has no cart history.',
};

export default texts;
