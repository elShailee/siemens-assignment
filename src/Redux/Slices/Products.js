import { createSlice } from '@reduxjs/toolkit';
const ProductsSlice = createSlice({
	name: 'Products',
	initialState: null,
	reducers: {
		updateProductsList: (state, action) => {
			if (action?.payload) {
				return action.payload;
			}
		},
	},
});

export const { updateProductsList } = ProductsSlice.actions;
export default ProductsSlice.reducer;
