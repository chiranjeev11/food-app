import React from "react";
import {
	StyledPopularDishImage,
	StyledPopularDish,
	StyledPopularDishImageText,
	StyledPopularDishes,
} from "./styled";

export const PopularDishes = ({ popularDishes }) => {
	return (
		<div style={{ marginLeft: "16px" }}>
			<h3 style={{ textAlign: "initial" }}>Popular Dishes</h3>
			<StyledPopularDishes>
				{popularDishes?.map((dish) => (
					<>
						<Dish title={dish.name} key={dish.id} image={dish.image} />
					</>
				))}
			</StyledPopularDishes>
		</div>
	);
};

const Dish = ({ title, image }) => {
	return (
		<StyledPopularDish>
			<StyledPopularDishImage src={image}></StyledPopularDishImage>
			<StyledPopularDishImageText>{title}</StyledPopularDishImageText>
		</StyledPopularDish>
	);
};
