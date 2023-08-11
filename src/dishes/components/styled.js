import styled, { css } from "styled-components";

export const StyledOption = styled.div`
	border: 1px solid #8a8a8a;
	border-radius: 20px;
	padding: 4px 16px;
	height: 20px;
	margin: 0px 4px;
`;

export const StyledOptions = styled.div`
	display: flex;
	align-items: flex-end;
	height: 90px;
	overflow-x: auto;
	width: 100%;
	margin-left: 16px;
`;

export const StyledPopularDishImage = styled.img`
	border-radius: 50%;
	border: 1px solid #ff951c;
	height: 50px;
	width: 50px;
	padding: 4px;
	filter: contrast(40%);
`;

export const StyledPopularDish = styled.span`
	position: relative;
	margin: 0px 10px;
`;

export const StyledPopularDishImageText = styled.p`
	position: absolute;
	top: 31%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 11px;
	font-weight: 800;
	color: white;
`;

export const StyledPopularDishes = styled.div`
	display: flex;
	overflow-x: auto;
	width: 100%;
	border-bottom: 1px solid #e5e5e5;
	padding-bottom: 7px;
`;

export const StyledProduct = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0px 16px;
	border-bottom: 1px solid #e5e5e5;
	padding-bottom: 16px;
`;

export const StyledProductDetails = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
`;

export const StyledProductImage = styled.img`
	border-radius: 10%;
	height: 100px;
	width: 150px;
`;

export const StyledProductTitle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const StyledRating = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background: #50c452;
	padding: 2px 4px;
	border-radius: 10%;
	font-size: 10px;
`;

export const StyledProductDescription = styled.span`
	color: #919699;
	font-family: Roboto;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-align: initial;
`;

export const StyledButton = styled.button`
	background: white;
	border: 1px solid #ff8802;
	border-radius: 15%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ff8802;
	position: relative;
	padding: 2px 10px;
	transform: translate(73%, -70%);
`;

export const SpacerY = styled.div(
	({ size = "0px" }) => css`
		height: ${size};
		width: 0px;
	`
);

export const SpacerX = styled.div(
	({ size }) => css`
		width: ${size};
		height: 0px;
	`
);
