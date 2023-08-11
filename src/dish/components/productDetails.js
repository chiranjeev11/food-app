import React from "react";
import ArrowLeft from "../../assets/Left";
import {
	SpacerY,
	StyledProductDetails,
	StyledProductName,
	SpacerX,
	StyledRating,
	StyledProductDescription,
	StyledProductImage,
} from "./styled";
import { StarIcon } from "../../assets/star";

export const ProductDetails = ({ product }) => {
	return (
		<>
			<StyledProductDetails>
				<div
					onClick={() => {
						window.location.replace("/");
					}}
				>
					<ArrowLeft />
				</div>
				<SpacerY size="10px" />
				<div style={{ display: "flex", alignItems: "baseline" }}>
					<StyledProductName>{product.name}</StyledProductName>
					<SpacerX size="10px" />
					<StyledRating>
						<span>4.2</span>
						<SpacerX size="3px" />
						<StarIcon size={"8"} />
					</StyledRating>
				</div>
				<SpacerY size="10px" />
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<StyledProductDescription>
						Mughlai Masala is a type of cookery developed in the Indian
						Subcontinent by Imperial kitchens of the Mughal Empire.
					</StyledProductDescription>
					<StyledProductImage
						src={
							"https://media.istockphoto.com/id/501150349/photo/chicken-biryani-11.jpg?s=1024x1024&w=is&k=20&c=nwHxmDS7XiRzQPx6fmNiNIJxjoRmZRPtzGGDcEEbPvc="
						}
					></StyledProductImage>
				</div>
			</StyledProductDetails>
		</>
	);
};
