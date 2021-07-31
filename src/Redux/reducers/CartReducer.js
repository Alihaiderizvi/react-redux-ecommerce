const initState = {
	products: [],
	totalPrice: 0,
	totalQty: 0,
};

const CartReducer = (state = initState, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			const { product, quantity } = action.payload;
			// console.log(product.id, quantity);
			const check = state.products.find((prod) => prod.id === product.id);
			if (!check) {
				const tPrice = state.totalPrice + product.discountPrice * quantity;
				const tQty = state.totalQty + quantity;
				product.quantity = quantity;
				return {
					...state,
					product: [...state.products, product],
					totalPrice: tPrice,
					totalQty: tQty,
				};
			} else {
				return state;
			}
		default:
			return state;
	}
};

export default CartReducer;
