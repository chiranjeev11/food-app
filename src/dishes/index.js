import React from "react";
import { CuisineOptions, PopularDishes, Products } from "./components";
import { BlackBlock, SpacerY, StyledStatus, StyledDateTime } from "./styled";
import { RightArrowIcon } from "../assets/RightArrow";
import { SpacerX } from "./components/styled";
import axios from "axios";
import { Spin } from "antd";

const Dishes = () => {
	const [dishes, setDishes] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
	axios
		.get(
			"https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
		)
		.then(function (response) {
			setDishes(response.data);
			setLoading(false);
		})
		.catch(function (error) {
			console.log(error);
		});
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
		<>
			<div
				style={{
					position: "fixed",
					background: "white",
					zIndex: "2",
					width: "100%",
				}}
			>
				<BlackBlock />
				<CuisineOptions />
				<PopularDishes popularDishes={dishes?.popularDishes} />
			</div>
			<SpacerY size="20px" />
			<Products dishes={dishes?.dishes} />
			<SelectedItemsStatus />
			<DateTime />
		</>
	);
};

export default Dishes;

const SelectedItemsStatus = () => {
	return (
		<>
			<StyledStatus>
				<span>3 food items selected</span>
				<SpacerX size="2px" />
				<RightArrowIcon />
			</StyledStatus>
		</>
	);
};

const DateTime = () => {
	return (
		<>
			<StyledDateTime>
				<span>21 May 2021</span>
				<span>10:30 Pm - 12:30 PM</span>
			</StyledDateTime>
		</>
	);
};
