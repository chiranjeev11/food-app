import React from "react";
import {
	StyledProduct,
	StyledProductDetails,
	StyledProductImage,
	StyledProductTitle,
	SpacerX,
	StyledRating,
	StyledProductDescription,
	SpacerY,
	StyledButton,
} from "./styled";
import { VegIcon } from "../../assets/vegIcon";
import { StarIcon } from "../../assets/star";
import { RefrigeratorIcon } from "../../assets/refrigerator";
import { PlusIcon } from "../../assets/Plus";

export const Products = ({ dishes }) => {
	return (
		<div style={{ marginTop: "40vh" }}>
			{" "}
			{dishes?.map((dish) => (
				<>
					<Product dish={dish} key={dish.id} />
					<SpacerY size="20px" />
				</>
			))}
		</div>
	);
};

export const Product = ({ dish }) => {
	return (
		<StyledProduct
			onClick={() => {
				console.log(dish.id);
				window.location.replace(`/dish/${dish.id}`);
			}}
		>
			<StyledProductDetails>
				<StyledProductTitle>
					<h5 style={{ margin: "0px " }}>{dish.name}</h5>
					<SpacerX size="10px" />
					<VegIcon />
					<SpacerX size="10px" />
					<StyledRating>
						<span style={{ fontSize: "7px" }}>{dish.rating}</span>
						<SpacerX size="3px" />
						<StarIcon />
					</StyledRating>
				</StyledProductTitle>
				<SpacerY size="10px" />
				<div style={{ display: "flex", alignItems: "center" }}>
					<div
						style={{
							marginRight: "8px",
							borderRight: "1px solid black",
							paddingRight: "2px",
						}}
					>
						{dish.equipments.map((equip) => (
							<RefrigeratorIcon />
						))}
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<span style={{ fontSize: "12px" }}>Ingredients</span>
						<span style={{ fontSize: "10px", color: "#FF8802" }}>
							View list
						</span>
					</div>
				</div>
				<SpacerY size="10px" />
				<StyledProductDescription>{dish.description}</StyledProductDescription>
			</StyledProductDetails>
			<div>
				<StyledProductImage src={dish.image}></StyledProductImage>
				<StyledButton>
					Add
					<PlusIcon />
				</StyledButton>
			</div>
		</StyledProduct>
	);
};
