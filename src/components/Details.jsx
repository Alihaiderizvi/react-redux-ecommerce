import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// Import External Lib Currency Formatter
import currencyFormatter from "currency-formatter";
// Import React Icons
import { BsDash, BsPlus } from "react-icons/bs";
const Details = () => {
	const { id } = useParams();

	const dispatch = useDispatch();
	const { product } = useSelector((state) => state.ProductsReducer);

	useEffect(() => {
		dispatch({ type: "PRODUCT", id });
	}, [id]);

	const [quantity, setQuantity] = useState(0);

	const quantityINC = () => {
		setQuantity(quantity + 1);
	};
	const quantityDEC = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};
	return (
		<div className='details'>
			<div className='container mt-100'>
				<div className='row'>
					<div className='col-6'>
						<div className='details__image'>
							<img src={`/images/${product.image}`} alt={product.name} />
						</div>
					</div>
					<div className='col-6'>
						<div className='details__name'>{product.name}</div>
						<div className='details__prices'>
							<span className='details__actaul'>
								{currencyFormatter.format(product.price, { code: "USD" })}
							</span>
							<span className='details__discount'>
								{currencyFormatter.format(product.discountPrice, {
									code: "USD",
								})}
							</span>
						</div>
						<div className='details__info'>
							<div className='details__incDec'>
								<span className='dec' onClick={quantityDEC}>
									<BsDash />
								</span>
								<span className='quantity'>{quantity}</span>
								<span className='inc' onClick={quantityINC}>
									<BsPlus />
								</span>
								<button
									className='btn-default'
									onClick={() =>
										dispatch({
											type: "ADD_TO_CART",
											payload: { product, quantity },
										})
									}
								>
									add to cart
								</button>
							</div>
						</div>
						<div className='details__p'>
							<h4>Details</h4>
							{product.desc}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
