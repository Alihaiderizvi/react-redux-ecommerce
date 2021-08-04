const initState = {
	products: [],
	totalPrice: 0,
	totalQty: 0,
};

const CartReducer = (state = initState, action) => {
	let findProduct;
	let index;
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
					products: [...state.products, product],
					totalPrice: tPrice,
					totalQty: tQty,
				};
			} else {
				return state;
			}
		case "INC":
			findProduct = state.products.find(
				(product) => product.id === action.payload
			);
			index = state.products.findIndex(
				(product) => product.id === action.payload
			);

			findProduct.quantity += 1;
			state.products[index] = findProduct;

			return {
				...state,
				totalPrice: state.totalPrice + findProduct.discountPrice,
				totalQty: state.totalQty + 1,
			};

		case "DEC":
			findProduct = state.products.find(
				(product) => product.id === action.payload
			);
			index = state.products.findIndex(
				(product) => product.id === action.payload
			);
			if (findProduct.quantity >= 1) {
				findProduct.quantity -= 1;
				state.products[index] = findProduct;
				return {
					...state,
					totalPrice: state.totalPrice - findProduct.discountPrice,
					totalQty: state.totalQty - 1,
				};
			} else {
				return state;
			}

		default:
			return state;
	}
};

export default CartReducer;
