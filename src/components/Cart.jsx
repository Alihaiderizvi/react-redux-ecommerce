import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";
const Cart = () => {
	// const {}
	return (
		<>
			<div className='cart'>
				<div className='container'>
					<h3>Your cart</h3>
					<>
						<div className='row'>
							<div className='col-9'>
								<div className='cart__heading'>
									<div className='row'>
										<div className='col-2'>Picture</div>
										<div className='col-2'>Name</div>
										<div className='col-2'>Price</div>
										<div className='col-2'>Inc/Dec</div>
										<div className='col-2'>Total Price</div>
										<div className='col-2'>Remove</div>
									</div>
								</div>
								<div className='row verticalAlign'>
									<div className='col-2'>
										<div className='cart__image'>
											<img src={`/images/`} alt='' />
										</div>
									</div>
									<div className='col-2'>
										<div className='cart__name'></div>
									</div>
									<div className='col-2'>
										<div className='cart__price'></div>
									</div>
									<div className='col-2'>
										<div className='details__info cart__incDec'>
											<div className='details__incDec'>
												<span className='dec'>
													<BsDash />
												</span>
												<span className='quantity'></span>
												<span className='inc'>
													<BsPlus />
												</span>
											</div>
										</div>
									</div>
									<div className='col-2'>
										<div className='cart__total text-center'></div>
									</div>
									<div className='col-2'>
										<div className='cart__remove'>
											<BsReverseBackspaceReverse />
										</div>
									</div>
								</div>
							</div>
							<div className='col-3 summary-col'>
								<div className='summary'>
									<div className='summary__heading'>Summary</div>
									<div className='summary__details'>
										<div className='row mb-10'>
											<div className='col-6'>Total Items:</div>
											<div className='col-6'></div>
										</div>
										<div className='row mb-10'>
											<div className='col-6'>Total Price</div>
											<div className='col-6'></div>
										</div>
										<button type='button' className='checkout'>
											Checkout
										</button>
									</div>
								</div>
							</div>
						</div>
					</>
				</div>
			</div>
		</>
	);
};

export default Cart;
