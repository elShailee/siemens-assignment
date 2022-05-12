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
	summary: 'User Summary',
	usersFetchMessage: 'Fetching users data...',
	cartsFetchMessage: 'Fetching carts data...',
	emptyUser: 'This user has no cart history.',
	modalLabels: {
		mostExpensive: 'Most expensive shopping cart price',
		lastPurchaseDate: 'Last purchase date',
		totalSpent: 'Total money spent by user',
		expensiveProductImage: 'Most expensive product bought by user (picture)',
	},
};

export default texts;
