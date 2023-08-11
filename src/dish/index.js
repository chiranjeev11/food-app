import React from "react";
import { ProductDetails, Ingredients } from "./components";
import { RefrigeratorIcon } from "../assets/refrigerator";
import { SpacerY } from "../dishes/components/styled";
import axios from "axios";
import { Spin } from "antd";

const Dish = () => {
	const [product, setProduct] = React.useState({});
	const [loading, setLoading] = React.useState(true);
	axios
		.get(
			"https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/2"
		)
		.then(function (response) {
			setProduct(response.data);
			setLoading(false);
		})
		.catch(function (error) {
			console.log(error);
		});
	// const product = {
	// 	name: "Masala Mughlai",
	// 	id: 1,
	// 	timeToPrepare: "1 Hour",
	// 	ingredients: {
	// 		vegetables: [
	// 			{ name: "Cauliflower", quantity: "1" },
	// 			{ name: "Tomato", quantity: "10" },
	// 			{ name: "Spinach", quantity: "1/2 Kg" },
	// 		],
	// 		spices: [
	// 			{ name: "Coriander", quantity: "100 gm" },
	// 			{ name: "Mustard Oil", quantity: "1/2 litres" },
	// 		],
	// 		appliances: [
	// 			{ name: "Refrigerator", image: "" },
	// 			{ name: "Microwave", image: "" },
	// 			{ name: "Stove", image: "" },
	// 		],
	// 	},
	// };
	if (loading)
		return (
			<div
				style={{
					marginLeft: "50%",
					marginTop: "50%",
				}}
			>
				<Spin size="large" />
			</div>
		);
	return (
		<div style={{ marginLeft: "16px", paddingBottom: "10px" }}>
			<ProductDetails product={product} key={product?.id} />
			<div style={{ borderBottom: "1px solid #e5e5e5" }}>
				<h3 style={{ marginBottom: "1px" }}>Ingredients</h3>
				<p style={{ fontSize: "8px", fontWeight: "300" }}>For 2 people</p>
			</div>
			<Ingredients ingredients={product?.ingredients} />
			<h3 style={{ marginBottom: "1px" }}>Appliances</h3>
			<SpacerY size="10px" />
			<RefrigeratorIcon size="50" />
			<RefrigeratorIcon size="50" />
		</div>
	);
};

export default Dish;
