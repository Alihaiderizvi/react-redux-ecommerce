import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Details = () => {
	const { id } = useParams();

	const dispatch = useDispatch();
	const { product } = useSelector((state) => state.ProductsReducer);
	console.log(product);
	useEffect(() => {
		dispatch({ type: "PRODUCT", id });
	}, [id]);

	return (
		<div>
			<h1>Details</h1>
		</div>
	);
};

export default Details;
