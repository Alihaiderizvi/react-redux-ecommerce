const initState = {
	products: [],
	totalPrice: 0,
	totalQty: 0,
};

const CartReducer = (state = initState, action) => {
	switch (action.type) {
		case "INC":
			return;
		default:
			return state;
	}
};

export default CartReducer;
