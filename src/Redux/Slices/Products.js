import { createSlice } from '@reduxjs/toolkit';
const ProductsSlice = createSlice({
	name: 'Products',
	initialState: null,
	reducers: {
		updateProductsList: (state, action) => {
			return action?.payload ? action.payload : { ...state };
		},
	},
});

export const { updateProductsList } = ProductsSlice.actions;
export default ProductsSlice.reducer;
