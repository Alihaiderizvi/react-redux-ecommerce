import React from "react";
// Import React Router
import { Link } from "react-router-dom";
import Header from "./Header";
// Import For Redux Reducers
import { useSelector } from "react-redux";

const Home = () => {
	const products = useSelector((state) => state.ProductsReducer);
	return (
		<>
			<Header />
			<div className='container'>
				<div className='row'>
					{products.map((product) => (
						<div className='col-3' key={product.id}>
							<div className='product'>
								<div className='product__img'>
									<Link to={`/details/${product.id}`}>
										{/* <img src={`/images/${product.image}`} alt='image name' /> */}
									</Link>
								</div>
								<div className='product__name'>{product.name}</div>
								<div className='row'>
									<div className='col-6'>
										<div className='product__price'>
											<span className='actualPrice'></span>
											<span className='discount'>{product.discount}%</span>
										</div>
									</div>
									<div className='col-6'>
										<div className='product__discount__price'></div>
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
