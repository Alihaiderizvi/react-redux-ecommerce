import React from "react";
import Header from "./Header";
// Import For Redux Reducers
import { useSelector } from "react-redux";

const Home = () => {
	const products = useSelector((state) => state.ProductsReducer);
	return (
		<>
			<Header />
		</>
	);
};

export default Home;
