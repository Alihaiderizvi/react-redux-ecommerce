import React from "react";
// Import React Router
import { Link } from "react-router-dom";
// Import External Lib Currency Formatter
import currencyFormatter from "currency-formatter";
// Import React Redux
import { useSelector } from "react-redux";
const Home = () => {
	const { products } = useSelector((state) => state.ProductsReducer);

	return (
		<>
			{/* <Header /> */}
			<div className='container'>
				<div className='row'>
					{products.map((product) => (
						<div className='col-3' key={product.id}>
							<div className='product'>
								<div className='product__img'>
									<Link to={`/details/${product.id}`}>
										<img src={`/images/${product.image}`} alt='name' />
									</Link>
								</div>
								<div className='product__name'>{product.name}</div>
								<div className='row'>
									<div className='col-6'>
										<div className='product__price'>
											<span className='actualPrice'>
												{currencyFormatter.format(product.price, {
													code: "USD",
												})}
											</span>
											<span className='discount'>{product.discount}%</span>
										</div>
									</div>
									<div className='col-6'>
										<div className='product__discount__price'>
											{currencyFormatter.format(product.discountPrice, {
												code: "USD",
											})}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
